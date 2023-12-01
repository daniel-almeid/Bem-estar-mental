import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
  const [emailOrCPF, setEmailOrCPF] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleResetPassword = () => {

    console.log('Solicitação de redefinição de senha para:', emailOrCPF);
    setIsLoading(true); 

    setTimeout(() => {
      setIsLoading(false);
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
        navigation.goBack();
      }, 2000);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/Mobile-reset.png')}
          style={styles.imageHeader}
          resizeMode="cover"
        />
      </View>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail ou CPF"
          value={emailOrCPF}
          onChangeText={(text) => setEmailOrCPF(text)}
        />
        <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
          <Text style={styles.resetButtonText}>Redefinir Senha</Text>
        </TouchableOpacity>
        {showMessage && (
          <Text style={styles.successMessage}>
            Um e-mail para redefinição de senha foi enviado para você!
          </Text>
        )}
        {isLoading && (
          <View style={styles.loadingContainer}>
            <Text>Carregando...</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    margin: 25,
  },
  imageHeader: {
    width: '50%',
    height: '100%',
    resizeMode: 'contain',
    marginBottom: 20,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  resetButton: {
    width: '50%',
    height: 40,
    backgroundColor: '#009688',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  successMessage: {
    color: '#009688',
    fontSize: 16,
    textAlign: 'center',
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});



export default ForgotPasswordScreen;
