import "./Quote.scss";

function Quote({ author, quote }) {
  return (
    <div className="Quote__container">
      {quote} <br />
      {author}
    </div>
  );
}

export default Quote;