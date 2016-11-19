/**
 * Единичный комментарий
 */
import React, {Component} from 'react'

class Comment extends Component {

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