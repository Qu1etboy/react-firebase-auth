export const ProfileCard = ({ user }) => {
  return (
    <div>
      <img
        src={user.photoURL}
        style={{ borderRadius: "100%", width: "100px", height: "100px" }}
      />
      <h3>{user.displayName}</h3>
    </div>
  );
};
