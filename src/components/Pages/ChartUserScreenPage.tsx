import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Importa Picker de la nueva librería
import { LineChart } from 'react-native-chart-kit'; // Usamos LineChart
import Icon from 'react-native-vector-icons/Ionicons';

interface Donacion {
  mes: string;
  monto: number;
}

interface EstadisticasData {
  donaciones: Donacion[];
  platosComida: number;
  familiasAyudadas: number;
  ninosSinDesnutricion: number;
  racionesEntregadas: number;
  comidaRescatada: number;
  reduccionesCO2: number;
}

const ChartUserScreenPage = () => {
  const [data, setData] = useState<EstadisticasData | null>(null);
  const [selectedYear, setSelectedYear] = useState('2024'); // Estado para almacenar el año seleccionado

  useEffect(() => {
    // Datos ficticios basados en el año seleccionado
    const fakeData: EstadisticasData = {
      donaciones: [
        { mes: 'Enero', monto: 1500 },
        { mes: 'Febrero', monto: 1200 },
        { mes: 'Marzo', monto: 1600 },
        { mes: 'Abril', monto: 1800 },
        { mes: 'Mayo', monto: 1400 },
        { mes: 'Junio', monto: 2000 },
        { mes: 'Julio', monto: 1700 },
        { mes: 'Agosto', monto: 1500 },
        { mes: 'Septiembre', monto: 1100 },
        { mes: 'Octubre', monto: 1800 },
        { mes: 'Noviembre', monto: 1900 },
        { mes: 'Diciembre', monto: 2100 }
      ],
      platosComida: 3500,
      familiasAyudadas: 1200,
      ninosSinDesnutricion: 800,
      racionesEntregadas: 100,
      comidaRescatada:1000,
      reduccionesCO2: 500,
    };

    setData(fakeData);
  }, [selectedYear]);

  if (!data) {
    return <Text>Cargando...</Text>;
  }

  const months = ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
  const donations = data.donaciones.map(item => item.monto);

  const equivalencias = [
    { label: 'Platos de comida', value: data.platosComida, icon: 'restaurant' },
    { label: 'Familias ayudadas', value: data.familiasAyudadas, icon: 'people' },
    { label: 'ONGs Ayudadas', value: data.ninosSinDesnutricion, icon: 'happy' },
    { label: 'Raciones Entregadas', value: data.racionesEntregadas, icon: 'cart' },
    { label: 'Comida Rescatada', value: data.comidaRescatada, icon: 'cube' },
    { label: 'Reducciones de CO2', value: data.reduccionesCO2, icon: 'happy' },
  ];

  const formatYAxisLabel = (yValue: string) => {
    const value = parseFloat(yValue); 
    return value >= 1000 ? `${(value / 1000).toFixed(1)}k` : yValue; 
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Estadísticas</Text>

        <View style={styles.pickerContainer}>
          <Text style={styles.pickerLabel}>Año:</Text>
          <Picker
            selectedValue={selectedYear}
            onValueChange={(itemValue) => setSelectedYear(itemValue)} 
            style={styles.picker}
          >
            <Picker.Item label="2023" value="2023" />
            <Picker.Item label="2024" value="2024" />
            <Picker.Item label="2025" value="2025" />
          </Picker>
        </View>

        <View style={styles.separator} />

        <Text style={styles.chartTitle}>Kilos donados por mes</Text>

        <LineChart
          data={{
            labels: months,
            datasets: [
              {
                data: donations,
                color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`, 
                strokeWidth: 3, 
              },
            ],
          }}
          width={Dimensions.get('window').width - 30} 
          height={250}
          chartConfig={{
            backgroundColor: '#ffffff', 
            backgroundGradientFrom: '#ffffff', 
            decimalPlaces: 1,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, 
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, 
            style: {
              borderRadius: 16,
              borderWidth: 1,
              borderColor: '#ccc',
            },
            propsForLabels: {
              fontSize: 12,
            },
          }}
          fromZero={true}
          yAxisLabel=""  
          verticalLabelRotation={30} 
          formatYLabel={formatYAxisLabel} 
        />

        <View style={styles.separator} />

        <Text style={styles.subTitle}>Tu donación ayudo a:</Text>

        <View style={styles.equivalenciasContainer}>
          {equivalencias.map((item, index) => (
            <View key={index} style={styles.equivalenciaItem}>
              <View style={styles.iconContainer}>
                <Icon name={item.icon} size={30} color="#95BF23" /> 
              </View>
              <Text style={styles.label}>{item.label}</Text>
              <Text style={styles.equivalenciaValue}>{item.value} kg</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: '#00519dd1', 
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    borderRadius: 20,
  },
  pickerLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
    color: '#333',
  },
  picker: {
    height: 40,
    width: 120, 
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingHorizontal: 0,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#9f9f9f',
    marginVertical: 10,
  },
  chartTitle: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: '#4287f5',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000000',
    marginTop: 10,
  },
  equivalenciasContainer: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  equivalenciaItem: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4287f5',
    textAlign: 'center',
  },
  equivalenciaValue: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
});

export default ChartUserScreenPage;
