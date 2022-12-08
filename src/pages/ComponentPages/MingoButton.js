import React from 'react';
import { PrimaryButton } from '../../Components/Buttons/Buttons';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';
import { CopyCode } from '../../functions/CopyCode';

const MingoButton = () => {
    return (
        <>
            <div className='container mt-2 mb-2'>

                <div>
                    <Link to='/components'>
                        <ArrowLeftIcon className='w-5 h-5' /> Back
                    </Link>
                </div>

                <p className='text-4xl font-bold mb-2'>Mingo Buttons</p>

                <hr />

                <p className='font-semibold text-2xl mt-2'>Documentation</p>
                <p>
                    For the code below to work you will have to move the component folder into your project src folder. <br />
                    This component was styled using tailwind. You can alter the codes in the "className" property for customization. You can
                    also assign your own "className" of "id" if you want to write custom css. <br />
                    NB: To use inline css kindly use the sx property. Example: {`sx={{color: "red"}}`}
                </p>

                <div className='card mt-3'>
                    <div className='card-body'>
                        <div>
                            <p className='font-semibold text-2xl'>Normal</p>
                            <div className='flex justify-between mb-2'>
                                <div className='mt-2 mb-2 flex gap-5'>
                                    <PrimaryButton btnName='Fill Rounded' className='bg-default_blue text-default_white px-3 py-1 text-md rounded-full w-auto' onClick={() => alert('You Clicked')} />
                                    <PrimaryButton btnName='Outline Rounded' className='text-default_blue px-3 py-1 text-md outline outline-1 outline-default_blue rounded-full w-auto hover:bg-default_blue hover:text-default_white hover:outline-none' onClick={() => alert('You Clicked')} />
                                </div>

                                <div className='mt-2'>
                                    <button className='text-lg' onClick={() => CopyCode('btnCode1')}>
                                        <ClipboardDocumentListIcon className='w-6 h-6' />
                                    </button>
                                </div>
                            </div>

                            <pre>
                                {`<!-- Fill Rounded -->`}
                                <code id='btnCode1'>
                                    {`    
    <PrimaryButton 
        btnName='Primary Rounded' 
        className='bg-default_blue text-default_white px-3 py-1 text-lg rounded-full w-auto' 
        onClick={() => alert('You Clicked')} 
    />`}
                                </code>
                            </pre> <br />

                            <pre>
                                <code>
                                    {`<!-- Outline Rounded -->`}
                                    {`    
    <PrimaryButton 
        btnName='Primary Rounded' 
        className='text-default_blue px-3 py-1 text-md outline outline-1 outline-default_blue rounded-full w-auto' 
        onClick={() => alert('You Clicked')} 
    />`}
                                </code>
                            </pre>
                        </div>

                        <div className='mt-3'>
                            <p className='font-semibold text-2xl'>Sizes</p>
                            <div className='flex justify-between mb-2'>
                                <div className='mt-2 mb-2 flex gap-5'>
                                    <PrimaryButton btnName='Extra Large' className='bg-default_blue text-default_white px-3 py-1 text-xl rounded-full w-auto' onClick={() => alert('You Clicked')} />
                                    <PrimaryButton btnName='Large' className='bg-default_blue text-default_white px-3 py-1 text-lg rounded-full w-auto' onClick={() => alert('You Clicked')} />
                                    <PrimaryButton btnName='Medium' className='bg-default_blue text-default_white px-3 py-1 text-md rounded-full w-auto' onClick={() => alert('You Clicked')} />
                                    <PrimaryButton btnName='Small' className='bg-default_blue text-default_white px-3 py-1 text-sm rounded-full w-auto' onClick={() => alert('You Clicked')} />
                                </div>

                                <div className='mt-2'>
                                    <button className='text-lg' onClick={() => CopyCode('btnCode2')}>
                                        <ClipboardDocumentListIcon className='w-6 h-6' />
                                    </button>
                                </div>
                            </div>



                            <pre>
                                {`<!-- Change text-xl to text-lg or text-md for various sizes -->`}
                                <code id='btnCode2'>
                                    {`    
    <PrimaryButton 
        btnName='Primary Rounded' 
        className='bg-default_blue text-default_white px-3 py-1 text-xl rounded-full w-auto' 
        onClick={() => alert('You Clicked')} 
    />`}
                                </code>
                            </pre> <br />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MingoButton