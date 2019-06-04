import React, { Component } from 'react'

export default class TodoList extends Component {

    renderTodos = () => {
        return(
            <li>I am a thing</li>
        )
    }
    
    render() {
        return (
            <div>
                <ul>
                    {this.renderTodos()}
                </ul>
            </div>
        )
    }
}
