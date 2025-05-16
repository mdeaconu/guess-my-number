import PropTypes from "prop-types";
import React from "react";
import { View, Text } from "react-native";
import { styles } from "./NumberContainer.style";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

NumberContainer.propTypes = {
  children: PropTypes.object,
};

export default NumberContainer;
