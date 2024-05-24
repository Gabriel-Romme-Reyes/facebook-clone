import { useRef } from "react";
import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Dog1",
    src: "public/story-img-1.jfif",
  },
  {
    name: "Dog2",
    src: ".\\public\\story-img-6.jfif",
  },
  {
    name: "Dog3",
    src: ".\\public\\story-img-3.jfif",
  },
  {
    name: "Dog4",
    src: ".\\public\\story-img-4.jfif",
  },
  {
    name: "Dog5",
    src: ".\\public\\story-img-5.jfif",
  },
];

function Stories() {
  return (
    <div className="d-flex ">
      {stories.map((story) => (
        <StoryCard name={story.name} src={story.src}></StoryCard>
      ))}
    </div>
  );
}

export default Stories;
