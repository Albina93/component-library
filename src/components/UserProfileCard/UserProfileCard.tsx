import React from "react";
import type { UserProfileCardProps } from "../../types";

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail = false,
  showRole = false,
  onEdit,
  children,
}) => {
  return (
    <div className="userProfileCard">
      {user.avatarUrl && (
        <img
          src={user.avatarUrl}
          alt={user.name}
          style={{ width: "64px", height: "64px", borderRadius: "50%" }}
        />
      )}
      <h2 className="userTitle">{user.name}</h2>
      {showEmail && <p>{user.email}</p>}
      {showRole && <p>{user.role}</p>}
      {onEdit && (
        <button
          onClick={() => onEdit(user.id)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-5 rounded"
        >
          Edit Profile
        </button>
      )}
      {children}
    </div>
  );
};
