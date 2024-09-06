import React from 'react';
import { View, StyleSheet, Image, ImageSourcePropType, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Usando Ionicons para ejemplo

interface HeaderProps {
  logoSource: ImageSourcePropType; // Define el tipo para la fuente de la imagen
  title: string;
}

const { width, height } = Dimensions.get('window');

const Header: React.FC<HeaderProps> = ({ logoSource, title }) => (
  <SafeAreaView >
    <View style={styles.header}>
      <TouchableOpacity onPress={() => {/* Lógica para el menú */ }} style={styles.iconContainerLeft}>
        <Icon name="menu" size={35} color="black" />
      </TouchableOpacity>
      <Image source={logoSource} style={styles.logo} />
      <TouchableOpacity onPress={() => {/* Lógica para los mensajes */ }} style={styles.iconContainerRight}>
        <Icon name="chatbox-ellipses-outline" size={35} color="black" />
      </TouchableOpacity>
    </View>
    <View style={styles.line} />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFF',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainerLeft: {
    flex: 1,
    alignItems: 'flex-start',
  },
  iconContainerRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  logo: {
    flex: 2.5,
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
  line: {
    height: 1.5,
    backgroundColor: '#000', // Color de la línea
    width: '100%',
  },
});

export default Header;
