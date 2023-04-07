import data from "../data/data";

const Card = () => {
  return (
    <>
      <div className="card-section">
        {data.map(({ id, title, details, imgURL, alt }) => {
          return (
            <div className="card-body" key={id}>
              <img className="card-image" src={imgURL} alt={alt} />
              <p className="card-title">{title}</p>
              <p className="card-details">{details}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
