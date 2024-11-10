import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Pagar from "../Pages/Pagar";
import Cantidad from "../Pages/Cantidad";
export default function BtnPaymenPage() {
  return (
    <SafeAreaView>
      <View>
        <Cantidad />
      </View>
    </SafeAreaView>
  );
}
