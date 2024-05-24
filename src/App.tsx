import LeftNav from "./LeftNav";
import MiddleContent from "./MiddleContent";
import RightNav from "./RightNav";
import TopNav from "./TopNav.";

function App() {
  return (
    <>
      <TopNav></TopNav>
      <div className="row">
        <LeftNav />
        <MiddleContent></MiddleContent>
        <RightNav></RightNav>
      </div>
    </>
  );
}

export default App;
