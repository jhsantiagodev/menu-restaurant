import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <>
      <div className="text-3xl font-bold underline flex-center h-screen">
        hellow world
      </div>
    </>
  );
}

export default App;
