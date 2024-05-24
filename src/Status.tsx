const statuses = [
  {
    name: "Live Video",
    icon: "bi bi-camera-video-fill",
  },
  {
    name: "Photo/video",
    icon: "bi bi-camera-fill",
  },
  {
    name: "Feeling/activity",
    icon: "bi bi-emoji-grin-fill",
  },
];

function Status() {
  return (
    <div className="card  p-3 mb-3">
      <div className="row">
        <div className="col-1">
          <i className="bi bi-person-circle fs-3"></i>
        </div>
        <div className="col-11">
          <input
            className="form-control"
            type="search"
            placeholder="What's on your mind?"
            aria-label="Search"
          />
        </div>
      </div>
      <hr />
      <div className="row">
        {statuses.map((status) => (
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

export default Status;
