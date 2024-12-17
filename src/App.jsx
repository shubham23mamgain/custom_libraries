// import CreativeScroll from "./components/AllComponents";

import Roadmap from "./components/Roadmap";
import StickyElement from "./components/StickyElement";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div className="">
      <StickyElement />
      <HomePage />
      <Roadmap />
    </div>
  );
};

export default App;
