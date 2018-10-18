import React, { Component, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './index.css';

class CSSTransitionGroup extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: []
        }
        this.handdleAddItem = this.handdleAddItem.bind(this);
    }
    render() {        
        return (
            <Fragment>
                <TransitionGroup>
                    {/* <div>Hello handdleAddItem</div> */}
                    {
                        this.state.list.map((item, index)=>{
                            return (
                                <CSSTransition
                                    // in={this.state.show}
                                    timeout={1000}
                                    classNames='fade'
                                    unmountOnExit
                                    onEntered={(el) => {el.style.color='blue'}}
                                    appear={true}
                                    key={index}
                                >
                                    <div>{item}</div>
                                </CSSTransition>
                            )                        
                        })
                    }                
                </TransitionGroup>
                <button onClick={this.handdleAddItem}>切換toggle</button>
            </Fragment>           
        )
    }
    handdleAddItem () {
        this.setState((prevState) => {
            return {
                list: [...prevState.list, 'item']
            }
        })
    }  
}  
export default CSSTransitionGroup;