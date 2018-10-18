import React, { Component, Fragment } from 'react';

class TodoList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			list: []
		}
	}
  
	render() {
	return (
		<Fragment>
			<input 
				value={this.state.inputValue}
				onChange={this.handleInputChange.bind(this)}
			/>
			<button onClick={this.handleBtnClick.bind(this)}>提交</button>
			<ul>
				{/* <li>React</li>
				<li>JS</li>
				<li>CSS</li>
				<li>HTML</li> */}
				{
					this.state.list.map((item, index)=>{
						return <li key={index} onClick={this.handleItemDelete.bind(this, index)}>{item}</li>
					})
				}
			</ul>
      	</Fragment>
    );
  }

	// 輸入框
	handleInputChange(e){
		// console.log(e.target);                  // <input value="Hello">
		// console.log(e.target.value);            // <input value="Hello">
		// this.state.inputValue = e.target.value  // 報錯
		// console.log(this)                       // undefined
		// console.log(this)                       // 用了bind(this)後,this就是TodoList
		this.setState({
			inputValue: e.target.value
		})
	}

	// 提交
	handleBtnClick(){
		this.setState({
			list : [...this.state.list, this.state.inputValue],
			inputValue: ''
		})
	}

	// 刪除
	handleItemDelete(index){
		// console.log(index);
		// this.state.list.splice(index, 1); // 不要這樣寫,不要直接去修改state
		const list = [...this.state.list];
		list.splice(index, 1);

		this.setState({			
			list: list
		})
	}
}

export default TodoList;
