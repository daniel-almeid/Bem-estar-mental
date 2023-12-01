import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NeutralScreen = () => {
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false);
    const [problem1, setProblem1] = useState('');
    const [problem2, setProblem2] = useState('');
    const [problem3, setProblem3] = useState('');
    const [problem4, setProblem4] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    const handleClose = () => {

        if (!problem1.trim() || !problem2.trim() || !problem3.trim() || !problem4.trim()) {
            setShowMessage(true);
            return;
        }

        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            navigation.navigate('Login');
        }, 1000);
    };

    return (
        <View style={styles.container}>
            {showMessage && (
                <Text style={styles.errorMessage}>Todos os campos são obrigatórios.</Text>
            )}
            <View style={styles.textContainer}>
                <Text style={styles.text}>Está com algum problema em sua vida?</Text>
                <TextInput
                    style={styles.input}
                    multiline={true}
                    numberOfLines={2}
                    value={problem1}
                    onChangeText={(text) => setProblem1(text)}
                />
                <Text style={styles.text}>Deseja conversar com algum especialista?</Text>
                <TextInput
                    style={styles.input}
                    multiline={true}
                    numberOfLines={2}
                    value={problem2}
                    onChangeText={(text) => setProblem2(text)}
                />
                <Text style={styles.text}>Está com algum problema de saúde?</Text>
                <TextInput
                    style={styles.input}
                    multiline={true}
                    numberOfLines={2}
                    value={problem3}
                    onChangeText={(text) => setProblem3(text)}
                />
                <Text style={styles.text}>Se sente apto para continuar seu trabalho?</Text>
                <TextInput
                    style={styles.input}
                    multiline={true}
                    numberOfLines={2}
                    value={problem4}
                    onChangeText={(text) => setProblem4(text)}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleClose}>
                {isLoading ? (
                    <ActivityIndicator size="small" color="#fff" />
                ) : (
                    <Text style={styles.buttonText}>Enviar</Text>
                )}
            </TouchableOpacity>
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
    textContainer: {
        marginBottom: 20,
        width: '100%',
    },
    text: {
        fontSize: 18,
        textAlign: 'left',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginBottom: 20,
        width: '100%',
    },
    button: {
        backgroundColor: '#009688',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    errorMessage: {
        color: 'red',
        marginTop: 10,
        textAlign: 'center',
    },
});

export default NeutralScreen;
