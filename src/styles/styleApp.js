import { StyleSheet } from "react-native";
import colors from "./colors";

const styleApp = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    marginBottom: 20,
    marginTop: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
  },
  subTitle: {
    fontSize: 15,
    fontStyle: "italic",
    fontWeight: "600",
    color: colors.dark,
  },
  viewLoadInfo: {
    marginTop: 50,
  },
  textLoadInfo: {
    fontSize: 10,
    fontStyle: "italic",
    fontWeight: "900",
    color: colors.dark,
  },
  viewBankItem: {
    flexDirection: "row",
    marginTop: 15,
    width: "80%",
  },
  containerImage: {
    width: "40%",
    height: 80,
  },
  image: {
    height: "100%",
    resizeMode: "contain",
    borderRadius: 20,
  },
  containerInfo: {
    width: "60%",
    paddingHorizontal: 10,
  },
  titleBank: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.dark,
  },
  descriptionBank: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.dark,
  },
});

export default styleApp;
