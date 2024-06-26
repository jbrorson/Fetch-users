import { useState, useEffect, ReactNode } from "react";
import { get } from "./util/http";
import UserData, { User } from "./components/UserData/UserData";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Button from "./components/Button/Button";
import Spinner from "./components/Spinner/Spinner";
import "./App.css";

type RawUserData = {
  results: {
    name: {
      first: string;
      last: string;
    };
    email: string;
    phone: string;
    picture: {
      large: string;
    };
  }[];
};

function App() {
  const [fetchedUsers, setFetchedUsers] = useState<User[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string>();

  const fetchUser = async () => {
    setIsFetching(true);
    try {
      const data = (await get(
        `https://randomuser.me/api/?results=1`
      )) as RawUserData;
      const newUser = data.results.map((rawUser) => ({
        name: `${rawUser.name.first} ${rawUser.name.last}`,
        email: rawUser.email,
        phone: rawUser.phone,
        image: {
          alt: "User Profile Image",
          src: rawUser.picture.large,
        },
      }));
      setFetchedUsers((prevUsers) => [...prevUsers, ...newUser]);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleAddUser = () => {
    fetchUser();
  };

  let content: ReactNode;

  if (isFetching && fetchedUsers.length === 0) {
    content = <Spinner text="Hämtar användardata..." />;
  } else if (error) {
    content = <ErrorMessage text={error} />;
  } else if (fetchedUsers.length > 0) {
    content = <UserData users={fetchedUsers} />;
  }

  return (
    <main className="App">
      <h1>Generera random användare App</h1>
      {content}
      <Button onClick={handleAddUser} isFetching={isFetching} />
    </main>
  );
}

export default App;
