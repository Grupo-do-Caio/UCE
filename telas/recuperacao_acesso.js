import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { Modal } from 'react-native';
import { ScrollView } from 'react-native';

const Recuperar_acesso = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [codigo, setCodigo] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [Message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const RecuperarAcesso = async () => {

    if (!email || !codigo || !novaSenha || !confirmarSenha) {
      setMessage('Preencha todos os campos');
      setError(true)
      setModalVisible(true);
      return;
    }

    if (novaSenha !== confirmarSenha) {
      setMessage('As senhas não coincidem');
      setError(true)
      setModalVisible(true);
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/v1/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          code: codigo,
          password: novaSenha,
          confirmPassword: confirmarSenha
        })
      });

      const data = await response.json();

      console.log(data);

      if (response.ok) {
        navigation.navigate('Entrar');
        console.log('deu certo')
        setMessage(data.message || 'Senha alterada com sucesso. Faça login com a nova senha.');
        setError(false)
        setModalVisible(true);
      } else {
        setMessage(data.message || 'Erro ao alterar a senha');
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
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar style="dark" />

        {/* <View style={styles.header}>
          <Text style={styles.back}>←</Text>
          <Text style={styles.headerTitle}>UNIFAE Care</Text>
        </View>

        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.logo}
        /> */}

        {/* Essa imagem é apenas representativa já que não tenho a imagem original */}
        <Image
          source={require('../assets/UnifaeCare.jpg')}
          style={styles.logo}
        />

        <Text style={styles.title}>Recuperação de Acesso</Text>
        <Text style={styles.subtitle}>
          Redefina sua senha para continuar acessando seus dados clínicos e acadêmicos com total segurança.
        </Text>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>DICA DE SEGURANÇA</Text>
          <Text style={styles.infoText}>
            Use ao menos 8 caracteres, incluindo letras maiúsculas, números e um símbolo especial.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>E-MAIL CADASTRADO</Text>
          <TextInput
            style={styles.input}
            placeholder="nome@unifae.br"
            editable={true}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>CÓDIGO DE VERIFICAÇÃO</Text>
          <TextInput
            style={styles.input}
            placeholder="0000-0000"
            onChangeText={setCodigo}
          />

          <Text style={styles.label}>NOVA SENHA</Text>
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            secureTextEntry
            onChangeText={setNovaSenha}
          />

          <Text style={styles.label}>CONFIRMAR SENHA</Text>
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            secureTextEntry
            onChangeText={setConfirmarSenha}
          />

          <TouchableOpacity style={styles.button} onPress={RecuperarAcesso}>
            <Text style={styles.buttonText}>Atualizar Senha</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomLinks}>
          <Text>PRIVACIDADE</Text>
          <Text>TERMOS</Text>
          <Text>ACESSIBILIDADE</Text>
        </View>

        <Text style={styles.copy}>
          © 2024 UNIFAE CARE. CLINICAL EDITORIAL SYSTEM.
        </Text>

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
      </ScrollView>
    </View>
  );
};

export default Recuperar_acesso;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 10,
    justifyContent: 'space-between',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
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
    width: 70,
    height: 70,
    alignSelf: 'left',
    marginBottom: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 2,
  },

  subtitle: {
    marginBottom: 20,
    color: '#555',
  },

  infoBox: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    borderLeftWidth: 5,
    borderLeftColor: 'green',
    marginBottom: 20,
  },

  infoTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'green',
  },

  infoText: {
    color: '#555',
    fontSize: 13,
  },

  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
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
    marginTop: 10,
    marginBottom: 15,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  errorBox: {
    backgroundColor: '#f8d7da',
    padding: 10,
    borderRadius: 10,
  },

  errorText: {
    color: '#a94442',
    fontSize: 12,
    textAlign: 'center',
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
