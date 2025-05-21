import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import { styles } from "./GuessLogItem.style";

const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent&#39;s Guess: {guess}</Text>
    </View>
  );
};

GuessLogItem.propTypes = {
  roundNumber: PropTypes.string,
  guess: PropTypes.string,
};

export default GuessLogItem;
