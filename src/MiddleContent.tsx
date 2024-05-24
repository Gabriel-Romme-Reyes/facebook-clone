import Feed from "./Feed";
import Status from "./Status";
import Stories from "./Stories";

function MiddleContent() {
  return (
    <main className="col-4">
      <div className="scrollable">
        <Stories />
        <Status></Status>
        <Feed></Feed>
      </div>
    </main>
  );
}

export default MiddleContent;
