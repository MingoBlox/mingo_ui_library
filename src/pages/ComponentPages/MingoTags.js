import React from 'react';
import { ArrowLeftIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { CopyCode } from '../../functions/CopyCode';
import { DefaultTag } from '../../Components/Tags/DefaultTag';

const MingoTags = () => {
    return (
        <>
            <div className='container mt-2 mb-2'>

                <div>
                    <Link to='/components'>
                        <ArrowLeftIcon className='w-5 h-5' /> Back
                    </Link>
                </div>

                <p className='text-4xl font-bold mb-2'>Mingo Status Tags</p>

                <hr />

                <p className='font-semibold text-2xl mt-2'>Documentation</p>
                <p>
                    For the code below to work you will have to move the component folder into your project src folder. <br />
                    This component was styled using tailwind. The status tag component can be called using the code below.
                    The component takes in properties such as "className" for tailwind styling and other purporses, "tagName" for
                    the name of the tag, "id" for css styling and the "sx" property for inline stlying. Example: {`sx={{color: "red"}}`}
                </p>

                <div className='card mt-3'>
                    <div className='card-body'>
                        <div>
                            <p className='font-semibold text-2xl'>Example</p>

                            <div className='mt-2 flex justify-between'>
                                <div className='flex gap-5'>
                                    <DefaultTag
                                        className='rounded-full text-secondary_green bg-secondary_green py-2 px-3 w-auto bg-opacity-20'
                                        tagName='Default Tag 1'
                                    />

                                    <DefaultTag
                                        className='rounded-full text-secondary_red bg-secondary_red py-2 px-3 w-auto bg-opacity-20'
                                        tagName='Default Tag 2'
                                    />
                                </div>

                                <div className='mt-2'>
                                    <button className='text-lg' onClick={() => CopyCode('tagCode')}>
                                        <ClipboardDocumentListIcon className='w-6 h-6' />
                                    </button>
                                </div>
                            </div> <br />

                            <pre>
                                {`<!-- Code -->`}
                                <code id='tagCode'>
                                    {`    
    <DefaultTag
        className='rounded-full text-secondary_green bg-secondary_green py-2 px-3 w-auto bg-opacity-20'
        tagName='Default Tag 1'
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

export default MingoTags