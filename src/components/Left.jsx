import LeftContent from "./LeftContent";
import LeftDescription from "./LeftDescription";
import LeftHeader from "./LeftHeader";
import LeftTitle from "./LeftTitle";

const details = [
  {
    header: "Your Result",
    title: "Great",
    content1: "76",
    content2: "of 100",
    description:
      "You scored higher than 65% of the people who have taken these tests.",
  },
];

const Left = () => {
  return (
    <div className="left-container">
      <LeftHeader details={details[0]} />
      <LeftContent details={details[0]} />
      <LeftTitle details={details[0]} />
      <LeftDescription details={details[0]} />
    </div>
  );
};

export default Left;
