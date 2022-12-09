import React from 'react';
import { ProgressBar } from 'react-bootstrap';



const DefaultProgress1 = ({ title, progress, className }) => {
    return (

        <>
            <div className='w-full text-xl'>
                <p>{title}</p>
                <ProgressBar className={className} now={progress} />
            </div>
        </>

    )
}

export default DefaultProgress1