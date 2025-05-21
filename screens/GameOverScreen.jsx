import React from "react";
import { Image, Text, View } from "react-native";
import PropTypes from "prop-types";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton.jsx";
import { styles } from "./GameOverScreen.style.js";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

GameOverScreen.propTypes = {
  roundsNumber: PropTypes.string,
  userNumber: PropTypes.string,
  onStartNewGame: PropTypes.func,
};

export default GameOverScreen;
