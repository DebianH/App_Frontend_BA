import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, TextInput, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function BtnPaymentQty() {
    const [isPressed, setIsPressed] = React.useState(false);
    const [selectedAmount, setSelectedAmount] = useState(null);
    const DATA = [
        { dinero: "$ 5" },
        { dinero: "$ 10" },
        { dinero: "$ 20" },
        { dinero: "$ 50" },
        { dinero: "$ 100" },
    ];
    const { navigate } = useNavigation();
    const handleDetalles = () => {
        navigate("BtnPaymenDetails");
    };
    const ItemSeparator = () => <View style={styles.separator} />;
    return (
        <View style={styles.vista}>
            <View style={{ alignItems: "center", marginTop: 100 }}>
                <Text style={{ fontSize: 30, color: "orange", fontWeight: "bold", textAlign: "center", }}>Tu donación importa!</Text>
                <Image source={require('../../assets/BAQ-Logo.png')} style={{ width: 150, height: 150, }} resizeMode="contain" />
            </View>
            <View style={styles.monto}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => {
                        return (
                            <Pressable
                                style={[
                                    {
                                        backgroundColor: selectedAmount === item.dinero ? "#5e9e1c" : "#fff",
                                    },
                                    styles.button,
                                ]}
                                onPress={() => setSelectedAmount(item.dinero)}
                            >
                                {!isPressed}
                                <Text style={{ color: selectedAmount === item.dinero ? "#fff" : "#000", fontSize: 18, textAlign: "center", marginVertical: "auto" }}>{item.dinero}</Text>
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
                                            selectedAmount === "Otros" ? "#FFA500" : "#fff",
                                    },
                                ]}
                                onPress={() => setSelectedAmount("Otros")}>
                                <Text style={{ color: selectedAmount === "Otros" ? "#fff" : "#000", fontSize: 18, textAlign: "center", marginVertical: "auto" }}>Otros</Text>
                            </Pressable>
                        </View>
                    }
                />

                {/* TODO El teclado debe ser solo numerico y tiene que tener opciones*/}
            </View>
            <View style={{ position: "absolute", bottom: 0, right: 0, }}>
                <Pressable
                    style={[
                        styles.button,
                        {
                            width: 120,
                            padding: 2,
                            position: "absolute",
                            bottom: 30,
                            right: 30,
                            borderRadius: 10,
                        },
                    ]}
                    onPress={handleDetalles}>
                    <Text style={{ fontSize: 16, textAlign: "center", marginVertical: "auto" }}>
                        Siguiente {">>"}
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    vista: {
        backgroundColor: "#FFF",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 50,
    },
    monto: {
        flexDirection: "column",
        marginHorizontal: "auto",
        justifyContent: "center",
        alignContent: "center",
    },
    text: {
        color: "#fff",
        textAlign: "center",
    },
    button: {
        borderColor: "#5e9e1c",
        borderWidth: 1,
        borderRadius: 25,
        width: 300,
        height: 50,
        color: "#fff",
    },
    separator: {
        height: 15,
    },
    footer: {
        marginTop: 20,
    },
});