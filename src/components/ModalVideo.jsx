import React from 'react'
import reactDOM from 'react-dom'

export default function ModalVideo() {
    return (
        reactDOM.createPortal(
            <div className="popup-video" style={{ display: 'none' }}>
                <div className="wrap">
                    <div className="video-src" />
                </div>
                <div className="close" />
            </div>,
            document.getElementById('modal-root')
        )
    )
}
