import React, {Component} from 'react';

class MyCardComponent extends Component{
    constructor(props){
        super(props); //what does super do again?
        this.state = {
            age: this.props.age

            
        }
    }

addAge = () => {
    this.state.age += 1.0;
    // functions need to be inside the class if they are modifying somethng inside the class
    this.setState({age: this.state.age});
    // after adding this it will now add the updates
}

    render(){
        return(
            <div>
                {/* props are static, for display mainly, need state to make it dynamic */}
                <h1>{this.props.last_name}, {this.props.first_name}</h1>
                <p>Age: {this.state.age}</p> 
                {/* changed the static props to state so it will become dynamic */}
                <p>Hair Color: {this.props.color}</p>
                <button onClick = { this.addAge }>Click to increase age</button>
            {/* The onClick function is a synthetic event, we had to add the arrow function to make it work*/}
            </div>
        );
    }
}
// so what happening is we a method/function to add age, used a synthetic event to button click, and then used state to make it dynamic

export default MyCardComponent;