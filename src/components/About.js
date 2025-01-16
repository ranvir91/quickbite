import React from "react";
import OurteamCard from "./OurteamCard";
import Githubprofile from "./Githubprofile";
// import Githubprofile from "./Githubprofile";

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log('parent constructor');        
    }

    render() {
        console.log('parent render');
        return (
            <AboutF />
        );
    }

    componentDidMount() {
        console.log('parent componentDid Mount');
    }
};

const AboutF = () => {
    return (
        <>
          <main className="container">
            <h1>About page</h1>
            <hr/>
            <div className="restaurant-info">
                <hr/>
                <OurteamCard name={'Ranvir Singh'} age={'34'} location={'Hyderabad'} />
                {/* <Githubprofile username={'ranvir91'} /> */}
                <Githubprofile username={'ranvir91'} />
            </div>

          </main>
        </>
    );
}

export default About;