import reviewData from "../data/reviewData";

const ReviewCard = () => {
  return (
    <>
      <div className="review-section">
        <div className="quote-container">
          <img className="quote-mark" src="/images/bg-quotes.png" alt="" />
        </div>
        {reviewData.map((review) => {
          const { id, details, avatar, name, title } = review;
          return (
            <div className="review-card" key={id}>
              <p className="review-details">{details}</p>
              <div className="review-card-footer">
                <img className="review-avatar" src={avatar} alt="avatar" />
                <div className="review-card-footer-details">
                  <p className="review-card-name">{name}</p>
                  <p className="review-card-title">{title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ReviewCard;
