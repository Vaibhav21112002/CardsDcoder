import React, { Component } from 'react';
// import './counterComponentstyle.css';


class Counter extends Component {
    state ={
        count : 0,
        url: "https://picsum.photos/190",
        coo: "orange",
        // tags:['tag1','tag2','tag3']
    };

    click = ()=>{
        // this.state.count++; 
        this.setState({count:this.state.count+1})
    }
    render() { 

        let classes = this.getBadgeClasses();
        return (
            <div>
                <h1 className = {classes} >{this.formatCount()}</h1>
                <button onClick = {this.click} className = "btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "primary" : "warning";
        return classes;
    }

    formatCount()
    {
        const {count} = this.state;
        return count === 0?"Zero":count;
    }
}
 
export default Counter;