import React from 'react'
import { ColorRing } from 'react-loader-spinner'
import { Html } from "@react-three/drei"

const Loader = () => {
    return (
        <Html>
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </Html>
    )
}

export default Loader