import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SadScreen = () => {
    const navigation = useNavigation();
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const handleClose = () => {

        if (!answer1 || !answer2 || !answer3) {
            setShowMessage(true);
            return;
        }

        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setModalVisible(true);
        }, 1000);
    };

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Está se sentindo triste?</Text>
                <View style={styles.buttonGroup}>
                    <TouchableOpacity
                        style={[
                            styles.button,
                            answer1 === 'sim' ? styles.selected : null,
                        ]}
                        onPress={() => setAnswer1('sim')}
                    >
                        <Text style={styles.buttonText}>Sim</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.button,
                            answer1 === 'não' ? styles.selected : null,
                        ]}
                        onPress={() => setAnswer1('não')}
                    >
                        <Text style={styles.buttonText}>Não</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.text}>Está afetando seu trabalho ou estudos?</Text>
                <View style={styles.buttonGroup}>
                    <TouchableOpacity
                        style={[
                            styles.button,
                            answer2 === 'sim' ? styles.selected : null,
                        ]}
                        onPress={() => setAnswer2('sim')}
                    >
                        <Text style={styles.buttonText}>Sim</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.button,
                            answer2 === 'não' ? styles.selected : null,
                        ]}
                        onPress={() => setAnswer2('não')}
                    >
                        <Text style={styles.buttonText}>Não</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.text}>Está afetando seu dia a dia?</Text>
                <View style={styles.buttonGroup}>
                    <TouchableOpacity
                        style={[
                            styles.button,
                            answer3 === 'sim' ? styles.selected : null,
                        ]}
                        onPress={() => setAnswer3('sim')}
                    >
                        <Text style={styles.buttonText}>Sim</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.button,
                            answer3 === 'não' ? styles.selected : null,
                        ]}
                        onPress={() => setAnswer3('não')}
                    >
                        <Text style={styles.buttonText}>Não</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    {showMessage && (
                <Text style={styles.errorMessage}>Por favor, responda a todas as perguntas.</Text>
            )}
            <TouchableOpacity style={[styles.button, { height: 50, marginTop: 150 }]} onPress={handleClose}>
                {isLoading ? (
                    <ActivityIndicator size="small" color="#fff" />
                ) : (
                    <Text style={styles.buttonText}>Enviar</Text>
                )}
            </TouchableOpacity>


            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                    navigation.navigate('Login');
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Acreditamos que você não está apto para o trabalho.
                        Você será encaminhado para um especialista.
                        </Text>
                        <TouchableOpacity
                            style={styles.modalButton}
                            onPress={() => {
                                setIsLoading(true);
                                setTimeout(() => {
                                    setIsLoading(false);
                                    setModalVisible(false);
                                    navigation.navigate('Login');
                                }, 1000);
                            }}
                        >
                            {isLoading ? (
                                <ActivityIndicator size="small" color="#fff" />
                            ) : (
                                <Text style={styles.modalButtonText}>Fechar</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            </View>
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
    textContainer: {
        marginBottom: 20,
        width: '100%',
    },
    text: {
        fontSize: 18,
        textAlign: 'left',
        marginBottom: 5,
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#009688',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        width: '48%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    selected: {
        backgroundColor: '#42b72a',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        margin: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 35,
        alignItems: 'center',
        elevation: 5,
    },
    modalText: {
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 18,
    },
    modalButton: {
        backgroundColor: '#009688',
        borderRadius: 8,
        padding: 10,
        elevation: 2,
    },
    modalButtonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
});

export default SadScreen;
