import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { Modal } from 'react-native';

const Login = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setSenha] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [Message, setMessage] = useState('');

  const fazerLogin = async () => {

    if (!email || !password) {
      setMessage('Preencha todos os campos');
      setModalVisible(true);
      return;
    }

    try {
      const response = await fetch('http://192.168.0.10:3000/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          accessMode: 'APP',
          appId: 1
        })
      });

      const data = await response.json();

      console.log(data);

      if (response.ok) {
        // navigation.navigate('Não sei para qual tela irá');
        console.log('deu certo')
      } else {
        setMessage(data.message || 'Erro ao fazer login');
        setModalVisible(true);
      }

    } catch (error) {
      setMessage('Erro de conexão com o servidor');
      setModalVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <Image
        source={{ uri: 'https://via.placeholder.com/100' }} 
        style={styles.logo}
      />

      <Text style={styles.title}>Bem-vindo ao UNIFAE Care</Text>
      <Text style={styles.subtitle}>
        Entre com suas credenciais para continuar.
      </Text>

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="nome@exemplo.com.br"
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="••••••••"
        secureTextEntry
        onChangeText={setSenha}
      />

      <TouchableOpacity onPress={() => navigation.navigate('Recuperar Senha')}>
        <Text style={styles.link}>RECUPERAR SENHA</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={fazerLogin}>
        <Text style={styles.buttonText}>Entrar →</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Não possui uma conta?</Text>
        <Text style={styles.footerLink}>Cadastre-se agora</Text>
      </View>

      <Text style={styles.copy}>
        © 2024 UNIFAE CARE. CLINICAL EDITORIAL SYSTEM.
      </Text>

      <View style={styles.bottomLinks}>
        <Text>PRIVACIDADE</Text>
        <Text>TERMOS</Text>
        <Text>ACESSIBILIDADE</Text>
      </View>

      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
      >
        
        <View style={styles.ModalContainer}>
    
          <View style={styles.errorBox}>
        
            <Text style={styles.errorTitle}>Erro</Text>

            <Text style={styles.errorText}>
              {Message}
            </Text>

            <TouchableOpacity
              style={styles.errorButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.errorButtonText}>Fechar</Text>
            </TouchableOpacity>

          </View>

        </View>
      </Modal>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
    justifyContent: 'center',
  },

  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subtitle: {
    textAlign: 'center',
    marginBottom: 30,
    color: '#555',
  },

  label: {
    marginBottom: 5,
    color: '#333',
  },

  input: {
    backgroundColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },

  link: {
    color: 'green',
    textAlign: 'right',
    marginBottom: 20,
  },

  button: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  footer: {
    alignItems: 'center',
    marginBottom: 20,
  },

  footerText: {
    color: '#555',
  },

  footerLink: {
    color: 'green',
    fontWeight: 'bold',
  },

  copy: {
    textAlign: 'center',
    fontSize: 12,
    color: '#777',
    marginTop: 20,
  },

  bottomLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },

  ModalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  errorBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, 
  },

  errorTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#a94442',
    marginBottom: 10,
  },

  errorText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 15,
  },

  errorButton: {
    backgroundColor: '#a94442',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  errorButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});