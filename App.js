import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import HomeScreen from './src/screens/HomeScreen';
import HappyScreen from './src/screens/HappyScreen';
import NeutralScreen from './src/screens/NeutralScreen';
import SadScreen from './src/screens/SadScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerTitleAlign: 'center' }}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUpScreen}
                    options={{
                        title: 'Novo Cadastro',
                        headerTitleAlign: 'center'
                    }}
                />
                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPasswordScreen}
                    options={{
                        title: 'Esqueci minha senha',
                        headerTitleAlign: 'center'
                    }}
                />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: '',
                        headerTitleAlign: 'center'
                    }}
                />
                <Stack.Screen
                    name="HappyScreen"
                    component={HappyScreen}
                    options={{
                        title: '',
                        headerTitleAlign: 'center'
                    }}
                />
                <Stack.Screen
                    name="NeutralScreen"
                    component={NeutralScreen}
                    options={{
                        title: '',
                        headerTitleAlign: 'center'
                    }}
                />
                <Stack.Screen
                    name="SadScreen"
                    component={SadScreen}
                    options={{
                        title: '',
                        headerTitleAlign: 'center'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
