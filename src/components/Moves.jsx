const Moves = (props) => {
  return (
    <div className="moves" onClick={() => props.resetMoves(props.id)}>
      <p>Move: ${props.id}</p>
    </div>
  );
};

export default Moves;
