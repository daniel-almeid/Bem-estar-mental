import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleFeeling = (feeling) => {
    switch (feeling) {
      case 'Feliz':
        navigation.navigate('HappyScreen');
        break;
      case 'Neutro':
        navigation.navigate('NeutralScreen');
        break;
      case 'Triste':
        navigation.navigate('SadScreen');
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Como você está se sentindo hoje?</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => handleFeeling('Feliz')}>
          <Icon name="emoticon-happy" type="material-community" size={50} color="#42b72a" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFeeling('Neutro')}>
          <Icon name="emoticon-neutral" type="material-community" size={50} color="#ffa500" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFeeling('Triste')}>
          <Icon name="emoticon-sad" type="material-community" size={50} color="#ff0000" />
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
  headerText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    width: '70%',
  },
});

export default HomeScreen;
