import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import Question from "../components/Question";
import Options from "../components/Options";
import CustomModal from "../components/Modal";
import Loading from "../components/Loading";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

interface Question {
  sentence: string;
  hint: string;
  correct_answer: string;
  answer_hint: string;
  options: string[];
}

const HomeScreen = () => {
  const [isContinue, setIsContinue] = React.useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = React.useState(false);
  const [selectedAnswer, setSelectedAnswer] = React.useState("____"); // Initialize with your default value
  const [questions, setQuestions] = React.useState<Question[]>([]); // Initialize with an empty array
  const [loading, setLoading] = React.useState(true); // Initialize with your loading state
  const [exercise, setExercise] = React.useState(1); // Initialize with your exercise number
  const [questionNumber, setQuestionNumber] = React.useState(0); // Initialize with your question number

  const correct_answer = questions[questionNumber]?.correct_answer || "";

  const checkAnswerHandler = () => {
    if (selectedAnswer === questions[questionNumber].correct_answer) {
      setIsAnswerCorrect(true);
      setIsContinue(!isContinue);
    } else {
      setIsAnswerCorrect(false);
      setIsContinue(!isContinue);
    }
  };

  const setSelectedAnswerHandler = (item: string) => {
    setSelectedAnswer(item);
  };

  const nextQuestion = () => {
    setQuestionNumber(questionNumber + 1);
    setSelectedAnswer("____");
  };

  const nextExercise = () => {
    setExercise(exercise + 1);
    setQuestionNumber(0);
  };

  const nextQuestionHandler = () => {
    setSelectedAnswer("____");
    if (questionNumber < questions?.length - 1) {
      nextQuestion();
    } else if (exercise <= 5) {
      Alert.alert("Want to play next exercise?", " ", [
        {
          text: "No",
          onPress: () => {
            setIsContinue(!isContinue);
          },
        },
        {
          text: "Yes",
          onPress: () => {
            nextExercise();
          },
        },
      ]);
    } else {
      Alert.alert("Thanks for playing");
    }
    setIsContinue(!isContinue);
  };

  const onRequestClose = () => {
    Alert.alert("Modal has been closed.");
    setIsContinue(!isContinue);
  };

  const fetchQuestionsHandler = async () => {
    setLoading(true);
    let exNum: number = exercise;
    const questionsRef = collection(db, `exercise${exNum}`); // Replace with your collection name

    try {
      const querySnapshot = await getDocs(questionsRef);
      let tempQuestions: any[] = [];

      querySnapshot.forEach((doc) => {
        if (doc.exists()) {
          const data = doc.data();
          tempQuestions.push(data);
        }
      });
      setQuestions(tempQuestions);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchQuestionsHandler();
  }, [exercise]);

  if (loading) {
    return <Loading />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View>
          <Question
            questions={questions}
            questionNumber={questionNumber}
            selectedAnswer={selectedAnswer}
          />
          <Options
            questions={questions}
            questionNumber={questionNumber}
            setSelectedAnswer={setSelectedAnswerHandler}
          />
        </View>
        <View>
          {selectedAnswer === "____" ? (
            <TouchableOpacity
              style={[styles.button, styles.btnContinue]}
              onPress={checkAnswerHandler}
              disabled
            >
              <Text style={styles.btnText}>Continue</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.button, styles.btnCheckAnswer]}
              onPress={checkAnswerHandler}
            >
              <Text style={styles.btnText}>Check Answer</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <CustomModal
        isAnswer={isAnswerCorrect}
        correct_answer={correct_answer}
        setState={isContinue}
        state={isContinue}
        nextQuestionHandler={nextQuestionHandler}
        onRequestClose={onRequestClose}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#315f72",
  },
  content: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 4,
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    paddingHorizontal: 100,
    paddingVertical: 20,
    borderRadius: 40,
    marginBottom: 30,
  },
  btnContinue: {
    backgroundColor: "#3B6C81",
  },
  btnCheckAnswer: {
    backgroundColor: "#1CE3E9",
  },
  btnText: {
    color: "#f1f5f9",
    fontWeight: "700",
    letterSpacing: 1,
  },
});
