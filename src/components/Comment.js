/**
 * Единичный комментарий
 */
import React, {Component} from 'react'

class Comment extends Component {
    //конструктор лишний, а вообще лучше переписать в виде функции
    constructor() {
        super();
    }

    render() {
        const { comment } = this.props;
        return (
        <p>
            <b>{comment.user}</b>: {comment.text}
        </p>);
    }
}

export default Comment
