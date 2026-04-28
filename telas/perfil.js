import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Perfil = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* Header */}
      <Text style={styles.header}>UNIFAE Care</Text>

      {/* Avatar */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=5' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Cristiane Imamura</Text>
        <Text style={styles.cpf}>ID: 88829-RH8A</Text>
      </View>

      {/* Cards */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Fisioterapeuta Responsável</Text>
        <Text style={styles.cardName}>Dr. Sarah Chen</Text>
        <Text style={styles.cardSubtitle}>Especialista Ortopédica</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Coordenador Responsável</Text>
        <Text style={styles.cardName}>Dr. Vanessa</Text>
        <Text style={styles.cardSubtitle}>Especialista Ortopédica</Text>
      </View>

      {/* Meta semanal */}
      <View style={styles.metaBox}>
        <Text style={styles.metaTitle}>Meta Semanal</Text>
        <Text style={styles.metaValue}>85% Concluído</Text>

        <View style={styles.progressBar}>
          <View style={styles.progress} />
        </View>
      </View>

      {/* Configurações */}
      <View style={styles.options}>
        <TouchableOpacity style={styles.optionItem}>
          <Text>Lembretes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem}>
          <Text>Notificações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem}>
          <Text>Privacidade e Dados</Text>
        </TouchableOpacity>
      </View>

      {/* Botão sair */}
      <TouchableOpacity style={styles.logout}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>

      <Text style={styles.version}>v2.4.0</Text>

      {/* Bottom Navigation (simples) */}
      <View style={styles.bottomNav}>
        <Text>Início</Text>
        <Text>Agenda</Text>
        <Text>Progresso</Text>
        <Text style={styles.active}>Perfil</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
  },

  header: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },

  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginBottom: 10,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  cpf: {
    color: '#777',
  },

  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },

  cardTitle: {
    fontSize: 12,
    color: '#888',
  },

  cardName: {
    fontWeight: 'bold',
    marginTop: 5,
  },

  cardSubtitle: {
    color: '#555',
  },

  metaBox: {
    backgroundColor: '#dff0e0',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
  },

  metaTitle: {
    fontSize: 12,
    color: '#555',
  },

  metaValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },

  progressBar: {
    height: 8,
    backgroundColor: '#ccc',
    borderRadius: 10,
  },

  progress: {
    width: '85%',
    height: '100%',
    backgroundColor: 'green',
    borderRadius: 10,
  },

  options: {
    marginBottom: 20,
  },

  optionItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

  logout: {
    backgroundColor: '#e6cccc',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  logoutText: {
    color: '#a94442',
    fontWeight: 'bold',
  },

  version: {
    textAlign: 'center',
    marginTop: 10,
    color: '#777',
  },

  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },

  active: {
    color: 'green',
    fontWeight: 'bold',
  },
});

export default Perfil;