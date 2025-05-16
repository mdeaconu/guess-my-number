import React, { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./GameScreen.style";
import Title from "../components/Title";
import PropTypes from "prop-types";
import NumberContainer from "../components/NumberContainer";

function generateRandomBetween(min, max, exclude) {
  const random = Math.floor(Math.random() * (max - min)) + min;
  return random === exclude ? generateRandomBetween(min, max, exclude) : random;
}

const GameScreen = ({ userNumber }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userNumber),
  );

  return (
    <View style={styles.screen}>
      <Title>Opponent&#39;s Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
      </View>
    </View>
  );
};

GameScreen.propTypes = {
  userNumber: PropTypes.string,
};

export default GameScreen;
