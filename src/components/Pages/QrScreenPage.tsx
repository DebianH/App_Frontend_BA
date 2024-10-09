/*
import React from "react";
import {
    View,
    Image,
    StyleSheet,
    Text,
    Pressable,
    Linking,
    Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCameraPermissions, CameraView, CameraType } from "expo-camera";
export default function QrScreenPage() {
    const [permisos, setPermisos] = useCameraPermissions();
    const [isVisible, setIsVisible] = React.useState(false);
    const [scanning, setScanning] = React.useState(false);
    // setPermisos();

    const isValidUrl = (url: any) => {
        const regex = /^(ftp|http|https):\/\/[^ "]+$/;
        return regex.test(url);
    };

    const openScanner = () => {
        setIsVisible(true);
    };

    const handleBarCodeScanned = ({ data: data }: any) => {
        if (!isValidUrl(data)) {
            Alert.alert("Error", "Código QR no contiene una URL válida");
        }
        Linking.openURL(data);
    };
    return (
        <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: "semibold", marginBottom: 10, textAlign: "center" }}>
                Escanear QR
            </Text>
            <View style={styles.square}>
                {isVisible &&
                    <CameraView
                        style={StyleSheet.absoluteFill}
                        facing="back"
                        onBarcodeScanned={handleBarCodeScanned}
                    />
                }
            </View>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.buttonLeft} onPress={() => setIsVisible(false)}>
                    <Text style={styles.buttonText}>Cancelar</Text>
                </Pressable>
                <Pressable style={styles.buttonRight} onPress={openScanner}>
                    <Text style={styles.buttonText}>Leer QR</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

  square: {
    width: 280,
    height: 280,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
},
    buttonContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 50,
    },
    buttonLeft: {
        position: 'absolute',
        left: 30,
        backgroundColor: '#d3e6d1',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        borderColor: '#c0c0c0',
        borderWidth: 1,
    },
    buttonRight: {
        position: 'absolute',
        right: 30,
        backgroundColor: '#77c528',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        borderColor: '#828282',
        borderWidth: 1,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
    },

}); */
/*
import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';

const FileUploadScreen = () => {
  // Función para acceder a los archivos locales
  const selectFromDevice = async () => {
    try {
      const result: DocumentPickerResponse[] = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf], // Aceptar solo archivos PDF
      });
      // Manejar el primer archivo seleccionado
      handleFileUpload(result[0]);
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        Alert.alert('Selección de archivo cancelada');
      } else {
        console.error('Error al seleccionar archivo:', error);
      }
    }
  };

  // Función para manejar el archivo seleccionado
  const handleFileUpload = (file: DocumentPickerResponse) => {
    if (file && file.type === 'application/pdf') {
      // Aquí iría el código para subir el archivo (ej. a un servidor)
      console.log('Archivo PDF seleccionado:', file);
      Alert.alert('Archivo seleccionado:', file.name || 'Sin nombre'); // Asegurarse de que 'name' no sea null
    } else {
      Alert.alert('Formato no válido', 'Solo se aceptan archivos PDF.');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Subir Archivos" onPress={selectFromDevice} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default FileUploadScreen; */

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, PanResponder, Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

// Configurar las vistas de forma dinámica para escalabilidad
const views = [
  {
    title: 'Vista 1: Preregistro',
    fields: ['Nombre de la Organización', 'RUC', 'Teléfono', 'Email', 'Dirección'],
  },
  {
    title: 'Vista 2: Información Adicional',
    fields: [
      'Propósito de la Organización',
      'Motivo de la Organización',
      'Número de beneficiarios a cargo',
      'Número de preregistros',
      'Dirección',
    ],
  },
  {
    title: 'Vista 3: Representante',
    fields: [
      'Nombre del representante',
      'Número de documento',
      'Cargo en la Organización',
      'Email del representante',
      'Teléfono del representante',
    ],
  },
];

const HorizontalPages = () => {
  const [viewIndex, setViewIndex] = useState(0);
  const translateX = React.useRef(new Animated.Value(0)).current;

  

  React.useEffect(() => {
    Animated.spring(translateX, {
      toValue: -viewIndex * width,
      useNativeDriver: true,
    }).start();
  }, [viewIndex]);

  const renderViews = () => {
    return (
      <Animated.View style={[styles.viewContainer, { transform: [{ translateX }] }]}>
        {views.map((view, index) => (
          <View key={index} style={styles.page}>
            <Text style={styles.header}>{view.title}</Text>
            {view.fields.map((placeholder, idx) => (
              <TextInput key={idx} style={styles.input} placeholder={placeholder} />
            ))}
            <Button
              title={index === views.length - 1 ? 'Finalizar y enviar' : 'Siguiente'}
              onPress={() => {
                if (index < views.length - 1) setViewIndex(index + 1);
                else alert('Formulario enviado');
              }}
            />
            {index > 0 && <Button title="Atrás" onPress={() => setViewIndex(index - 1)} />}
          </View>
        ))}
      </Animated.View>
    );
  };

  const renderIndicators = () => {
    return (
      <View style={styles.indicatorContainer}>
        {views.map((_, index) => (
          <Animated.View
            key={index}
            style={[
              styles.indicator,
              { opacity: index === viewIndex ? 1 : 0.3 },
              { transform: [{ scale: index === viewIndex ? 1.2 : 1 }] }, // Aumentar tamaño del indicador activo
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.appContainer}>
      {renderViews()}
      {renderIndicators()}
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#E8F5E9',
    overflow: 'hidden',
  },
  viewContainer: {
    flexDirection: 'row',
    width: width * views.length,
    flex: 1,
  },
  page: {
    width,
    padding: 20,
    backgroundColor: '#E8F5E9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    backgroundColor: '#A5D6A7',
    padding: 10,
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#BDBDBD',
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000',
    marginHorizontal: 5,
  },
});

export default HorizontalPages; 
