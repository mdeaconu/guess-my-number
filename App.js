import React from "react";
import StartGameScreen from "./screens/StartGameScreen";
import { styles } from "./App.styles";
import { LinearGradient } from "expo-linear-gradient";

const App = () => {
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <StartGameScreen />
    </LinearGradient>
  );
};

export default App;
