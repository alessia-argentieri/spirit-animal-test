import { FC, useState } from "react";
import { Question } from "../questions";
import wolf from "../assets/images/wolf.jpg";
import lion from "../assets/images/lion.jpg";
import dolphin from "../assets/images/dolphin.jpg";
import eagle from "../assets/images/eagle.jpg";
import { descriptions } from "../questions";

type Props = {
  data: Question[];
};

const Test: FC<Props> = ({ data }) => {
  const [index, setIndex] = useState(0);
  const [begin, setBegin] = useState(true);
  const [finished, setFinished] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [resultArray, setResultArray] = useState<string[]>([]);
  const [profile, setProfile] = useState<string | null>(null);
  const [picture, setPicture] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string>();

  const questions = data[index];

  const mostFrequent = (arr: string[]): string =>
    Object.entries(
      arr.reduce((a, k) => {
        a[k] = (a[k] ?? 0) + 1;
        return a;
      }, {} as Record<string, number>)
    ).reduce((a, v) => (v[1] >= a[1] ? v : a), [null, 0])[0];

  const myResult = mostFrequent(resultArray);

  const start = () => {
    setIndex(0);
    setBegin(false);
    setSelectedAnswer(null);
    setResultArray([]);
  };

  const next = () => {
    if (index === data.length - 1) {
      setResultArray((prevArray) => [
        ...prevArray,
        questions.letters[selectedAnswer!],
      ]);
      finish();
    } else if (selectedAnswer === null) {
      setIndex(index);
    } else {
      setIndex(index + 1);
      setSelectedAnswer(null);
      setResultArray((prevArray) => [
        ...prevArray,
        questions.letters[selectedAnswer!],
      ]);
    }
  };

  const finish = () => {
    setFinished(true);
    setProfile(() => {
      if (myResult === "A") {
        return "Dolphin";
      } else if (myResult === "B") {
        return "Lion";
      } else if (myResult === "C") {
        return "Wolf";
      } else if (myResult === "D") {
        return "Eagle";
      } else {
        return null;
      }
    });
    setPicture(() => {
      if (myResult === "A") {
        return dolphin;
      } else if (myResult === "B") {
        return lion;
      } else if (myResult === "C") {
        return wolf;
      } else if (myResult === "D") {
        return eagle;
      } else {
        return undefined;
      }
    });
    setDescription(() => {
      if (myResult === "A") {
        return descriptions.dolphin;
      } else if (myResult === "B") {
        return descriptions.lion;
      } else if (myResult === "C") {
        return descriptions.wolf;
      } else if (myResult === "D") {
        return descriptions.eagle;
      } else {
        return undefined;
      }
    });
  };

  const reset = () => {
    setIndex(0);
    setBegin(true);
    setFinished(false);
    setSelectedAnswer(null);
    setResultArray([]);
  };

  const checkedAnswer = (answerIndex: number): boolean =>
    selectedAnswer === answerIndex;

  console.log(data.length);

  return (
    <div className={`container ${begin ? "container-start" : ""}`}>
      <h1>Find your spirit animal</h1>

      {begin ? (
        <>
          <h2 className="h2-start">
            <br />A spirit animal is a reflection of a person's inner self and
            the traits and qualities they embody. <br /> By taking this test,
            you will gain a better understanding of your own strengths and
            unique traits, of who you are and what you stand for.
          </h2>
          <button className="btn btn-start" onClick={start}>
            Start
          </button>
        </>
      ) : (
        <>
          {finished ? (
            <>
              <h2>
                Your spirit animal is: <br /> {profile}
                <br />
                <img src={picture} className="img" />
                <p style={{ fontSize: "16px" }}>{description}</p>
              </h2>
              <button className="btn" onClick={reset}>
                Start again
              </button>
            </>
          ) : (
            <>
              <h2>
                {index + 1}. {questions.question}
              </h2>

              {questions.choices.map((choice, index) => (
                <label className="radio" key={index}>
                  <input
                    type="radio"
                    name="choice"
                    onChange={() => setSelectedAnswer(index)}
                    checked={checkedAnswer(index)}
                  ></input>
                  <span className="label">{choice}</span>
                </label>
              ))}
              <button className="btn" onClick={next}>
                Next
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Test;
