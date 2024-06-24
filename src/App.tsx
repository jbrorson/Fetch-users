import { useState, useEffect, ReactNode } from "react";
import "./App.css";
import UserData, { User } from "./components/UserData";
import { get } from "./util/http";
import ErrorMessage from "./components/ErrorMessage";

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

  useEffect(() => {
    async function fetchUser() {
      setIsFetching(true);
      try {
        const data = (await get(
          "https://randomuser.me/api/?results=4"
        )) as RawUserData;
        const userData: User[] = data.results.map((rawUser) => {
          return {
            name: `${rawUser.name.first} ${rawUser.name.last}`,
            email: rawUser.email,
            phone: rawUser.phone,
            image: {
              alt: "User Profile Image",
              src: rawUser.picture.large,
            },
          };
        });
        setFetchedUsers(userData);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }
      setIsFetching(false);
    }

    fetchUser();
  }, []);

  let content: ReactNode;

  if (fetchedUsers) {
    content = <UserData users={fetchedUsers} />;
  }

  if (isFetching) {
    content = <p>Hämtar användardata...</p>;
  }

  if (error) {
    content = <ErrorMessage text={error} />;
  }

  return (
    <main className="App">
      <h1>Visar random user data hämtat från API</h1>
      {content}
    </main>
  );
}

export default App;
