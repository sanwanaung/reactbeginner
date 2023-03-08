import RightButton from "./RightButton";
import RightContent from "./RightContent";
import RightHeader from "./RightHeader";
import Image1 from "./../images/icon-reaction.svg";
import Image2 from "./../images/icon-memory.svg";
import Image3 from "./../images/icon-verbal.svg";
import Image4 from "./../images/icon-visual.svg";

const image1 = Image1;
const image2 = Image2;
const image3 = Image3;
const image4 = Image4;
const class1 = "icon1";
const class2 = "icon2";
const class3 = "icon3";
const class4 = "icon4";

const details = [
  {
    title: "Summary",
    text: "Continue",
  },
];

const Right = () => {
  return (
    <div className="right-container">
      <RightHeader details={details} />
      <div className="inner-container">
        <RightContent
          img={image1}
          action="Reaction"
          conuntNumber1="80 /"
          conuntNumber2=" 100"
          icon={class1}
        />
        <RightContent
          img={image2}
          action="Memory"
          conuntNumber1="92 /"
          conuntNumber2=" 100"
          icon={class2}
        />
        <RightContent
          img={image3}
          action="Verbal"
          conuntNumber1="61 /"
          conuntNumber2=" 100"
          icon={class3}
        />
        <RightContent
          img={image4}
          action="Visual"
          conuntNumber1="72 /"
          conuntNumber2=" 100"
          icon={class4}
        />
      </div>
      <RightButton details={details} />
    </div>
  );
};

export default Right;
