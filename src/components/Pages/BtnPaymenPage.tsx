
import React, { useState } from "react";
import {
    View,
    SafeAreaView,
} from "react-native";
import BtnPaymentQty from "./BtnPaymenQty";
// import Pagar from "../Pages/Pagar";
// import Cantidad from "../Pages/Cantidad";
export default function BtnPaymenPage() {
    return (
        <SafeAreaView>
            <View>
                <BtnPaymentQty />
                {/* <Text>Pagar</Text> */}
            </View>
        </SafeAreaView>
    );
}