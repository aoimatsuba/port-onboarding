import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { PillButton } from "../../PillButton/PillButton";
import { QuizCard } from "../../QuizCard/QuizCard";
import "./Quiz.scss";

// TODO following data is for development; move this data to JSON later with proper content
const quizes = [
  {
    question:
      "以下からコミュニティ内で聞くには相応しくない質問を一つ選んでください。",
    options: [
      "海外に移住する前に、移住先の言語はどれほど勉強しましたか？",
      "一番初めに習得したプログラミング言語とそれを選んだ理由を教えて下さい。",
      "移住したい国出身の彼氏を見つけたほうが、就職に有利ですか？",
      "自身のプロジェクトで解決できないバグがあります。どなたかヒントをくれますか？",
    ],
    correctAnswerIndex: 2,
  },
  {
    question: "以下から差別発言と考えられるものを選んでください。",
    options: [
      "「〇〇人はいつも発言が乱暴で仕事しづらい。」",
      "「男性の同僚のほうが女性より論理的に質問に答えてくれる。」",
      "「あなたは〇〇人っぽくない見た目をしているね。」",
      "以上すべてが差別発言。",
    ],
    correctAnswerIndex: 3,
  },
];

export const Quiz = () => {
  const [showNextButton, setShowNextButton] = useState(false);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);

  const handleNextButtonClick = () => {
    if (currentQuizIndex === quizes.length - 1) {
      // Redirect to quiz completion page (scores, proceed to getting approval to join etc)
      return;
    }
    setCurrentQuizIndex(currentQuizIndex + 1);
    setShowNextButton(false);
  };

  return (
    <div className="quiz-container">
      <QuizCard
        quizData={quizes[currentQuizIndex]}
        onCorrectSubmission={() => setShowNextButton(true)}
      />
      {showNextButton && (
        <PillButton className="primary" onClick={handleNextButtonClick}>
          <ArrowForwardIcon />
        </PillButton>
      )}
    </div>
  );
};
