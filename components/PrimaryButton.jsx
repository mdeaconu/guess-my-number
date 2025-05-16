import React from "react";
import { Text, View, Pressable } from "react-native";
import PropTypes from "prop-types";
import { styles } from "./PrimaryButton.style";
import Colors from "../constants/colors";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

PrimaryButton.propTypes = {
  children: PropTypes.object,
  onPress: PropTypes.func,
};

export default PrimaryButton;
