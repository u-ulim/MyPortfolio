import { Footer, Navbar, StarrySky } from "../components";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "../sections";

const Page = () => (
  <div className="bg-primary-white overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative z-10">
      <About />
      <div className="absolute inset-0 gradient-03 z--10" />
      <Explore />
    </div>
    <div className="relative z-10">
      <Insights />
      {/* <div className="absolute inset-0 gradient-04 z--10" /> */}
      <GetStarted />
    </div>
    <div className="fixed top-0 left-0 w-full h-full z--100">
      <StarrySky className="absolute top-0 left-0 w-full h-full z--100" />
    </div>
    <Feedback className="relativez-10" />
    {/* <WhatsNew />
    <World /> */}
    <Footer className="relative z-10" />
  </div>
);

export default Page;
