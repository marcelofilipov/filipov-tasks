import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import auth from '@react-native-firebase/auth';

import { colors, fonts } from '../../styles';

import { styles } from './styles';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  function signUp() {
    if (email === '' || password === '') {
      Alert.alert('Algo deu errado', 'Preencha todos os campos primeiro!');
      return;
    };

    auth().createUserWithEmailAndPassword(email, password)
      .catch(error => (
        Alert.alert(error.code, error.message)
      ));
  }

  function signIn() {
    setLoading(true);
    if (email === '' || password === '') {
      Alert.alert('Algo deu errado', 'Preencha todos os campos primeiro!');
      setLoading(false);
      return;
    };

    auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        if (error.code === 'auth/wrong-password') (
          Alert.alert('Algo deu errado', 'A senha é inválida ou o usuário não possui uma senha.')
        )
      });
    setLoading(false);
  }

  function resetPassword() {
    if (email === '') {
      Alert.alert('Algo deu errado', 'Preencha o campo de email para o envio o link de redefinição de senha.');
      return;
    }

    auth().sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert('Email Enviado', 'Email para redefinição de senha enviado com sucesso!')
      })
      .catch(error => console.log(error));
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icon.png')}
        style={styles.imageLogo}
      />
      <TextInput
        value={email}
        onChangeText={value => setEmail(value)}
        style={styles.input}
        placeholder='Email'
        placeholderTextColor={colors.PLACEHOLDER_TEXT_COLOR}
      />
      <View style={styles.containerInputPassword}>
        <TextInput
          value={password}
          onChangeText={value => setPassword(value)}
          style={styles.inputPassword}
          placeholder='Senha'
          placeholderTextColor={colors.PLACEHOLDER_TEXT_COLOR}
          secureTextEntry={!passwordIsVisible}
        />
        <TouchableOpacity
          onPress={() => setPasswordIsVisible(!passwordIsVisible)}
        >
          <Feather
            name='eye'
            size={28}
            color={colors.PLACEHOLDER_TEXT_COLOR}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={resetPassword}
      >
        <Text style={styles.TextResetPassword}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.containerButtonLogin}
        onPress={signIn}
        disabled={loading}
      >
        {
          loading
            ? <ActivityIndicator size={24} color={colors.BACKGROUND} />
            : <Text style={styles.textButtonLogin}>ENTRAR</Text>
        }
      </TouchableOpacity>
      <TouchableOpacity onPress={signUp}>
        <Text style={styles.TextResetPassword}>Criar uma conta</Text>
      </TouchableOpacity>
    </View>
  )
}
