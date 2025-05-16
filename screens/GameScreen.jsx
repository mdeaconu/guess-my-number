import React from "react";
import { Text, View } from "react-native";
import { styles } from "./GameScreen.style";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Opponent&#39;s Guess</Text>
      <View>
        <Text>Highe or lower?</Text>
      </View>
      <View>
        <Text>LOG ROUNDS</Text>
      </View>
    </View>
  );
};

export default GameScreen;
