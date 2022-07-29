import React from 'react'

export default function PaymentItem(props) {
    return (
        <div className="item itemhistory">
            <div className="name">{props.name}</div>
            <div className="date">{props.date}</div>
            <div className="money">{props.money}</div>
        </div>
    )
}
