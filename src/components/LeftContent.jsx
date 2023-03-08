const LeftContent = ({ details }) => {
  return (
    <div className="content-container">
      <h1>{details.content1}</h1>
      <div>{details.content2}</div>
    </div>
  );
};

export default LeftContent;
