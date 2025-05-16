import React from "react";
import StartGameScreen from "./screens/StartGameScreen";
import { styles } from "./App.styles";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground } from "react-native";
import backgroundImage from "./assets/images/background.png";

const App = () => {
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
};

export default App;
