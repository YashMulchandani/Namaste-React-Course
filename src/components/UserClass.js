import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            counter2: 0
        }
    }

    componentDidMount() {
        console.log("Component Mounted");
    }

    render() {
        const { field, name, location } = this.props;
        const { counter, counter2 } = this.state;
        return (
        <div className="user-card">
            <h1>{field} Component</h1>
            <h1>Name : {name}</h1>
            <h2>Location : {location}</h2>
            <h3>Contact : 1234567890</h3>
            <button onClick={() => { this.setState({ counter: this.state.counter + 1, counter2: this.state.counter2 + 1 })}}> Click Me</button>
            <p>Increment Counters: {counter}, {counter2}</p>
        </div>
    )
    }
}

export default UserClass;