import React from 'react'
import address from '../data/address';

const ResumeAddress = () => {
    return (
        <div>
            {address.map((address, index) => (
                <div key={index} className="text-sm text-gray-600">
                    <div>{address.street}</div>
                    <div>{address.city}, {address.state} {address.zip}</div>
                    <div>{address.phone}</div>
                    <div>{address.email}</div>
                    <div>{address.website}</div>
                </div>
            ))}
        </div>
    )
}
export default ResumeAddress
