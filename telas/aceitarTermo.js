import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Modal } from 'react-native';

const AceitarTermos = ({ navigation }) => {
  const [aceito, setAceito] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [Message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const continuar = async () => {
    try {
        const response = await fetch('http://IP da maquina/api/v1/auth/consent/accept', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                consentTermId: 2,
                accepted: aceito
            })
        });

      const data = await response.json();

      console.log(data);

      if (response.ok) {
        // navigation.navigate('Não sei para qual tela ele vai');
        console.log('deu certo')
        setMessage(data.message || 'Termo aceito com sucesso');
        setError(false)
        setModalVisible(true);
      } else {
        setMessage(data.message || 'Erro ao aceitar o termo');
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
      <Text style={styles.title}>Termos de Uso</Text>

      <ScrollView style={styles.box}>
        <Text style={styles.text}>
          Aqui vão os termos de uso
        </Text>
      </ScrollView>

      <TouchableOpacity
        style={[
          styles.checkbox, { backgroundColor: aceito ? 'green' : '#ccc' }]}
          onPress={() => setAceito(!aceito)}
      >
        <Text style={styles.checkboxText}> {aceito ? '✓ Termos aceitos' : 'Aceitar termos'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button, { backgroundColor: aceito ? 'green' : '#aaa' }
        ]}
        disabled={!aceito}
        onPress={continuar}
      >
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>

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

export default AceitarTermos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  box: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },

  text: {
    fontSize: 14,
    color: '#333',
  },

  checkbox: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },

  checkboxText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
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