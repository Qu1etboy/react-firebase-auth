export const Post = ({ user, text, like }) => {
  return (
    <div style={{ border: "black solid 1px", borderRadius: "10px" }}>
      <h3>{text}</h3>
      <h3>Like : {like}</h3>
      <h3>Written by {user}</h3>
    </div>
  );
};
