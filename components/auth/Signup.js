import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import React, {useState, useContext} from 'react';
import {AuthContext} from './AuthProvider';

const Signup = ({navigation}) => {
  const signup_auth = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        // Signed up
        const user = userCredential.user;
        setUser(user);
        navigation.replace('Profile');
        console.log('logged in with :', user.email);
        console.log(user);
      })
      .catch(error => {
        const errorCode = error.code;
        alert(error.message);
      });
  };
  const {setUser} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.body}>
      <View style={styles.signup}>
        <TextInput name="name" style={[styles.input]} placeholder={'Name'} />
        <TextInput
          value={email}
          style={[styles.input]}
          onChangeText={text => setEmail(text)}
          placeholder={'Email'}
        />
        <TextInput
          value={password}
          style={styles.input}
          onChangeText={text => setPassword(text)}
          placeholder={'Password'}
        />
        <Button title="Signup" style={styles.button} onPress={signup_auth} />
      </View>
      <View style={styles.login}>
        <Text
          style={[styles.button, styles.text]}
          onPress={() => {
            navigation.replace('Login');
          }}>
          Already have an account
        </Text>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  login: {textAlign: 'center'},
  signup: {padding: 5},
  input: {padding: 10, marginVertical: 5},
  text: {
    color: 'blue',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    fontSize: 20,
  },
});
