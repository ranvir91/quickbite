// Class based component in React

import React, { useEffect, useState } from "react";
import { GITHUB_API_URL } from "../constants";
import useGithubProfile from "../utils/useGithubProfile";

const GithubprofileNew = (props) => {
  const { profile, loading, error } = useGithubProfile(props.username); // Use your GitHub username
//   const {username, bio, location, name, avatar_url} = profile;
//   console.log(profile);
    
  if (loading) {
    return <div>Loading GitHub profile...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!profile) {
    return <div>No profile data available.</div>; // Handle case where profile is null
  }

    return (
      <div>
        <h1>fetched via Custom Hook</h1>
        {profile.avatar_url && <img src={profile.avatar_url} alt="Profile Avatar" width={200} />}
        <h2>{profile.name}</h2>
        <p>Username: {profile.login}</p>
        {profile.bio && <p>Bio: {profile.bio}</p>}
        {profile.location && <p>Location: {profile.location}</p>}
        {profile.html_url && <a href={profile.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>}
      </div>
    );
}

export default GithubprofileNew;
