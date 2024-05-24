import "./StoryCard.css";

function StoryCard({ src, name }: { src: any; name: any }) {
  return (
    <div className="relative col mx-1 my-3">
      <img className="rounded" src={src} alt={name} />
      <div className="storytext">{name}</div>
      <img className="storycircle" src={src} alt="" />
    </div>
  );
}

export default StoryCard;
