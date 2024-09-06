import React from 'react';
import { View, StyleSheet, Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Usando Ionicons para ejemplo

interface HeaderProps {
  logoSource: ImageSourcePropType; // Define el tipo para la fuente de la imagen
  title: string;
}

const Header: React.FC<HeaderProps> = ({ logoSource, title }) => (
  <View>
    <View style={styles.header}>
      <TouchableOpacity onPress={() => {/* Lógica para el menú */}} style={styles.iconContainerLeft}>
        <Icon name="menu" size={35} color="black" />
      </TouchableOpacity>

      <Image source={logoSource} style={styles.logo} />

      <TouchableOpacity onPress={() => {/* Lógica para los mensajes */}} style={styles.iconContainerRight}>
        <Icon name="chatbox-ellipses-outline" size={35} color="black" />
      </TouchableOpacity>
    </View>
    <View style={styles.line} />
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFEEE',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Distribuye el espacio entre los íconos y el logo
  },
  iconContainerLeft: {
    flex: 1,
    alignItems: 'flex-start', // Alinea el ícono del menú a la izquierda
  },
  iconContainerRight: {
    flex: 1,
    alignItems: 'flex-end', // Alinea el ícono de los mensajes a la derecha
  },
  logo: {
    flex: 2.5, // Ajusta el tamaño del logo aumentando el espacio que ocupa
    width: 45, // Aumenta el tamaño del logo
    height: 45,
    resizeMode: 'contain',
  },
  line: {
    height: 1.5, // Altura de la línea
    backgroundColor: '#000', // Color de la línea
    width: '100%', // Ocupa todo el ancho del contenedor
  },
});

export default Header;
