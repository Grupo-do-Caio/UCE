import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
<<<<<<< HEAD

const Login = ({ navigation }) => {
=======
import React, { useState } from 'react';
import { Modal } from 'react-native';

const Login = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setSenha] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [Message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const fazerLogin = async () => {

    if (!email || !password) {
      setMessage('Preencha todos os campos');
      setError(true)
      setModalVisible(true);
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/v1/auth/login', {
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
        navigation.navigate('AceitarTermo');
        console.log('deu certo')
        setMessage(data.message || 'Sucesso ao realizar o login');
        setError(false)
        setModalVisible(true);
      } else {
        setMessage(data.message || 'Erro ao fazer login');
        setError(true)
        setModalVisible(true);
      }

    } catch (error) {
      setMessage('Erro de conexão com o servidor');
      setError(true)
      setModalVisible(true);
    }
  };

>>>>>>> origin/main
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

<<<<<<< HEAD
      {/* Logo */}
      <Image
        source={{ uri: 'https://via.placeholder.com/100' }} // troca pela sua imagem depois
        style={styles.logo}
      />

      {/* Título */}
      <Text style={styles.title}>Bem-vindo ao UNIFAE Care</Text>
      <Text style={styles.subtitle}>
        Entre com suas credenciais para continuar.
      </Text>

      {/* Email */}
      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="nome@exemplo.com.br"
      />

      {/* Senha */}
      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="••••••••"
        secureTextEntry
      />

      {/* Recuperar senha */}
      <TouchableOpacity>
        <Text style={styles.link}>RECUPERAR SENHA</Text>
      </TouchableOpacity>

      {/* Botão */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar →</Text>
      </TouchableOpacity>

      {/* Cadastro */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Não possui uma conta?</Text>
        <Text style={styles.footerLink}>Cadastre-se agora</Text>
      </View>

      {/* Rodapé */}
=======
      <View style={styles.containerLogin}>

        {/* Essa imagem é apenas representativa já que não tenho a imagem original */}
        <Image
          source={require('../assets/UnifaeCare.jpg')}
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
      </View>

>>>>>>> origin/main
      <Text style={styles.copy}>
        © 2024 UNIFAE CARE. CLINICAL EDITORIAL SYSTEM.
      </Text>

      <View style={styles.bottomLinks}>
        <Text>PRIVACIDADE</Text>
        <Text>TERMOS</Text>
        <Text>ACESSIBILIDADE</Text>
      </View>
<<<<<<< HEAD
=======

      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
      >
        <View style={styles.ModalContainer}>
    
          <View style={styles.errorBox}>
            <Text style={[
              styles.errorTitle,
              { color: error ? '#a94442' : 'green' }
            ]}>
              {error ? 'Erro' : 'Sucesso'}
            </Text>

            <Text style={styles.errorText}>
              {Message}
            </Text>

            <TouchableOpacity
              style={[
                styles.errorButton,
                { backgroundColor: error ? '#a94442' : 'green' }
              ]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.errorButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
>>>>>>> origin/main
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: '#f2f2f2',
    padding: 20,
    justifyContent: 'center',
=======
    justifyContent: 'space-between',
    backgroundColor: '#f2f2f2',
    padding: 20,
  },

  containerLogin: {
    flex: 1,
    justifyContent: 'center'
>>>>>>> origin/main
  },

  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
<<<<<<< HEAD
    marginBottom: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
=======
    marginBottom: 30,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
>>>>>>> origin/main
  },

  subtitle: {
    textAlign: 'center',
<<<<<<< HEAD
    marginBottom: 30,
=======
    marginBottom: 50,
>>>>>>> origin/main
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
<<<<<<< HEAD
    marginBottom: 15,
=======
    marginBottom: 25,
>>>>>>> origin/main
  },

  link: {
    color: 'green',
    textAlign: 'right',
    marginBottom: 20,
  },

  button: {
<<<<<<< HEAD
    backgroundColor: '#1dbe8eff',
=======
    backgroundColor: 'green',
>>>>>>> origin/main
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
<<<<<<< HEAD
    marginBottom: 20,
=======
    marginTop: 60,
>>>>>>> origin/main
  },

  footerText: {
    color: '#555',
  },

  footerLink: {
    color: 'green',
    fontWeight: 'bold',
<<<<<<< HEAD
=======
    marginTop: 10,
>>>>>>> origin/main
  },

  copy: {
    textAlign: 'center',
    fontSize: 12,
    color: '#777',
<<<<<<< HEAD
    marginTop: 20,
=======
    marginTop: 10,
>>>>>>> origin/main
  },

  bottomLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
<<<<<<< HEAD
=======

  // Modal
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
>>>>>>> origin/main
});