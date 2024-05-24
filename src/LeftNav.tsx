const navigation = [
  {
    name: "Username",
    icon: "bi bi-person-circle fs-3",
  },
  {
    name: "Friends",
    icon: "bi bi-people-fill fs-3",
  },
  {
    name: "Feeds",
    icon: "bi bi-clock-fill fs-3",
  },
  {
    name: "Groups",
    icon: "bi bi-person-vcard-fill fs-3",
  },
  {
    name: "Marketplace",
    icon: "bi bi-shop fs-3",
  },
  {
    name: "Video",
    icon: "bi bi-play-btn-fill fs-3",
  },
  {
    name: "See More",
    icon: "bi bi-arrow-down-circle fs-3",
  },
];

function LeftNav() {
  return (
    <aside className="col-4">
      <ul className="list-group w-50 mt-2 sticky">
        {navigation.map((item) => (
          <li className="list-group-item mx-3 ">
            <a className="p-2" href="">
              <i className={item.icon}></i>
              <span className="ms-2">{item.name}</span>
            </a>
          </li>
        ))}
        <hr />
      </ul>
    </aside>
  );
}

export default LeftNav;
