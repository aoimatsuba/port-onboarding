import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { PillButton } from "../../PillButton/PillButton";
import { QuizCard } from "../../QuizCard/QuizCard";
import "./Quiz.scss";

// TODO following data is for development; move this data to JSON
const data = {
  question:
    "以下からコミュニティ内で聞くには相応しくない質問を一つ選んでください。",
  options: [
    "海外に移住する前に、移住先の言語はどれほど勉強しましたか？",
    "一番初めに習得したプログラミング言語とそれを選んだ理由を教えて下さい。",
    "移住したい国出身の彼氏を見つけたほうが、就職に有利ですか？",
    "自身のプロジェクトで解決できないバグがあります。どなたかヒントをくれますか？",
  ],
  correctAnswerIndex: 2,
};

export const Quiz = () => {
  const [showNextButton, setShowNextButton] = useState(false);

  return (
    <div className="quiz-container">
      <QuizCard
        quizData={data}
        onCorrectSubmission={() => setShowNextButton(true)}
      />
      {showNextButton && (
        <PillButton className="primary">
          <ArrowForwardIcon />
        </PillButton>
      )}
    </div>
  );
};
