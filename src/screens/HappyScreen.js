import React, { useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


const HappyScreen = () => {
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false);

    const handleClose = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            navigation.navigate('Login');
        }, 1000);
    };

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Ótimo! Ficamos felizes em saber que está tudo bem!</Text>
                <Text style={styles.text}>Tenha um bom trabalho!</Text>
            </View>
            <Icon name="emoticon-happy" type="material-community" size={50} color="#42b72a" />
            <TouchableOpacity style={styles.button} onPress={handleClose}>
                {isLoading ? (
                    <ActivityIndicator size="small" color="#fff" />
                ) : (
                    <Text style={styles.buttonText}>Fechar</Text>
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
    },
    text: {
        fontSize: 24,
        textAlign: 'center',
    },
    button: {
        marginTop: 20,
        backgroundColor: '#009688',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default HappyScreen;
