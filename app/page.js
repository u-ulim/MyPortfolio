import { Footer, Navbar, StarrySky } from "../components";
import { About, Main, Hero, ToyProject, Resume, Career } from "../sections";

const Page = () => {
  return (
    <>
      <div className="relativebg-primary-white overflow-hidden">
        <div className="relative z-100 w-full">
          <Navbar />
        </div>
        <div id="home">
          <Hero />
        </div>
        <div className="relative z-10">
          <About />
          {/* <div className="absolute inset-0 gradient-03 z--10" /> */}
          <div id="project">
            <Main />
          </div>
        </div>
        <div className="relative z-10">
          <div id="toy-project">
            <ToyProject />
          </div>
          {/* <div className="absolute inset-0 gradient-04 z--10" /> */}
          <div id="introduction">
            <Resume />
          </div>
        </div>
        <div className="fixed top-0 left-0 w-full h-full z--100">
          <StarrySky className="absolute top-0 left-0 w-full h-full z--100" />
        </div>
        <Career className="relative z-10" />
        <Footer className="relative z-10" />
      </div>
    </>
  );
};

export default Page;
