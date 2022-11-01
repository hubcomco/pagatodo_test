import React, { useState, useEffect } from "react";
import { ActivityIndicator, Text, ScrollView, View, Image } from "react-native";
import styleApp from "./src/styles/styleApp";
import logo from "./assets/logo.png";
import colors from "./src/styles/colors";
import { getBanksApi } from "./src/api/bank";
import { getLocalBanksApi, setLocalBanksApi } from "./src/api/localStorage";
import BankItem from "./src/components/BankItem";

export default function App() {
  const [banks, setBanks] = useState(null);
  const [textInfo, setTextInfo] = useState("");

  useEffect(() => {
    getLocalBanks();
  }, []);

  const getLocalBanks = async () => {
    const result = await getLocalBanksApi();
    if (result == null) {
      getBanks();
    } else {
      setTextInfo("Cargando info desde almacenamiento local");
      setTimeout(() => setBanks(result), 3000);
    }
    return result;
  };

  const getBanks = async () => {
    setTextInfo("Cargando info desde la API");
    const result = await getBanksApi();
    setLocalBanksApi(result);
    setTextInfo("Copiando info en Almacenamiento local");
    setTimeout(() => setBanks(result), 3000);
  };

  return (
    <ScrollView>
      <View style={styleApp.container}>
        <Image source={logo} style={styleApp.logo} />
        <Text style={styleApp.title}>PRUEBA REACT NATIVE </Text>
        <Text style={styleApp.subTitle}>
          React Native Engineer Practical Test
        </Text>
        {banks == null ? (
          <View style={styleApp.viewLoadInfo}>
            <ActivityIndicator size="large" color={colors.primary} />
            <Text style={styleApp.textLoadInfo}>{textInfo}</Text>
          </View>
        ) : (
          banks.map((bank, index) => <BankItem key={index} bank={bank} />)
        )}
      </View>
    </ScrollView>
  );
}
