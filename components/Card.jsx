import React from "react";
import { View } from "react-native";
import { styles } from "./Card.style";
import PropTypes from "prop-types";

const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

Card.propTypes = {
  children: PropTypes.object,
};

export default Card;
