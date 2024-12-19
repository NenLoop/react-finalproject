import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Details.css"

const DetailsPage = () => {
  const navigate = useNavigate();

  const handleSave = () => {
    // Handle save logic (e.g., save user data)
    navigate("/homepage"); // Navigate to HomePage
  };

  const handleSkip = () => {
    // Handle skip logic (e.g., skip user input)
    navigate("/homepage"); // Navigate to HomePage
  };

  return (
    <div className="details-container">
      <div className="header">
        <h1 className="title">Vista</h1>
      </div>
      <div className="profile-content">
        <div className="left-section">
          <div className="profile-image">
            <div className="image-placeholder"></div>
            <button className="no-name">No name</button>
          </div>
          <div className="user-type">
            <h3>What kind of User are you?</h3>
            <button className="user-btn">Place Owner</button>
            <button className="user-btn">Traveler</button>
            <button className="user-btn">Tourist</button>
          </div>
        </div>

        <div className="right-section">
          <div className="name-and-info-container">
            <div className="name-container">
              <h3>Write Your Account Name</h3>
              <div className="name-fields">
                <input type="text" placeholder="Enter your first name..." />
                <input type="text" placeholder="Enter your last name..." />
              </div>
              <button className="done-btn">Done</button>
            </div>

            <div className="personal-info-container">
              <h3>Personal Information</h3>
              <input type="email" placeholder="Add Email..." />
              <input type="date" placeholder="DD/MM/YY" />
              <input type="text" placeholder="Add Number..." />
            </div>
          </div>

          <div className="saved-destinations-container">
            <h3>Saved Destinations</h3>
            <div className="add-now">Add Now +</div>
          </div>
        </div>
      </div>

      <div className="buttons">
        <button className="account-btn">Account</button>
        <button className="save-btn" onClick={handleSave}>Save</button>
        <button className="skip-btn" onClick={handleSkip}>Skip</button>
      </div>
    </div>
  );
};

export default DetailsPage;
