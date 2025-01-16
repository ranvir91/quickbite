// Class based component in React

import React from "react";

class OurteamCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "team card",
            count : 1
        };
        console.log('child constructor');
    }

    componentDidMount() {
        console.log('child componentDid Mount');
    }

    render() {
        console.log('child render');
        // console.log(this.props.name);        
        const {name, age, location} = this.props;
        const {count} = this.state;

        const incrementF = () => {
            this.setState({
                count: count + 1
            });
        }
        
        return (
            <div className="restaurant-card-shimmer">
                <h4>Team card : Class component</h4>
                <hr />
                <h4>{name}</h4>
                <h4>{age}</h4>
                <p>{count} ⭐ <button onClick={incrementF}>Click me</button></p>

                <p>{location}</p>
            </div>
        );
    }
}

export default OurteamCard;