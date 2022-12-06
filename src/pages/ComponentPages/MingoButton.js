import React from 'react';
import { PrimaryButton } from '../../Components/Buttons/Buttons';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';

const MingoButton = () => {
    return (
        <>
            <div className='container mt-2 mb-2'>

                <div>
                    <Link to='/components'>
                        <ArrowLeftIcon className='w-5 h-5' /> Back
                    </Link>
                </div>

                <p className='text-4xl font-bold'>Mingo Buttons</p>
                <p className='mb-2 text-xl'>
                    Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
                </p>

                <hr />

                <p className='font-semibold text-2xl mt-2'>Examples</p>
                <p>
                    The button component is exported from {" src > components > Buttons > Buttons.js"}. Copy the code from the said file and import the componet using the code below.
                </p>

                <div className='card mt-3'>
                    <div className='card-body'>
                        <div className='flex justify-between mb-2'>
                            <div className='mt-2 mb-2'>
                                <PrimaryButton btnName='Primary Rounded' className='bg-default_blue text-default_white px-3 py-1 text-lg rounded-full w-auto' onClick={() => alert('You Clicked')} />
                            </div>

                            <div className='mt-2'>
                                <button className='text-lg'>
                                    <ClipboardDocumentListIcon className='w-6 h-6' />
                                </button>
                            </div>
                        </div>

                        <pre>
                            <code>
                                {`    <PrimaryButton 
        btnName='Primary Rounded' 
        className='bg-default_blue text-default_white px-3 py-1 text-lg rounded-full w-auto' 
        onClick={() => alert('You Clicked')} 
    />`}
                            </code>
                        </pre>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MingoButton