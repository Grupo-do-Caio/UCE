import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Home = ({ navigation }) => {

  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    buscarApps();
  }, []);

  const buscarApps = async () => {
    try {
      const response = await fetch('http://IP da maquina/api/v1/auth/apps');
      const data = await response.json();

      setApps(data);
    } catch (error) {
      console.log('Erro ao buscar apps', error);
    } finally {
      setLoading(false);
    }
  };

  const selecionarApp = (app) => {
    navigation.navigate('Entrar');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Text style={styles.title}>Aplicativos disponíveis</Text>
        <Text style={styles.subtitle}>
          Selecione um sistema para continuar
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>

        {loading ? (
          <ActivityIndicator size="large" color="green" />
        ) : apps.length === 0 ? (
          <Text style={styles.message}>
            Nenhum aplicativo disponível
          </Text>
        ) : (
          apps.map((app) => (
            <TouchableOpacity 
              key={app.id}
              style={styles.appCard}
              onPress={() => selecionarApp(app)}
              activeOpacity={0.8}
            >
              <Text style={styles.appName}>{app.name}</Text>
              <Text style={styles.appAction}>Acessar →</Text>
            </TouchableOpacity>
          ))
        )}

      </ScrollView>

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

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },

  // HEADER
  header: {
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },

  subtitle: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  message: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 16,
    color: '#777'
  },

  appCard: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },

  appName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },

  appAction: {
    marginTop: 5,
    color: 'green',
    fontSize: 13,
  },

  // FOOTER
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
    marginBottom: 10,
  },

  link: {
    fontSize: 12,
    color: '#555',
  },
});