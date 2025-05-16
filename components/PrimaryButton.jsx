import React from "react";
import { Text, View, Pressable } from "react-native";
import PropTypes from "prop-types";
import { styles } from "./PrimaryButton.style";

const PrimaryButton = ({ children }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={() => console.log("pressed")}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

PrimaryButton.propTypes = {
  children: PropTypes.object,
};

export default PrimaryButton;
