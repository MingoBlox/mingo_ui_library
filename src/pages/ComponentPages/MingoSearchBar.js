import { ArrowLeftIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Link } from 'react-router-dom'
import { MingoSearch } from '../../Components/SearchBars/MingoSearch'
import { MingoSearch2 } from '../../Components/SearchBars/MingoSearch2'
import { CopyCode } from '../../functions/CopyCode'

const MingoSearchBar = () => {
    return (
        <>
            <div className='container mt-2'>

                <div>
                    <Link to='/components'>
                        <ArrowLeftIcon className='w-5 h-5' /> Back
                    </Link>
                </div>

                <p className='text-4xl font-bold mb-2'>Mingo Search Bar</p>

                <hr />

                <p className='font-semibold text-2xl mt-2'>Documentation</p>
                <p>
                    For the code below to work you will have to move the component folder into your project src folder. <br />
                    This component was styled using tailwind.
                    The component takes in properties such as "className" for tailwind styling and other purporses, "tagName" for
                    the name of the tag, "id" for css styling and the "sx" property for inline stlying. Example: {`sx={{color: "red"}}`}
                </p>

                <div className='card mt-3'>
                    <div className='card-body'>
                        <div>
                            <p className='font-semibold text-2xl'>Example 1</p>

                            <div className='mt-2 flex justify-between'>
                                <MingoSearch />

                                <div className='mt-2'>
                                    <button className='text-lg' onClick={() => CopyCode('searchCode1')}>
                                        <ClipboardDocumentListIcon className='w-6 h-6' />
                                    </button>
                                </div>
                            </div> <br />

                            <pre>
                                {`<!-- Code -->`}
                                <code id='searchCode1'>
                                    {`    
<div className="relative">
    <input type="text" className="h-8 w-80 pr-8 pl-5 rounded-full outline outline-1 outline-outline_light placeholder-outline_deep" placeholder="Search..." />

    <div className="absolute top-1.5 right-5">
        <MagnifyingGlassIcon className="text-outline_deep z-20 w-5 h-5" />
    </div>
</div>`}
                                </code>
                            </pre>

                        </div>

                    </div>
                </div>


                <div className='card mt-3'>
                    <div className='card-body'>
                        <div>
                            <p className='font-semibold text-2xl'>Example 2</p>

                            <div className='mt-2 flex justify-between'>
                                <MingoSearch2 />

                                <div className='mt-2'>
                                    <button className='text-lg' onClick={() => CopyCode('searchCode2')}>
                                        <ClipboardDocumentListIcon className='w-6 h-6' />
                                    </button>
                                </div>
                            </div> <br />

                            <pre>
                                {`<!-- Code -->`}
                                <code id='searchCode2'>
                                    {`    
<div className="relative">
    <input type="search" id="search_form" className="h-8 w-80 pr-8 pl-5 rounded-full outline outline-1 outline-outline_light placeholder-outline_deep" placeholder='Search...' />
    <div className="absolute top-0 m-1 right-0">
        <button type="button" className="bg-outline_deep rounded-full py-1 px-3">
            <MagnifyingGlassIcon className="text-default_white z-20 w-5 h-4" />
        </button>
    </div>
</div>`}
                                </code>
                            </pre>

                        </div>

                    </div>
                </div>

            </div>
            <br />
        </>
    )
}

export default MingoSearchBar