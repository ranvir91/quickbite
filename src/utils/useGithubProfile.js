// useGithubProfile.js (Custom Hook)
import { useState, useEffect } from 'react';
import { GITHUB_API_URL } from '../constants';

const useGithubProfile = (username) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      setError(null); // Clear any previous errors
      try {
        const response = await fetch(`${GITHUB_API_URL}${username}`);
        if (!response.ok) {
          if(response.status === 404){
            throw new Error('User not found');
          }
          else {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        }
        const data = await response.json();
        setProfile(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (username) { // Only fetch if a username is provided
      fetchProfile();
    } else {
      setLoading(false); // Set loading to false if no username is provided
    }
  }, [username]); // The effect runs whenever the username changes

  return { profile, loading, error };
};

export default useGithubProfile;
