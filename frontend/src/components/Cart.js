import React from 'react'
import { Card } from 'react-bootstrap'

export default function Cart({ children }) {
    return (
        <Card
            className="skillCard m-auto p-1 d-flex justify-content-center h-100 w-100"
            style={{
                boxShadow: "10px 10px 10px grey"
            }}>
            {children}
        </Card>
    )
}
