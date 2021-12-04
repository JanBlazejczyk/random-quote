import "./Quote.scss";

function Quote({ author, quote }) {
  return (
    <div className="Quote">
      <span className="Quote__text--quote">{quote}</span>
      <span className="Quote__text--author">{author}</span>
    </div>
  );
}

export default Quote;