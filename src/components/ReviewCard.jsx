import reviewData from "../data/reviewData";

const ReviewCard = () => {
  return (
    <>
      <div className="review-section">
        {reviewData.map((review) => {
          const { id, details, avatar, name, title } = review;
          return (
            <div className="review-card" key={id}>
              <p className="review-details">{details}</p>
              <div className="review-card-footer">
                <img className="review-avatar" src={avatar} alt="avatar" />
                <div className="review-card-footer-details">
                  <h4 className="review-card-name">{name}</h4>
                  <p className="review-card-title">{title}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  );
};

export default ReviewCard;
