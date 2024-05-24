import "./Contacts.css";

function Contacts({ name, profile }: { name: any; profile: any }) {
  return (
    <li className="list-group-item ">
      <a className=" p-2 d-flex align-items-end" href="">
        <div className="d-flex justify-content-end relative">
          <img className="contact-circle" src={profile} alt="" />
          <div className="dot"></div>
        </div>
        <span className="contact-name ps-5">{name}</span>
      </a>
    </li>
  );
}

export default Contacts;
