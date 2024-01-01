function NextHint({ dispatch, hintIndex }) {
  if (hintIndex === 2) return <button></button>;
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextHint" })}
    >
      More Hint
    </button>
  );
}

export default NextHint;
