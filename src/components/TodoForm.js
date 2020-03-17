import React, { Component } from 'react'

export default class TodoFrom extends Component{
    state = {
        title: "",
        content: "",
        urgent: false
    }
    componentDidMount(){
        if(this.props.id){
            const {id, title, content, urgent} = this.props
            this.setState({ id, title, content, urgent })
        } 
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
        if(this.props.closeForm){
            this.props.closeForm(false)
        } 
        this.props.submitAction(this.state)
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
                <input type='checkbox' name='urgent' checked={this.state.urgent} onChange={this.handleChange}/>
                <input type='submit'/>
            </form>
        )
    }
}