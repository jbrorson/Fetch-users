import "./UserData.css";

export type User = {
  name: string;
  email: string;
  phone: string;
  image: {
    alt: string;
    src: string;
  };
};

type UserProps = {
  users: User[];
};

export default function UserData({ users }: UserProps) {
  return (
    <div className="Wrapper">
      <ul className="UserList">
        {users.map((user, index) => (
          <li className="UserCard" key={index}>
            <img className="Image" {...user.image}></img>
            <div className="UserInfo">
              <h2 className="UserName">{user.name}</h2>
              <p className="UserEmail">{user.email}</p>
              <p className="UserPhone">{user.phone}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
