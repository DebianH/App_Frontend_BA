import React from 'react';
import { useEffect, useState } from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function BtnPaymenDetails() {
    const data = [
        { label: "Ecuador", value: "1" },
        { label: "Colombia", value: "2" },
    ];

    const [text, setText] = useState("");
    const [value, setValue] = useState(null);
    const [pais, setPais] = useState<Location[]>();
    const { navigate } = useNavigation();
    const handlePagar = () => {
        navigate("BtnPaymenPay");
    };
    const handleCantidad = () => {
        navigate("BtnPaymenQty");
    };
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 18, color: "orange", textAlign: "center", fontWeight: "bold" }}>LLena tus datos</Text>
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
                    <TextInput style={styles.input} placeholder="Cédula de Identidad">
                    </TextInput>
                    <Text style={styles.text}>
                        Correo electrónico
                        <Text style={{ color: "#FF6000" }}> * </Text>
                    </Text>
                    <TextInput style={styles.input} placeholder="micorreo@gmail.com"></TextInput>
                    <Text style={styles.text}>Dirección<Text style={{ color: "#FF6000" }}> * </Text>
                    </Text>
                    <TextInput style={styles.input} selectionColor={"#FF6000"} />
                    <Text style={styles.text}>Teléfono {"(opcional)"}</Text>
                    <TextInput style={styles.input} selectionColor={"#FF6000"} />


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
                        placeholder="Seleccione el pais"
                        searchPlaceholder="Search..."
                        value={value}
                        onChange={(item) => {
                            setValue(item.value);
                        }}
                    />

                    <Text
                        style={{
                            fontSize: 18,
                            textAlign: "center",
                            fontWeight: "bold",
                            color: "#1F1F1F",
                        }}
                    >
                        Información adicional
                    </Text>
                    <Text style={styles.text}>Nota {"(opcional)"}</Text>
                    <TextInput
                        multiline={true}
                        numberOfLines={8}
                        style={styles.input}
                        value={text}
                        placeholder="Notas sobre tu pedido, por ejemplo, notas especiales para la entrega"
                        scrollEnabled={true}
                        onChangeText={() => {
                            setText(<Text />);
                        }}
                        textAlignVertical="top"
                    />

                </View>
                <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#fff", alignItems: "center", justifyContent: "space-around", width: "100%", marginTop: 20 }}>
                    <Pressable
                        style={[
                            styles.button,
                            {
                                width: 120,
                                padding: 2,
                                // position: "absolute",
                                // bottom: 30,
                                // right: 30,
                                borderRadius: 10,
                            },
                        ]} onPress={handleCantidad}>
                        <Text style={{ fontSize: 16, textAlign: "center", marginVertical: "auto" }}>Atras</Text>
                    </Pressable>
                    <Pressable
                        style={[
                            styles.button,
                            {
                                width: 120,
                                padding: 2,
                                // position: "absolute",
                                // bottom: 30,
                                // right: 30,
                                borderRadius: 10,
                                borderColor: "#ff7514",
                            },
                        ]}
                        onPress={handlePagar}>
                        <Text style={{ fontSize: 16, textAlign: "center", marginVertical: "auto" }}>Pagar</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        width: "100%",
        height: "100%",
    },
    text: {
        fontSize: 15,
        marginTop: 10,
        marginLeft: 20,
        alignSelf: "flex-start",
        color: "#000",
    },
    input: {
        borderColor: "#5e9e1c",
        borderWidth: 1,
        padding: 12,
        width: "90%",
        marginHorizontal: "auto",
        borderRadius: 15,
        marginVertical: 2,
    },
    dropdown: {
        marginVertical: 20,
        height: 45,
        width: "90%",
        borderRadius: 15,
        borderColor: "#5e9e1c",
        borderWidth: 1,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
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
        borderColor: "#5e9e1c",
        borderWidth: 1,
        borderRadius: 25,
        width: 300,
        height: 50,
        color: "#fff",
    },
});