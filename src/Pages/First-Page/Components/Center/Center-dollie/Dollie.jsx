import "./Dollie.css";
import { useEffect, useState } from "react";
import Dollie from "../../../../../Assets/Images/dollie.svg";

function CenterDollie() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <>
      <div className="heading d-flex align-items-center mt-4">
        <img
          className="img-responsive me-3"
          src={Dollie}
          alt="Dollie"
          width="50"
          height="50"
        />
        <h4 className="user-name">Dollie Blair</h4>
      </div>
      {users.length > 0 && (
        <ul className="list-unstyled d-flex justify-content-between flex-wrap mt-4">
          {users.map((user) => (
            <li key={user.id} className="text-danger">
              <img src={user.url} alt="random image" width="200" height="200" />
              <h2 className="h2 video-name">{user.title}</h2>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default CenterDollie;
