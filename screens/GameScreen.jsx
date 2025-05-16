import React from "react";
import { Text, View } from "react-native";
import { styles } from "./GameScreen.style";
import Title from "../components/Title";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>Opponent&#39;s Guess</Title>
      <View>
        <Text>Higher or lower?</Text>
      </View>
    </View>
  );
};

export default GameScreen;
