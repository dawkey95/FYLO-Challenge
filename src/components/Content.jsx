import data from "../data/data";

const Card = () => {
  return (
    <>
      <section className="card-section">
        {data.map(({ id, title, details, imgURL }) => {
          return (
            <div className="card-body" key={id}>
              <img className="card-image" src={imgURL} />
              <h3 className="card-title">{title}</h3>
              <p className="card-details">{details}</p>
              <button className="card-btn">Get Started</button>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Card;
