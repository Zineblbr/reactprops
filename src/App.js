import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./profile/Profile";

const App = () => {
  const handleName = (name) => {
    alert("Hello " + name);
  };

  return (
    <div className="App">
      <Profile
        fullName="Loubar Zineb"
        bio="I am a web developer"
        profession="Freelancer"
        handleName={handleName}
      >
        <img
          src="./Images/ProfilePhoto.png"
          alt="Profile"
          style={{ width: "150px", height: "150px", borderRadius: "50%" }}
        />
      </Profile>
    </div>
  );
};

export default App;
