import { GithubAuthProvider } from "firebase/auth";
import { useLogin } from "./hooks/useLogin";
import { useLogout } from "./hooks/useLogout";
import { useAuthContext } from "./contexts/AuthContext";
import "./App.css";
import { ProfileCard } from "./components/ProfileCard";
import { Form } from "./components/Form";
import { readPostDocument } from "./firebase/createPostDocument";
import { Post } from "./components/Post";
import { useEffect, useState } from "react";

function App() {
  const { login, isPending } = useLogin();
  const { logout } = useLogout();
  const { user, authIsReady } = useAuthContext();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    readPostDocument().then((posts) => setPosts(posts));
  }, []);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  return authIsReady ? (
    <div className="App">
      {user == null ? (
        <button onClick={() => login(new GithubAuthProvider())}>
          Login in with github
        </button>
      ) : (
        <>
          <ProfileCard user={user} />
          <Form addPost={addPost} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              margin: "10px",
            }}
          >
            {posts.map((post) => (
              <Post user={post.userId} text={post.text} like={post.like} />
            ))}
          </div>
          <button onClick={logout}>Log out</button>
        </>
      )}
    </div>
  ) : (
    <h3>Loading...</h3>
  );
}

export default App;
