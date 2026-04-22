import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { Modal } from 'react-native';

const Recuperar_senha = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [Message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const RecuperarSenha = async () => {

    if (!email) {
      setMessage('Preencha todos os campos');
      setError(true)
      setModalVisible(true);
      return;
    }

    try {
      const response = await fetch('http://IP da maquina/api/v1/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
        })
      });

      const data = await response.json();

      console.log(data);

      if (response.ok) {
        console.log('deu certo')
        setMessage(data.message || 'Enviamos um código de 8 caracteres para o e-mail informado. Use-o junto com a nova senha para concluir.');
        setError(false)
        setModalVisible(true);
        navigation.navigate('Recuperar Acesso');
      } else {
        setMessage(data.message || 'Erro ao enviar o código');
        setError(true)
        setModalVisible(true);
      }

    } catch (error) {
      setMessage('Erro de conexão com o servidor');
      setError(true)
      setModalVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* <View style={styles.header}>
        <Text style={styles.back}>←</Text>
        <Text style={styles.headerTitle}>UNIFAE Care</Text>
      </View> */}

      <View style={styles.containerRecuperar}>

        {/* Essa imagem é apenas representativa já que não tenho a imagem original */}
        <Image
          source={require('../assets/UnifaeCare.jpg')}
          style={styles.logo}
        />

        <Text style={styles.title}>Recuperar Senha</Text>
        <Text style={styles.subtitle}>
          Insira seu e-mail para receber um código de 8 dígitos para redefinir sua conta.
        </Text>

        <View style={styles.card}>
          <Text style={styles.label}>ENDEREÇO DE E-MAIL</Text>
          <TextInput
            style={styles.input}
            placeholder="seu@email.com"
            onChangeText={setEmail}
          />

          <TouchableOpacity style={styles.button} onPress={RecuperarSenha}>
            <Text style={styles.buttonText}>Enviar Código de Recuperação</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Entrar')}>
            <Text style={styles.link}>← Voltar ao Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Informação Importante</Text>
          <Text style={styles.infoText}>
            Por motivos de segurança, o código de recuperação expira em 15 minutos. Verifique sua caixa de spam caso não receba o e-mail em instantes.
          </Text>
        </View>
      </View>

      <View>
        <View style={styles.bottomLinks}>
            <Text>PRIVACIDADE</Text>
            <Text>TERMOS</Text>
            <Text>ACESSIBILIDADE</Text>
        </View>

        <Text style={styles.copy}>
            © 2024 UNIFAE CARE. CLINICAL EDITORIAL SYSTEM.
        </Text>
      </View>

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
    </View>
  );
};

export default Recuperar_senha;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#f2f2f2',
    padding: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    height: 100
  },

  containerRecuperar: {
    flex: 1,
    justifyContent: 'center'
  },

  back: {
    fontSize: 20,
    color: 'green',
    marginRight: 10,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },

  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 30,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitle: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },

  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    marginTop: 20,
  },

  label: {
    marginBottom: 5,
    color: '#333',
    fontSize: 12,
  },

  input: {
    backgroundColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },

  button: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  link: {
    color: 'green',
    textAlign: 'center',
  },

  infoBox: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    borderLeftWidth: 5,
    borderLeftColor: 'green',
    marginTop: 20,
    marginBottom: 20,
  },

  infoTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },

  infoText: {
    color: '#555',
    fontSize: 13,
  },

  copy: {
    textAlign: 'center',
    fontSize: 12,
    color: '#777',
    marginTop: 10,
  },

  bottomLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },

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
});