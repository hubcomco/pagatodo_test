import { Image, View, Text } from "react-native";
import styleApp from "../styles/styleApp";
import React from "react";

export default function BankItem(props) {
  const { bank } = props;
  return (
    <View style={styleApp.viewBankItem}>
      <View style={styleApp.containerImage}>
        <Image
          source={{
            uri: bank.url,
          }}
          style={styleApp.image}
        />
      </View>
      <View style={styleApp.containerInfo}>
        <Text style={styleApp.titleBank}>{bank.bankName}</Text>
        <Text style={styleApp.descriptionBank}>{bank.description}</Text>
        <Text style={styleApp.descriptionBank}>
          Antiguedad: {bank.age} años
        </Text>
      </View>
    </View>
  );
}
