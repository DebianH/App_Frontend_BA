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
  const ItemSeparator = () => <View style={styles.separator} />;
  return (
    <SafeAreaProvider style={styles.vista}>
      <View>
        <Text
          style={[
            styles.text,
            { fontSize: 40, color: "orange", fontWeight: "bold" },
          ]}
        >
          Donar
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "black",
            fontWeight: "regular",
            textAlign: "left",
            marginLeft: 5,
            marginTop: 90,
          }}
        >
          Escoge el monto de tu donación
        </Text>
      </View>
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
                    gap: 10,
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
          ItemSeparatorComponent={ItemSeparator}
          ListFooterComponent={
            <View style={styles.footer}>
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
            </View>
          }
        />

        {/* TODO El teclado debe ser solo numerico y tiene que tener opciones*/}
      </View>
      <View style={{ marginTop: 30 }}>
        <Pressable
          style={[
            styles.button,
            {
              width: 100,
              padding: 2,
              marginLeft: 230,
              borderRadius: 10,
            },
          ]}
          onPress={handleDetalles}
        >
          <Text style={{ textAlign: "center", marginTop: 5 }}>
            Siguiente {">>"}
          </Text>
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
    flexDirection: "column",
    marginTop: 20,
    marginLeft: 30,
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    color: "#000",
    textAlign: "center",
    marginVertical: 10,
  },
  button: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
    width: 300,
    height: 50,
  },

  separator: {
    height: 10,
  },
  footer: {
    marginTop: 20,
  },
});
