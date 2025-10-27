import React from "react";
import "./UserList.css";

interface UserListProps {
  users: string[];
  currentUser: string;
}

const UserList: React.FC<UserListProps> = ({ users, currentUser }) => {
  return (
    <div className="user-list">
      <h4>Онлайн:</h4>
      <ul>
        {users.map((user) => (
          <li
            key={user}
            className={user === currentUser ? "me" : ""}
          >
            {user === currentUser ? `${user} (вы)` : user}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;