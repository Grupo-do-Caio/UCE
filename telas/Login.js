import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

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
      <Text style={styles.copy}>
        © 2024 UNIFAE CARE. CLINICAL EDITORIAL SYSTEM.
      </Text>

      <View style={styles.bottomLinks}>
        <Text>PRIVACIDADE</Text>
        <Text>TERMOS</Text>
        <Text>ACESSIBILIDADE</Text>
      </View>
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
    backgroundColor: '#1dbe8eff',
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
});