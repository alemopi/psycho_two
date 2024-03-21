import { useContext } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div className="quiz">
      {quizState.showResults && (
        <div className="results">
          <div className="congratulations">Окончание тестирования</div>
          <div className="results-info">
            <div>Вы закончили тест.</div>
            <div>
              У вас  {quizState.correctAnswersCount}  правильных ответов из{" "}
              {quizState.questions.length}
            </div>
          </div>
          <div
            className="next-button"
            onClick={() => dispatch({ type: "RESTART" })}
          >
            Начать снова
          </div>
        </div>
      )}
      {!quizState.showResults && (
        <div>
          <div className="score">
            Вопрос {quizState.currentQuestionIndex + 1} из {quizState.questions.length}
          </div>
          <Question />
          <div
            className="next-button"
            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
          >
            Next question
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
