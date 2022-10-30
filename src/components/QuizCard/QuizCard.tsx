import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { PillButton } from "../PillButton/PillButton";

type QuizCardProps = {
  quizData: {
    question: string;
    options: string[];
    correctAnswerIndex: number;
    learningText?: string;
  };
  onCorrectSubmission: () => void;
};

export function QuizCard({
  quizData: { question, options, correctAnswerIndex },
  onCorrectSubmission,
}: QuizCardProps) {
  const [validationError, setValidationError] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [validationText, setValidationText] = useState("");

  useEffect(() => {
    setValidationError(false);
    setSelectedAnswer("");
    setValidationText("");
  }, [question, options, correctAnswerIndex]);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedIndex = event.target.value;
    setSelectedAnswer(selectedIndex);
    setValidationError(false);
    setValidationText("");
  };

  const handleAnswerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedAnswer === correctAnswerIndex.toString()) {
      setValidationError(false);
      setValidationText("🎉大正解🎉");
      onCorrectSubmission();
    } else if (selectedAnswer === "") {
      setValidationError(true);
      setValidationText("答えを選択してください。");
    } else {
      setValidationError(true);
      setValidationText("不正解😞");
    }
  };

  return (
    <Card
      className="quiz-card"
      sx={{
        padding: 3,
        margin: 3,
        borderRadius: "30px",
        boxShadow: 5,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent>
        <form onSubmit={handleAnswerSubmit}>
          <FormControl
            sx={{ margin: 3 }}
            error={validationError}
            variant="standard"
          >
            <FormLabel>{question}</FormLabel>
            <RadioGroup
              name="quiz"
              value={selectedAnswer}
              onChange={handleRadioChange}
              sx={{ margin: 3 }}
            >
              {options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={index}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>
            <FormHelperText sx={{ margin: 2 }}>{validationText}</FormHelperText>
            <PillButton className="secondary" type="submit">
              答え合わせ
            </PillButton>
          </FormControl>
        </form>
      </CardContent>
    </Card>
  );
}
