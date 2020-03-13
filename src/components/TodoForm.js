import React, { Component } from 'react'

export default class TodoFrom extends Component{
    state ={
        title: "",
        content: "",
        urgent: false
    }

    handleChange = (event) =>{
        const {name} = event.target
        const value = name === 'urgent' ? event.target.checked : event.target.value
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTodo(this.state)
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit} className="todo-form">
                <h2>Add New Todo</h2>
                <label>Title</label>
                <input name='title' value={this.state.title} onChange={this.handleChange}/>
                <label>Content</label>
                <input name='content' value={this.state.content} onChange={this.handleChange}/>
                <label>urgent</label>
                <input type='checkbox' name='urgent' value={this.state.urgent} onChange={this.handleChange}/>
                <input type='submit'/>
            </form>
        )
    }
}