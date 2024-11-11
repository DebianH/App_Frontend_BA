import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const Detalles = () => {
  const data = [
    { label: "Ecuador", value: "1" },
    { label: "Alemania", value: "2" },
    { label: "Turkia", value: "3" },
    { label: "CHile", value: "4" },
  ];

  //   useEffect(() => {
  //     getLocations().then((pais) => setPais(pais));
  //   }, []);
  const [text, setText] = React.useState("");
  const [value, setValue] = useState(null);
  const [pais, setPais] = useState<Location[]>();
  const { navigate } = useNavigation();
  const handlePagar = () => {
    navigate("Pagar");
  };
  const handleCantidad = () => {
    navigate("Cantidad");
  };
  return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView>
        <View
          style={{
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.text}>
            Nombres
            <Text style={{ color: "#FF6000" }}> * </Text>
          </Text>
          <TextInput style={styles.input} placeholder="Nombre y Apellidos" />

          <Text style={styles.text}>
            Cédula<Text style={{ color: "#FF6000" }}> * </Text>
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Cédula de Identidad"
          ></TextInput>

          <Text style={styles.text}>
            Correo electrónico
            <Text style={{ color: "#FF6000" }}> * </Text>
          </Text>
          <TextInput style={styles.input}></TextInput>

          <Text style={styles.text}>
            Dirección
            <Text style={{ color: "#FF6000" }}> * </Text>
          </Text>
          <TextInput style={styles.input} selectionColor={"#FF6000"} />
          <Text style={styles.text}>Teléfono {"(opcional)"}</Text>
          <TextInput style={styles.input} selectionColor={"#FF6000"} />

          {/* 
TODO: dynamic dropdown selection list
      automcomplete mediante users
*/}
          <Text style={styles.text}>
            País
            <Text style={{ color: "#FF6000" }}> * </Text>
          </Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select a country"
            searchPlaceholder="Search..."
            value={value}
            onChange={(item) => {
              setValue(item.value);
            }}
          />

          <Text
            style={{
              fontSize: 25,
              alignSelf: "flex-start",
              fontWeight: "bold",
              color: "#1F1F1F",
            }}
          >
            Información adicional
          </Text>
          <Text style={styles.text}>Notas del pedido {"(opcional)"}</Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            style={styles.input}
            value={text}
            placeholder="Notas sobre tu pedido, por ejemplo, notas especiales para la entrega"
            scrollEnabled={true}
            onChangeText={() => {
              setText(<Text />);
            }}
            textAlignVertical="top"
          />
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#fff",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Pressable
              style={[
                styles.button,
                {
                  width: 100,
                  padding: 2,
                  marginTop: 50,
                  marginLeft: 300,
                  borderRadius: 10,
                },
              ]}
              onPress={handleCantidad}
            >
              <Text style={{ textAlign: "center", marginTop: 5 }}>Atras</Text>
            </Pressable>
            <Pressable
              style={[
                styles.button,
                {
                  width: 100,
                  padding: 2,
                  marginTop: 50,
                  marginLeft: 200,
                  borderRadius: 10,
                  marginRight: 100,
                  borderColor: "##ff7514",
                },
              ]}
              onPress={handlePagar}
            >
              <Text>Pagar Corriente </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};
export default Detalles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 15,
    marginTop: 10,
    marginLeft: 5,
    alignSelf: "flex-start",
    color: "#000", // Color del texto
    textAlign: "center", // Alinea el texto al centro
  },
  input: {
    borderWidth: 1,
    padding: 10,
    width: 350,
    borderRadius: 5,
  },
  dropdown: {
    margin: 16,
    height: 50,
    width: 350,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },

  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  button: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 0,
    width: 300,
    height: 50,
  },
});
