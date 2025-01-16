// Class based component in React

import React from "react";
import { GITHUB_API_URL } from "../constants";

class Githubprofile extends React.Component {
    constructor(props) {
        super(props);
        console.log("github construc");
        this.state = {
            username : props.username || "",
            name : "",
            location1 : "",
            bio : ""
        }
    }

    render() {
        const { name, username, bio, location1 } = this.state; // Correct destructuring
        console.log("github render");
        return (
            <div>
                <h1>Github profile: {username}</h1>
                <h3>Name : {name}, Location : {location1}</h3>
                <h4>Bio: {bio}</h4>
            </div>
        );
    }

    componentDidMount() {
        console.log("github mount");

        const fetchGithubProfile = async() => {
            const response = await fetch(`${GITHUB_API_URL}${this.props.username}`);
            if(response.ok) {
                const data = await response.json();
                // console.log(data);
                this.setState({
                    name : data.name,
                    location1 : data.location,
                    bio : data.bio
                });
            }
        }

        fetchGithubProfile();

    }


}

export default Githubprofile;