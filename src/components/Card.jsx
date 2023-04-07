import data from "../data/data";

const Card = () => {
  return (
    <>
      <section className="card-section">
        {data.map(({ id, title, details, imgURL, alt }) => {
          return (
            <div className="card-body" key={id}>
              <img className="card-image" src={imgURL} alt={alt} />
              <h3 className="card-title">{title}</h3>
              <p className="card-details">{details}</p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Card;
