import React from 'react'
import PaymentItem from './PaymentItem'

export default function HistoryPayment() {
    return (
        <div className="tab4" style={{ display: 'block' }}>
            <PaymentItem name="Khóa học CFD1-offline" date="18/10/2020" money="1.500.000 VND" />
            <PaymentItem name="Khóa học CFD1-offline" date="18/10/2020" money="1.500.000 VND" />
            <PaymentItem name="Khóa học CFD1-offline" date="18/10/2020" money="1.500.000 VND" />
        </div>
    )
}
