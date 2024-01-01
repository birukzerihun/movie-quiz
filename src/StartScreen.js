function StartScreen({ numOfQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Wellcome to Movie Quiz!</h2>
      <h3>{numOfQuestions} Questions to test your Movie Mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
