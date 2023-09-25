import React from "react";
import { View, StyleSheet } from "react-native";
import Option from "./Option";

interface Questions {
  sentence: string;
  hint: string;
  correct_answer: string;
  answer_hint: string;
  options: string[];
}

interface OptionProps {
  questions: Questions[];
  questionNumber: number;
  setSelectedAnswer: (newSelectedAnswer: string) => void;
}

const Options = ({
  questions,
  questionNumber,
  setSelectedAnswer,
}: OptionProps) => {
  let options = questions[questionNumber]?.options;

  // Split the items array into two rows
  const halfLength = Math.ceil(options?.length / 2);
  const firstRow = options?.slice(0, halfLength);
  const secondRow = options?.slice(halfLength);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {firstRow?.map((item: any) => (
          <Option
            key={item}
            item={item}
            setSelectedAnswer={setSelectedAnswer}
          />
        ))}
      </View>
      <View style={styles.row}>
        {secondRow?.map((item: any) => (
          <Option
            key={item}
            item={item}
            setSelectedAnswer={setSelectedAnswer}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
  },
});

export default Options;
