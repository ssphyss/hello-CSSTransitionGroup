import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import './index.css';

class CSSTransition1 extends Component {
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
                {/* <div className={this.state.show ? 'show-keyframes': 'hide-keyframes'}> Hello</div> */}
                <CSSTransition
                    in={this.state.show}
                    timeout={1000}
                    classNames='fade'
                    unmountOnExit
                    onEntered={(el) => {el.style.color='blue'}}
                    appear={true}
                >
                    <h1>Hello CSSTransition</h1>
                </CSSTransition>
                <button onClick={this.handdleToggle}>切換toggle</button>
            </Fragment>           
        )
    }
    handdleToggle () {
        // this.setState({
        //     show: this.state.show ? false : true
        // })
    }  
}  
export default CSSTransition1;