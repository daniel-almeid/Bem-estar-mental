import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false);

    const handleLoginPress = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            navigation.navigate('Home');
        }, 1500);
    };

    const handleSignupPress = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            navigation.navigate('SignUp');
        }, 1000);
    };

    const handleForgotPassword = () => {
        navigation.navigate('ForgotPassword');
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/Mobile-login.png')}
                style={styles.logo}
            />
            <View style={styles.inputContainer}>
                <Ionicons name="person" size={24} style={styles.icon} />
                <TextInput
                    placeholder="CPF ou E-mail"
                    style={styles.input}
                />
            </View>
            <View style={styles.inputContainer}>
                <Ionicons name="lock-closed" size={24} style={styles.icon} />
                <TextInput
                    placeholder="Senha"
                    secureTextEntry={true}
                    style={styles.input}
                />
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
                {isLoading ? (
                    <ActivityIndicator size="small" color="#fff" />
                ) : (
                    <Text style={styles.loginButtonText}>Entrar</Text>
                )}
            </TouchableOpacity>
            <View style={styles.linksContainer}>
                <TouchableOpacity onPress={handleForgotPassword}>
                    <Text style={styles.linkText}>Esqueceu sua senha?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSignupPress}>
                    {isLoading ? (
                        <ActivityIndicator size="small" color="#009688" />
                    ) : (
                        <Text style={styles.linkText}>Ainda não possui login?</Text>
                    )}
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2', // Cor de fundo cinza claro
        paddingHorizontal: 20,
    },
    logo: {
        width: '100%',
        height: 250,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#009688',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {
        flex: 1,
        height: 35,
        marginLeft: 10,
        color: '#009688',
    },
    icon: {
        marginRight: 10,
        color: '#009688',
    },
    loginButton: {
        width: '60%', // Corrigindo a string de largura
        height: 40,
        backgroundColor: '#009688',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10,
        padding: 10,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    linksContainer: {
        marginTop: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    linkText: {
        color: '#009688',
        textDecorationLine: 'underline',
        marginBottom: 5,
        padding: 10,
    },
});

