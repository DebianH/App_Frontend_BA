import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
const Cantidad = () => {
  const [isPressed, setIsPressed] = React.useState(false);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const DATA = [
    { dinero: "5$" },
    { dinero: "10$" },
    { dinero: "20$" },
    { dinero: "$50" },
    { dinero: "$100" },
  ];
  const { navigate } = useNavigation();
  const handleDetalles = () => {
    navigate("Detalles");
  };

  return (
    <SafeAreaProvider style={styles.vista}>
      <Text
        style={[
          styles.text,
          { fontSize: 40, color: "orange", fontWeight: "bold" },
        ]}
      >
        Donar
      </Text>
      <View style={styles.monto}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => {
            return (
              <Pressable
                style={[
                  {
                    backgroundColor:
                      selectedAmount === item.dinero ? "#FFA500" : "#E0E0E0",
                  },
                  styles.button,
                ]}
                onPress={() => setSelectedAmount(item.dinero)}
              >
                {!isPressed}
                <Text style={styles.text}>{item.dinero}</Text>
              </Pressable>
            );
          }}
          ListFooterComponent={
            <Pressable
              style={[
                styles.button,
                {
                  backgroundColor:
                    selectedAmount === "Otros" ? "#FFA500" : "#E0E0E0",
                },
              ]}
              onPress={() => setSelectedAmount("Otros")}
            >
              <Text style={styles.text}>Otros</Text>
            </Pressable>
          }
        />

        {/* TODO El teclado debe ser solo numerico y tiene que tener opciones*/}
      </View>
      <View>
        <Pressable
          style={[
            styles.button,
            { width: 100, padding: 2, marginTop: 50, marginLeft: 200 },
          ]}
          onPress={handleDetalles}
        >
          <Text>Siguiente {">>"}</Text>
        </Pressable>
      </View>
    </SafeAreaProvider>
  );
};
export default Cantidad;
const styles = StyleSheet.create({
  vista: {
    backgroundColor: "#FFF",
  },
  monto: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 200,
    marginTop: 100,
    marginLeft: 30,
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    fontSize: 14,
    color: "#000",
    textAlign: "center",
    marginVertical: 10,
  },
  button: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 0,
    width: 300,
    height: 50,
  },
});
