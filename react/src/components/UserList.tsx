import React from "react"
import "./UserList.css"

interface UserListProps {
  users: string[]
  currentUser: string
}

const UserList: React.FC<UserListProps> = ({ users, currentUser }) => {
  return (
    <div className="user-list">
      <div className="user-list__title">Online</div>
      {users.map(user => (
        <div key={user} className={`user-list__item ${user === currentUser ? "user-list__item--current" : ""}`}>
          <div className="user-list__avatar" />
          <div className="user-list__name">{user}</div>
        </div>
      ))}
    </div>
  )
}

export default UserList
