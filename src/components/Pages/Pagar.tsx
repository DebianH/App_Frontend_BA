import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import { getPrefijos } from "../../lib/fetchLocations";
// import { meses } from "../../lib/meses";
// import fechasExpiracion from "../../lib/fechasExpiracion";
import { meses, fechasExpiracion } from "../../lib/dataPago"; // Importa los arreglos
const Pagar = () => {
  const [text, setText] = React.useState("");
  const [value, setValue] = React.useState(null);
  return (
    <SafeAreaProvider style={styles.container}>
      <View
        style={{
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          marginTop: 80,
        }}
      >
        <Text
          style={[
            styles.text,
            { fontSize: 20, color: "orange", fontWeight: "bold" },
          ]}
        >
          Pago con tarjeta
        </Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          selectionColor={"#FF6000"}
        />

        <TextInput
          style={styles.input}
          placeholder="Celular"
          selectionColor={"#FF6000"}
        />
        <TextInput
          style={styles.input}
          placeholder=" Nombre del titular"
          selectionColor={"#FF6000"}
        />

        <TextInput
          style={styles.input}
          selectionColor={"#FF6000"}
          placeholder="NUmero de targeta"
        />
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 80,
          }}
        >
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            data={meses}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="MM"
            value={value}
            onChange={(item) => setValue(item.value)}
          />
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            data={fechasExpiracion}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="YY"
            value={value}
            onChange={(item) => setValue(item.value)}
          />
          <TextInput
            style={[styles.input, { width: 150, marginRight: 10 }]}
            selectionColor={"#FF6000"}
            placeholder="CVC"
          />
        </View>
      </View>
    </SafeAreaProvider>
  );
};
export default Pagar;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
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
    width: 100,
    margin: 16,
    height: 50,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 3,
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
});
