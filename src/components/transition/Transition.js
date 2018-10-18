import React, { Component, Fragment } from 'react';
import './index.css';

class Transition extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: true
        }
        this.handdleToggle = this.handdleToggle.bind(this);
    }
    render() {        
        return (
            <Fragment>
                <div className={this.state.show ? 'show-keyframes': 'hide-keyframes'}> Hello</div>
                <button onClick={this.handdleToggle}>切換toggle</button>
            </Fragment>           
        )
    }
    handdleToggle () {
        this.setState({
            show: this.state.show ? false : true
        })
    }  
}  
export default Transition;