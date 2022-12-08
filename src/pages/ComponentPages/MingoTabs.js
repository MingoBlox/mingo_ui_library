import { ArrowLeftIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Link } from 'react-router-dom';
import { CustomTab } from '../../Components/Tabs/CustomTab';
import { CustomTab2 } from '../../Components/Tabs/CustomTab2';
import { CopyCode } from '../../functions/CopyCode';




const MingoTabs = () => {
    return (
        <>
            <div className='container mt-2 mb-2'>

                <div>
                    <Link to='/components'>
                        <ArrowLeftIcon className='w-5 h-5' /> Back
                    </Link>
                </div>

                <p className='text-4xl font-bold mb-2'>Mingo Tabs</p>

                <hr />

                <p className='font-semibold text-2xl mt-2'>Documentation</p>
                <p>
                    For the code below to work you will have to move the component folder into your project src folder. <br />
                    This component was styled using tailwind. The Tabs are in an array which you can edit to suit your preference
                    however, the contents of the component is passed as a property after the component has been called. This is shown in the
                    example below:
                </p>

                <div className='card mt-3'>
                    <div className='card-body'>
                        <div>
                            <p className='font-semibold text-2xl'>Example</p>

                            <div className='mt-2 flex justify-between'>
                                <CustomTab
                                    Tab1Content={<div className='container'>Content 1</div>}
                                    Tab2Content={<div className='container'>Content 2</div>}
                                    Tab3Content={<div className='container'>Content 3</div>}
                                    Tab4Content={<div className='container'>Content 4</div>}
                                />

                                <div className='mt-2'>
                                    <button className='text-lg' onClick={() => CopyCode('tabCode')}>
                                        <ClipboardDocumentListIcon className='w-6 h-6' />
                                    </button>
                                </div>
                            </div>


                            <pre>
                                {`<!-- Code -->`}
                                <code id='tabCode'>
                                    {`    
    <CustomTab
        Tab1Content={<div className='container'>Content 1</div>}
        Tab2Content={<div className='container'>Content 2</div>}
        Tab3Content={<div className='container'>Content 3</div>}
        Tab4Content={<div className='container'>Content 4</div>}
    />`}
                                </code>
                            </pre>

                        </div>
                    </div>
                </div>


                <div className='card mt-3'>
                    <div className='card-body'>
                        <div>
                            <p className='font-semibold text-2xl'>Example2</p>

                            <div className='mt-2 flex justify-between'>
                                <CustomTab2
                                    Tab1Content={<div className='container'>Content 1</div>}
                                    Tab2Content={<div className='container'>Content 2</div>}
                                    Tab3Content={<div className='container'>Content 3</div>}
                                    Tab4Content={<div className='container'>Content 4</div>}
                                />

                                <div className='mt-2'>
                                    <button className='text-lg' onClick={() => CopyCode('tabCode2')}>
                                        <ClipboardDocumentListIcon className='w-6 h-6' />
                                    </button>
                                </div>
                            </div>


                            <pre>
                                {`<!-- Code -->`}
                                <code id='tabCode2'>
                                    {`    
    <CustomTab2
        Tab1Content={<div className='container'>Content 1</div>}
        Tab2Content={<div className='container'>Content 2</div>}
        Tab3Content={<div className='container'>Content 3</div>}
        Tab4Content={<div className='container'>Content 4</div>}
    />`}
                                </code>
                            </pre>

                        </div>
                    </div>
                </div>


                <p className='mt-3'>
                    NB: You can create your tab contents as individual components and pass them as the value of the props in ordeer to split your code into chunks.
                </p>

            </div>
        </>
    )
}

export default MingoTabs