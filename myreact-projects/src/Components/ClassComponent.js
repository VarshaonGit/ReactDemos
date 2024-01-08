 import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Varsha',
         age:40,
         salary:10000
      }
    }
   
  render() {
    const changeInfo=()=>{
        this.setState(
            {
            name:'Raju',
            age:67,
            salary:20000}
        )
    }
    return (
      <div>
        <h1>This is Class Component </h1>
        <p>Name is :{this.state.name}</p>
        <p>Age is : {this.state.age}</p>
        <p>Salary is :{this.state.salary}</p>
        <button onClick={changeInfo}>Click to change info </button>
      </div>
    )
  }
}
