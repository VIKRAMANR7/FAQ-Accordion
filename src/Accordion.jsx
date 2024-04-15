import { useState } from "react";
import iconPlus from "./assets/images/icon-plus.svg";
import iconMinus from "./assets/images/icon-minus.svg";
import { accordionData } from "./AccordionData";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <div
        onClick={() => setIsActive(!isActive)}
        className="flex justify-between items-center mobile:gap-[30px]"
      >
        <div className="text-dark-purple font-bold pt-[20px] pb-[20px]   hover:text-pink cursor-pointer">
          {title}
        </div>
        {isActive ? (
          <img src={iconMinus} alt="icon-minus" />
        ) : (
          <img src={iconPlus} alt="icon-plus" />
        )}
      </div>
      {isActive && (
        <div className="text-grayish-purple text-[14px] pb-[20px]">{content}</div>
      )}
      <hr className="bg-light-purple" />
      {/* accordionData.map((item,index) => {
        const islast = events.length;
        return ();
      }) */}
    </div>
  );
};

export default Accordion;
