import NextHint from "./NextHint";
import Options from "./Options";

function Question({ question, answer, dispatch, hintIndex }) {
  const hints = question.hints;

  return (
    <div>
      <h4>&rarr; {hints[hintIndex]}</h4>

      <div className="test">
        <NextHint dispatch={dispatch} hintIndex={hintIndex} />
        <p>
          point &rarr; {hintIndex === 0 && "30"}
          {hintIndex === 1 && "20"}
          {hintIndex === 2 && "10"}
        </p>
      </div>
      <Options
        question={question}
        answer={answer}
        dispatch={dispatch}
        hintIndex={hintIndex}
      />
    </div>
  );
}

export default Question;
