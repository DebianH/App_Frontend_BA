import React, { useState } from 'react'; 
import { View, Text, TextInput, Button, StyleSheet, FlatList, Dimensions, Animated } from 'react-native';

const { width } = Dimensions.get('window');

// Configurar las vistas de forma dinámica para escalabilidad
const views = [
  {
    title: 'Preregistro',
    fields: ['Nombre de la Organización', 'RUC', 'Teléfono', 'Email', 'Dirección'],
  },
  {
    title: 'Preregistro: Información Adicional',
    fields: [
      'Propósito de la Organización',
      'Motivo de la Organización',
      'Número de beneficiarios a cargo',
      'Número de preregistros',
      'Dirección',
    ],
  },
  {
    title: 'Preregistro: Sobre el representante',
    fields: [
      'Nombre del representante',
      'Número de documento',
      'Cargo en la Organización',
      'Email del representante',
      'Teléfono del representante',
    ],
  },
];

const numberFields = [
  'RUC',
  'Teléfono',
  'Número de beneficiarios a cargo',
  'Número de preregistros',
  'Número de documento',
  'Teléfono del representante',
];

const HorizontalPages = () => {
  const [viewIndex, setViewIndex] = useState(0);
  const [inputValues, setInputValues] = useState({});
  const [validationError, setValidationError] = useState(false);
  const [touchedFields, setTouchedFields] = useState({});
  const [rucError, setRucError] = useState(false);
  const [identificationError, setIdentificationError] = useState(false);
  const scrollX = new Animated.Value(0);

  const handleInputChange = (viewIndex, field, value) => {
    if (numberFields.includes(field)) {
      const numericValue = value.replace(/[^0-9]/g, '');
      
      if (field === 'RUC') {
        setRucError(numericValue.length > 0 && numericValue.length !== 13);
      }

      if (field === 'Número de documento') {
        setIdentificationError(numericValue.length > 0 && numericValue.length !== 10);
      }

      setInputValues((prev) => ({
        ...prev,
        [viewIndex]: {
          ...prev[viewIndex],
          [field]: numericValue,
        },
      }));
    } else {
      setInputValues((prev) => ({
        ...prev,
        [viewIndex]: {
          ...prev[viewIndex],
          [field]: value,
        },
      }));
    }
  };

  const validateFields = (fields, viewIndex) => {
    const currentValues = inputValues[viewIndex] || {};
    return fields.every((field) => currentValues[field] && currentValues[field].trim() !== '');
  };

  const validateAllPrevious = (currentIndex) => {
    for (let i = 0; i <= currentIndex; i++) {
      const isValid = validateFields(views[i].fields, i);
      if (!isValid) return false;
    }
    return true;
  };

  const handleNext = (index, fields) => {
    const isValid = validateAllPrevious(index);

    if (isValid && !rucError && !identificationError) {
      setValidationError(false);
      if (index < views.length - 1) {
        setViewIndex(index + 1);
        flatListRef.scrollToIndex({ index: index + 1 });
      } else {
        alert('Formulario enviado');
      }
    } else {
      setValidationError(true);
      setTouchedFields((prev) => ({
        ...prev,
        [index]: fields,
      }));
    }
  };

  const renderFields = ({ item, index: fieldIndex, parentIndex }) => {
    const touched = touchedFields[parentIndex] || [];

    return (
      <View key={fieldIndex}>
        <TextInput
          style={[
            styles.input,
            validationError && touched.includes(item) && !inputValues[parentIndex]?.[item]?.trim() && styles.inputError,
          ]}
          placeholder={item}
          value={inputValues[parentIndex]?.[item] || ''}
          onChangeText={(text) => handleInputChange(parentIndex, item, text)}
          keyboardType={numberFields.includes(item) ? 'numeric' : 'default'}
        />
        {item === 'RUC' && rucError && (
          <Text style={styles.errorText}>RUC no válida</Text>
        )}
        {item === 'Número de documento' && identificationError && (
          <Text style={styles.errorText}>Identificación no válida</Text>
        )}
      </View>
    );
  };

  const renderViews = ({ item, index }) => (
    <View style={styles.page}>
      <Text style={styles.header}>{item.title}</Text>
      <FlatList
        data={item.fields}
        keyExtractor={(field) => field}
        renderItem={({ item, index: fieldIndex }) => renderFields({ item, index: fieldIndex, parentIndex: index })}
      />
      {validationError && (
        <Text style={styles.errorText}>Por favor, complete todos los campos antes de continuar.</Text>
      )}
      <Button
        title={index === views.length - 1 ? 'Finalizar y enviar' : 'Siguiente'}
        onPress={() => handleNext(index, item.fields)}
      />
      {index > 0 && (
        <Button
          title="Atrás"
          onPress={() => {
            setValidationError(false);
            setViewIndex(index - 1);
            flatListRef.scrollToIndex({ index: index - 1 });
          }}
        />
      )}
    </View>
  );

  let flatListRef;

  return (
    <View style={styles.appContainer}>
      <FlatList
        ref={(ref) => (flatListRef = ref)}
        data={views}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderViews}
        keyExtractor={(_, index) => index.toString()}
        style={styles.viewContainer}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setViewIndex(index);
        }}
        scrollEnabled={validateAllPrevious(viewIndex)}
      />
      <View style={styles.indicatorContainer}>
        {views.map((_, index) => {
          const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [1, 1.2, 1],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index}
              style={[
                styles.indicator,
                { opacity: index === viewIndex ? 1 : 0.3, transform: [{ scale }] },
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#E8F5E9',
  },
  viewContainer: {
    flexGrow: 0,
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
    marginBottom: 5,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 5,
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