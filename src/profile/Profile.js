import React from "react";
import PropTypes from "prop-types";

const Profile = ({ fullName, bio, profession, handleName, children }) => {
  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      {children}
      <h1>{fullName}</h1>
      <p>{bio}</p>
      <p>{profession}</p>
      <button onClick={() => handleName(fullName)}>Click me!</button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: "Anonymous",
  bio: "I am a web developer",
  profession: "Developer",
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func.isRequired,
  children: PropTypes.element,
};

export default Profile;
