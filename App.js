import React from "react";
import StartGameScreen from "./screens/StartGameScreen";
import { View } from "react-native";
import { styles } from "./App.styles";

const App = () => {
  return (
    <View style={styles.rootScreen}>
      <StartGameScreen />
    </View>
  );
};

export default App;
