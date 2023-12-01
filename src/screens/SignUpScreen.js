import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SignUpScreen = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [formattedBirthdate, setFormattedBirthdate] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleCPFChange = (text) => {
        const cleaned = text.replace(/\D/g, '');
        setCpf(cleaned);
    };

    const handleDateChange = (text) => {
        const cleaned = text.replace(/\D/g, '');

        let formatted = '';
        if (cleaned.length < 3) {
            formatted = cleaned;
        } else if (cleaned.length < 5) {
            formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
        } else {
            formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4, 8)}`;
        }

        setFormattedBirthdate(formatted);
    };

    const handleSignUp = () => {
        // Simulated signup logic
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/Mobile-cadastro.png')}
                style={styles.logo}
            />
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Icon name="person" size={20} style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Nome completo"
                        placeholderTextColor="#a0a0a0"
                        value={fullName}
                        onChangeText={(text) => setFullName(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Icon name="mail" size={20} style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                        placeholderTextColor="#a0a0a0"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Icon name="card" size={20} style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="CPF"
                        placeholderTextColor="#a0a0a0"
                        value={cpf}
                        onChangeText={handleCPFChange}
                        keyboardType="numeric"
                        maxLength={11}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Icon name="calendar" size={20} style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Data de nascimento (DD/MM/AAAA)"
                        placeholderTextColor="#a0a0a0"
                        value={formattedBirthdate}
                        onChangeText={handleDateChange}
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Icon name="lock-closed" size={20} style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        placeholderTextColor="#a0a0a0"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Icon name={showPassword ? "eye-off-outline" : "eye-outline"} size={20} style={styles.eyeIcon} />
                    </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                    <Icon name="lock-closed" size={20} style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Confirme sua senha"
                        placeholderTextColor="#a0a0a0"
                        value={confirmPassword}
                        onChangeText={(text) => setConfirmPassword(text)}
                        secureTextEntry={!showConfirmPassword}
                    />
                    <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                        <Icon name={showConfirmPassword ? "eye-off-outline" : "eye-outline"} size={20} style={styles.eyeIcon} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
                    <Text style={styles.signupButtonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        paddingHorizontal: 20,
    },
    logo: {
        width: '100%',
        height: 150,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    formContainer: {
        width: '100%',
        paddingHorizontal: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    input: {
        flex: 1,
        height: 40,
        marginLeft: 5,
    },
    signupButton: {
        width: '60%',
        height: 30,
        backgroundColor: '#009688',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10,
    },
    signupButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    icon: {
        marginRight: 10,
        color: '#009688',
    },
    eyeIcon: {
        position: 'absolute',
        right: 5,
        top: '5%',
        transform: [{ translateY: -10 }],
        color: '#a0a0a0',
    },
});

export default SignUpScreen;
