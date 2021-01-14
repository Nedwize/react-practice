import React from 'react';

const CommentDetail = (props) => {
    return (
        <div className="comment">
            <a className="avatar">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Avatar" />
            </a>
            <div className="content">
                <a className="author" href="/">{props.author}</a>
                <div className="metadata">
                    <span className="date">Today at 5:42PM</span>
                </div>
                <div className="text">
                    How artistic!
                </div>
                <div className="actions">
                    <a className="reply" href="/">Reply</a>
                </div>
            </div>
        </div>
    )
}

export default CommentDetail;