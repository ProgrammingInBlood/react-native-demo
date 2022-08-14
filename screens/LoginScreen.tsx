import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { useAppDispatch } from "../store/hooks";
import { setAuth } from "../store/slices/authSlice";
import { RootTabScreenProps } from "../types";

export default function LoginScreen({
  navigation,
}: RootTabScreenProps<"Login">) {
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button
        onPress={() => navigation.navigate("Register")}
        title="RegisterNow"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={async () => dispatch(setAuth(true))}
        title="Login Dummy User"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <EditScreenInfo path="/screens/LoginScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
