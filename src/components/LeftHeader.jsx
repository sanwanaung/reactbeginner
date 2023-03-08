const LeftHeader = ({ details }) => {
  // console.log(details);
  return (
    <div className="header-container">
      <h3>{details.header}</h3>
    </div>
  );
};
//{ header, title, content1, content2, description }
export default LeftHeader;
