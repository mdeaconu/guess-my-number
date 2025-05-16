import React, { useState } from "react";
import StartGameScreen from "./screens/StartGameScreen";
import { styles } from "./App.styles";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, SafeAreaView } from "react-native";
import backgroundImage from "./assets/images/background.png";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";

const App = () => {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  const screen = userNumber ? (
    <GameScreen userNumber={userNumber} />
  ) : (
    <StartGameScreen onPickNumber={pickedNumberHandler} />
  );

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

export default App;
