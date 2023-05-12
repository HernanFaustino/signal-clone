import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView } from 'react-native';
import { auth } from '../firebase';
if (LogBox) {
  LogBox.ignoreLogs(['Setting a timer']);
}

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log(authUser)
      if (authUser) {
        navigation.replace('Home');
      }
    });

    return unsubscribe;
  }, []);

  const singIn = () => {
    auth.signInWithEmailAndPassword(email, password)
    .catch(error => alert(error));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri:
            'https://seeklogo.com/images/S/signal-logo-20A1616F60-seeklogo.com.png',
        }}
        style={{
          width: 200,
          height: 200,
        }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={singIn}
        />
      </View>
      <Button containerStyle={styles.button} onPress={singIn} title="Login" />
      <Button
        containerStyle={styles.button}
        onPress={() => navigation.navigate('Register')}
        type="outline"
        title="Register"
      />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  inputContainer: {
    width: 300,
    marginTop: 50
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
