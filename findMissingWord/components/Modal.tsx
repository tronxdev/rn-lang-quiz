import React from "react";
import { View, Text, StyleSheet, Pressable, Modal } from "react-native";

function CustomModal({
  state,
  correct_answer,
  isAnswer,
  nextQuestionHandler,
  onRequestClose,
}: any) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={state}
      onRequestClose={onRequestClose}
    >
      <View style={styles.centeredView}>
        <View
          style={
            isAnswer
              ? [styles.modalView, styles.successView]
              : [styles.modalView, styles.errorView]
          }
        >
          <View>
            {isAnswer ? (
              <Text style={styles.modalText}>Great Job!</Text>
            ) : (
              <Text style={styles.modalText}>Answer: {correct_answer}</Text>
            )}
          </View>
          <Pressable style={styles.button} onPress={nextQuestionHandler}>
            <Text
              style={
                isAnswer
                  ? [styles.textStyle, styles.textSuccessStyle]
                  : [styles.textStyle, styles.textWrongStyle]
              }
            >
              Continue
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

export default CustomModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 0,
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    padding: 35,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  successView: {
    backgroundColor: "#23ced1",
  },
  errorView: {
    backgroundColor: "#FE7D88",
  },

  button: {
    paddingHorizontal: 100,
    paddingVertical: 20,
    borderRadius: 40,
    marginBottom: 30,
    backgroundColor: "#fff",
  },

  textStyle: {
    fontWeight: "bold",
    textAlign: "center",
  },
  textSuccessStyle: {
    color: "#23ced1",
  },
  textWrongStyle: {
    color: "#FE7D88",
  },

  modalText: {
    marginBottom: 15,
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
  },
});
