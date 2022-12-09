import { ArrowLeftIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Link } from 'react-router-dom';
import DefaultProgress1 from '../../Components/ProgressBar/DefaultProgress1';
import { CopyCode } from '../../functions/CopyCode';



const ProgressBar = () => {
    return (
        <>
            <div className='container mt-2 mb-2'>

                <div>
                    <Link to='/components'>
                        <ArrowLeftIcon className='w-5 h-5' /> Back
                    </Link>
                </div>

                <p className='text-4xl font-bold mb-2'>Mingo Progress Bar</p>

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
                            <p className='font-semibold text-2xl'>Example 1</p>

                            <div className='mt-2 flex justify-between'>
                                <div className='flex gap-5'>

                                    <DefaultProgress1
                                        className='bg-outline_light h-0.5'
                                        progress={45}
                                        title='This is a default progress bar'
                                    />

                                </div>

                                <div className='mt-2'>
                                    <button className='text-lg' onClick={() => CopyCode('proCode1')}>
                                        <ClipboardDocumentListIcon className='w-6 h-6' />
                                    </button>
                                </div>
                            </div> <br />

                            <pre>
                                {`<!-- Code -->`}
                                <code id='proCode1'>
                                    {`    
<DefaultProgress1
    className='bg-outline_light h-0.5'
    progress={45}
    title='This is a default progress bar'
/>`}
                                </code>
                            </pre>
                        </div>


                    </div>


                </div>


            </div>
        </>
    )
}

export default ProgressBar