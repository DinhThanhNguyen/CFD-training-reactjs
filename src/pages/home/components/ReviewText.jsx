import React from 'react'

export default function ReviewItem(props) {
  return (
    <>
      <div className="info">
        <div className="name">
          <h4>{props.name}</h4>
        </div>
        <div className="quotes"><img src="img/quotes.svg" alt="" /></div>
      </div>
      <div className="content">
        {props.content}
      </div>
      <div className="bottom">
      </div>
    </>
  )
}
