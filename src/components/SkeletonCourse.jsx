import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SkeletonLoading() {
    return (
        <div className="col-md-4 course">
            <div className="wrap">
                <Skeleton width={350} height={250} />
                <div className="info">
                    <h3 className="name">
                        <Skeleton />
                    </h3>
                    <p className="des">
                        <Skeleton count={3} />
                    </p>
                </div>
                <div className="bottom">
                    <div className="teacher">
                        <Skeleton width={150} height={50} />
                    </div>
                    <div className="register-btn"><Skeleton width={100} height={50} /></div>
                </div>
            </div>
        </div>
    )
}
