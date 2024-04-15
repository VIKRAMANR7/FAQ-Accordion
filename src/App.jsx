import Accordion from "./Accordion";
import { accordionData } from "./AccordionData";
import iconsStar from "./assets/images/icon-star.svg";
import bgPatternDesktop from "./assets/images/background-pattern-desktop.svg";
import bgPatternMobile from "./assets/images/background-pattern-mobile.svg";

const App = () => {
  return (
    <>
      <div className="min-h-screen font-Work-Sans flex items-center justify-center bg-bgdesktop bg-no-repeat bg-light-pink mobile:bg-bgmobile">
        <div className="w-[530px] bg-white p-[30px] rounded-[12px] mobile:w-[345px]">
          <div className="flex items-baseline gap-[20px]">
            <img
              src={iconsStar}
              alt="icon-star"
              className="w-[35px] h-[36px]"
            />
            <h1 className="text-dark-purple text-[48px] font-bold pb-[10px] mobile:text-[32px]">
              FAQs
            </h1>
          </div>
          <div>
            {accordionData.map(({ title, content }) => (
              <Accordion title={title} content={content} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
