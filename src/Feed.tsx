const reaction = [
  {
    name: "Like",
    icon: "bi bi-hand-thumbs-up",
  },
  {
    name: "Comment",
    icon: "bi bi-chat",
  },
  {
    name: "Share",
    icon: "bi bi-share",
  },
];

function Feed() {
  return (
    <div className="card p-3 mb-5">
      <div className="row mb-1">
        <div className="col-1">
          <i className="bi bi-person-circle fs-3"></i>
        </div>
        <div className="col-10">
          <b>Username</b>
          <p>a day ago</p>
        </div>
        <div className="col-1">
          <a href="">
            <i className="bi bi-x fs-3"></i>
          </a>
        </div>
      </div>
      <div className="row mb-5">
        <img src="public\story-img-1.jfif" alt="" />
      </div>
      <div className="row">
        <hr />
        {reaction.map((status) => (
          <div className="col d-flex justify-content-center">
            <a href="#">
              <i className={status.icon}></i>
              <span className="ms-1">{status.name}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feed;
