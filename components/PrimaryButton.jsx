import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";

const PrimaryButton = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

PrimaryButton.propTypes = {
  children: PropTypes.object,
};

export default PrimaryButton;
