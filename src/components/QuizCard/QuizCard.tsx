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
      setValidationText("πε€§ζ­£θ§£π");
      onCorrectSubmission();
    } else if (selectedAnswer === "") {
      setValidationError(true);
      setValidationText("η­γγιΈζγγ¦γγ γγγ");
    } else {
      setValidationError(true);
      setValidationText("δΈζ­£θ§£π");
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
              η­γεγγ
            </PillButton>
          </FormControl>
        </form>
      </CardContent>
    </Card>
  );
}
