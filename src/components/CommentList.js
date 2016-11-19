/**
 * Список комментариев с кнопкой
 */
import React, { Component } from 'react'
import Comment from "./Comment"

class CommentList extends Component {

    constructor() {
        super();
        this.state = {
            isSelected: false
        }
    }

    render() {
        const { comments } = this.props;

        const hasComments = comments && comments.length > 0;
        const label = this.state.isSelected ? "Скрыть комментарии" : "Показать комментарии";
        const button = hasComments
            ? <button onClick = {this.onClick}>{label}</button>
            : null;

        const items = this.state.isSelected
            ? comments.map(comment => <Comment key = {comment.id} comment={comment} />)
            : null;

        return (
            <section>
                {button}
                {items}
            </section>
        )
    }

    onClick = ev => {
        this.setState({
            isSelected: !this.state.isSelected
        })
    }
}

export default CommentList