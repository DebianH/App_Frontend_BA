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