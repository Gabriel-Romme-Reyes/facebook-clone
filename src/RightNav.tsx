import Contacts from "./Contacts";

const contacts = [
  {
    name: "dog1",
    profile: "public/story-img-1.jfif",
  },
  {
    name: "dog2",
    profile: "public/story-img-2.jfif",
  },
  {
    name: "dog3",
    profile: "public/story-img-3.jfif",
  },
  {
    name: "dog4",
    profile: "public/story-img-4.jfif",
  },
  {
    name: "dog5",
    profile: "public/story-img-5.jfif",
  },
  {
    name: "dog6",
    profile: "public/story-img-6.jfif",
  },
];

function RightNav() {
  return (
    <aside className="col mt-2 me-4 d-flex align-items-end flex-column ">
      <div className="w-50 sticky">
        <hr />
        <h4>Contacts</h4>
        <ul className="list-group mt-2">
          {contacts.map((contact) => (
            <Contacts name={contact.name} profile={contact.profile}></Contacts>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default RightNav;
