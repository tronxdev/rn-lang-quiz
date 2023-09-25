import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CustomText from "./customText";

interface Questions {
  sentence: string;
  hint: string;
  correct_answer: string;
  answer_hint: string;
  options: string[];
}

interface QuestionPros {
  questions: Questions[];
  questionNumber: number;
  selectedAnswer: string;
}

const Question = ({
  questions,
  questionNumber,
  selectedAnswer,
}: QuestionPros) => {
  let [missingWord, setMissingWord] = React.useState("");

  let sentence = questions[questionNumber]?.sentence; //german lang
  let missingWordIs = questions[questionNumber]?.correct_answer; //german answer
  let replacedSentence = sentence?.replace(missingWordIs, missingWord);
  let hint = questions[questionNumber]?.hint; //translate in eng
  let hintHighlight = questions[questionNumber]?.answer_hint; //eng answer

  const renderHint = (hint: any, answerHint: any) => {
    const hintWords = hint?.split(/(\s+)/);
    const answerHintWords = answerHint?.split(/(\s+)/);

    return hintWords?.map((word: any, index: any) => {
      if (answerHintWords.includes(word)) {
        return (
          <CustomText key={index} style={styles.highlightedWord}>
            {word}
          </CustomText>
        );
      } else {
        return (
          <CustomText key={index} style={styles.hint}>
            {word}
          </CustomText>
        );
      }
    });
  };

  const renderSentence = (sentence: any, selectedWord: any) => {
    const sentenceWords = sentence?.split(/(\s+)/);

    return sentenceWords.map((word: any, index: any) => {
      const isMissingWord = word.trim() === selectedWord;
      return (
        <CustomText key={index} style={styles.questionText}>
          {isMissingWord ? <Text>{word}</Text> : word}
        </CustomText>
      );
    });
  };

  React.useEffect(() => {
    setMissingWord(selectedAnswer);
  }, [selectedAnswer]);

  return (
    <View>
      {questions.length > 0 ? (
        <View style={styles.container}>
          <CustomText style={styles.hint}>
            {renderHint(hint, hintHighlight)}
          </CustomText>
          {selectedAnswer === "____" ? (
            <Text style={styles.questionText}>{replacedSentence}</Text>
          ) : (
            <CustomText>
              {renderSentence(replacedSentence, missingWord)}
            </CustomText>
          )}
        </View>
      ) : (
        <Text style={styles.questionText}>No Questions</Text>
      )}
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  container: {
    minHeight: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  hint: {
    fontSize: 15,
    fontWeight: "500",
    color: "#fff",
    marginBottom: 10,
  },
  highlightedWord: {
    textDecorationLine: "underline",
    fontWeight: "800",
  },

  questionText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#f1f5f9",
    marginBottom: 10,
  },
});
