import React from "react";
import { Text } from "react-native";
import { styles } from "./Title.style";
import PropTypes from "prop-types";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

Title.propTypes = {
  children: PropTypes.object,
};

export default Title;
