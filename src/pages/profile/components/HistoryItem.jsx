import React from 'react'

export default function HistoryItem(props) {
    return (
        <div className="itemhistory">
            <div className="td"><strong>{props.coinCount}</strong></div>
            <div className="td"><strong>{props.date}</strong></div>
            <div className="td"><strong>{props.content}</strong></div>
            <div className="td"><strong>{props.status}</strong></div>
        </div>
    )
}
