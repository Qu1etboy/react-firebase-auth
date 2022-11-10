import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useAuthContext } from "../contexts/AuthContext";
import {
  createPostDocument,
  readPostDocument,
} from "../firebase/createPostDocument";

export const Form = ({ addPost }) => {
  const [text, setText] = useState("");
  const { user } = useAuthContext();
  const writePost = () => {
    const post = {
      postId: uuidv4(),
      userId: user.uid,
      text: text,
      like: 0,
    };

    createPostDocument(post);
    addPost(post);

    console.log("posted successfully");
  };

  return (
    <div style={{ padding: "10px", display: "flex", gap: "10px" }}>
      <input
        placeholder="what do you think right now..."
        style={{
          padding: "10px",
          borderRadius: "5px",
          width: "200px",
          border: "none",
        }}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={writePost}>post</button>
      <button onClick={readPostDocument}>Get all post from firestore</button>
    </div>
  );
};
