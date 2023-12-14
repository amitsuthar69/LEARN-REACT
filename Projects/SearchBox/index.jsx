import { useCallback, useState } from "react";
import { shuffle } from "@/utils"; // assume it as a function which randomly shiffles an array

const allUsers = ["john", "alex", "george", "simon", "james"];

export default function Demo({}) {
  const [users, setUsers] = useState(allUsers);

  // search logic
  const handleSearch = useCallback(
    (text) => {
      const filteredUsers = allUsers.filter((user) => user.includes(text));
      setUsers(filteredUsers);
    },
    [users]
  );

  return (
    <div>
      <div>
        <button onClick={() => setUsers(shuffle(allUsers))}>Shuffle</button>
        <Search onChange={handleSearch} />
      </div>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

// Search box component
function Search({ onChange }) {
  return (
    <input
      type="text"
      placeholder="Search users..."
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
