import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import { styles } from "./InstructionText.style";
import { StyleSheet } from "react-native";

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

InstructionText.propTypes = {
  children: PropTypes.object,
  style: PropTypes.objectOf(StyleSheet).isRequired,
};

export default InstructionText;
