// import image1 from "./../images/icon-reaction.svg";

const RightContent = ({ img, action, conuntNumber1, conuntNumber2, icon }) => {
  return (
    <div className="right-content-container">
      <div className={`right-content-container-box ${icon}`}>
        <div>
          <img src={img} alt="img/png" className="icon0" />
          <div className="action">{action}</div>
        </div>
        <div>
          <div className="count-number">
            {conuntNumber1}
            <span className="count-number2">{conuntNumber2}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightContent;
