import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const Recuperar_acesso = ({ navigation }) => {
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
          value="nome@unifae.br"
          editable={false}
        />

        <Text style={styles.label}>CÓDIGO DE VERIFICAÇÃO</Text>
        <TextInput
          style={styles.input}
          placeholder="0000-0000"
        />

        <Text style={styles.label}>NOVA SENHA</Text>
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          secureTextEntry
        />

        <Text style={styles.label}>CONFIRMAR SENHA</Text>
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          secureTextEntry
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Atualizar Senha</Text>
        </TouchableOpacity>

        <View style={styles.errorBox}>
          <Text style={styles.errorText}>
            AS SENHAS DIGITADAS NÃO COINCIDEM. TENTE NOVAMENTE.
          </Text>
        </View>
      </View>

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

export default Recuperar_acesso;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
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
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
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
});
