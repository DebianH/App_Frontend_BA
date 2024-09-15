import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Image, ImageSourcePropType, TouchableOpacity, Dimensions, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLayoutEffect } from 'react';
interface HeaderProps {
  logoSource: ImageSourcePropType;
  title: string;
}

const { width, height } = Dimensions.get('window');

const Header: React.FC<HeaderProps> = ({ logoSource, title }) => {
  // const navigation = useNavigation();
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <Pressable onPress={() => navigation.openDrawer()} style={styles.iconContainerLeft}>
  //         <Icon name="menu" size={35} color="black" />
  //       </Pressable>
  //     )
  //   })
  // }, []);
  // Distancia de encabezado revisar
  return (
    <SafeAreaView >
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconContainerLeft}>
          <Icon name="menu" size={35} color="black" />
        </TouchableOpacity>
        <Image source={logoSource} style={styles.logo} />
        <TouchableOpacity onPress={() => {/* Lógica para los mensajes */ }} style={styles.iconContainerRight}>
          <Icon name="chatbox-ellipses-outline" size={35} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
    </SafeAreaView>
  )

};

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
    backgroundColor: '#c0c0c0',
    width: '100%',
    elevation: 5,
    shadowColor: '#A9A9A9'

  },
});

export default Header;
