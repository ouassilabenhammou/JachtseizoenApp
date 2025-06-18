// app/login/index.tsx
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Button, TextInput, View } from 'react-native';
import { useAuth } from '../../context/AuthContext';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    if (username === 'Admin' && password === '1234') {
      login();
      router.replace('/(tabs)');
    } else {
      Alert.alert('Fout', 'Ongeldige gebruikersnaam of wachtwoord');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <TextInput
        placeholder="Gebruikersnaam"
        value={username}
        onChangeText={setUsername}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <TextInput
        placeholder="Wachtwoord"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, marginBottom: 20, padding: 8 }}
      />
      <Button title="Inloggen" onPress={handleLogin} />
    </View>
  );
}
