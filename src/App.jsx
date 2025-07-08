import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Cocktails } from "./components/Cocktails";
import { About } from "./components/About";
import { Art } from "./components/Art";
import { Menu } from "./components/Menu";
import { UserProvider } from "./context/user.contex";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <UserProvider>
      <main>
        <Navbar />
        <Hero />
        <Cocktails />
        <About />
        <Art />
        <Menu />
      </main>
    </UserProvider>
  );
}

export default App;
