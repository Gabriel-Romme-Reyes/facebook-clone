function TopNav() {
  return (
    <nav className="shadow-sm navbar navbar-expand-lg bg-light position-sticky top-0">
      <div className="container-fluid h-100 ">
        <div className="col d-flex">
          <a className="rounded-circle bg-secondary px-2 me-1">
            <i className="bi bi-person-circle fs-3"></i>
          </a>
          <div>
            <form className="d-flex input-group input-group-sm" role="search">
              <input
                className="form-control "
                type="search"
                placeholder="Search Gabbook"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
        <div className="col d-flex justify-content-between">
          <div className="col topnav-hover justify-content-center d-flex">
            <a className="" href="#">
              <i className="bi  bi-house-door fs-3" />
            </a>
          </div>
          <div className="col topnav-hover justify-content-center d-flex">
            <a className="" href="#">
              <i className="bi  bi-flag fs-3" />
            </a>
          </div>
          <div className="col topnav-hover justify-content-center d-flex">
            <a className="" href="#">
              <i className="bi  bi-play-btn fs-3" />
            </a>
          </div>
          <div className="col topnav-hover justify-content-center d-flex">
            <a className="" href="#">
              <i className="bi  bi-shop fs-3" />
            </a>
          </div>
          <div className="col topnav-hover justify-content-center d-flex">
            <a className="" href="#">
              <i className="bi  bi-controller fs-3" />
            </a>
          </div>
        </div>
        <div className="col d-flex justify-content-end">
          <a className="rounded-circle bg-secondary px-2 me-1">
            <i className="bi bi-three-dots-vertical fs-4 black-icon"></i>
          </a>
          <a className="rounded-circle bg-secondary px-2 me-1">
            <i className="bi bi-chat-dots fs-4 black-icon"></i>
          </a>
          <a className="rounded-circle bg-secondary px-2 me-1">
            <i className="bi bi-bell fs-4 black-icon"></i>
          </a>
          <a className="rounded-circle bg-secondary px-2 me-1">
            <i className="bi bi-person-circle fs-3"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
