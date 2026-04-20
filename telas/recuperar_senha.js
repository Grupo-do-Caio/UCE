import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const Recuperar_senha = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* <View style={styles.header}>
        <Text style={styles.back}>←</Text>
        <Text style={styles.headerTitle}>UNIFAE Care</Text>
      </View>

      <Image
        source={{ uri: 'https://via.placeholder.com/100' }}
        style={styles.logo}
      /> */}

      <Text style={styles.title}>Recuperar Senha</Text>
      <Text style={styles.subtitle}>
        Insira seu e-mail para receber um código de 8 dígitos para redefinir sua conta.
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>ENDEREÇO DE E-MAIL</Text>
        <TextInput
          style={styles.input}
          placeholder="seu@email.com"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Enviar Código de Recuperação</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.link}>← Voltar ao Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Informação Importante</Text>
        <Text style={styles.infoText}>
          Por motivos de segurança, o código de recuperação expira em 15 minutos. Verifique sua caixa de spam caso não receba o e-mail em instantes.
        </Text>
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
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
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
});