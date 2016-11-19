/**
 * HT1: Реализовать список комментов к статье, который может отрываться/закрываться по клику на ссылку "открыть"/"закрыть"(текст ссылки тоже меняется)
 */
import React, { Component } from 'react'
import CommentList from './CommentList'

class CommentedArticle extends Component {

    constructor() {
        super();
        this.state = {
            isOpen: false
        }
    }

    render() {
        const { article } = this.props;
        const body = this.state.isOpen ?
            <section>
                <p>{article.text}</p>
                <CommentList comments={article.comments}/>
            </section>
         : null;

        return (
            <section>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {body}
            </section>
        )
    }

    handleClick = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default CommentedArticle