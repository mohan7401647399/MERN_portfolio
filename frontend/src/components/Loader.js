import React from 'react'
import { FidgetSpinner } from 'react-loader-spinner'

const Loader = () => {
    return (
        <>
            <FidgetSpinner
                visible={true}
                height="80"
                width="80"
                ariaLabel="fidget-spinner-loading"
                wrapperStyle={{}}
                wrapperClass="fidget-spinner-wrapper"
            />
        </>
    )
}

export default Loader
