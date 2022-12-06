import React from 'react';
import ProSideBar from '../Home/ProSideBar';
import { SquaresPlusIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';



const CompoIndex = () => {
    return (
        <>

            <div style={{ display: "flex", height: '100%' }}>
                <ProSideBar compoActive='active' />


                <main className='w-full overflow-x-hidden'>

                    <div className='mt-2 container'>

                        <h2 className='text-2xl font-bold text-text_primary'>Components</h2>
                        <p className='mt-2 mb-2'>
                            Over 500+ professionally designed, fully responsive, expertly crafted component examples you
                            can drop into your Tailwind projects and customize to your heart’s content.
                        </p>

                        <hr />

                        <div className='row mt-3'>
                            <div className='col-md-4'>
                                <p className='text-lg font-semibold'>1. Buttons</p>
                            </div>
                            <div className='col-md-8'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <Link to="/mingobtn">
                                            <div className='card rounded-md shadow-sm border-0'>
                                                <div className='card-body'>
                                                    <div className='text-center'>
                                                        <SquaresPlusIcon className='w-8 h-8 flex mr-auto ml-auto' />

                                                        <p className='text-lg mt-2'>Mingo Button</p>
                                                        <p className='text-xs text-default_grey'>6 Components</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </main>

            </div>

        </>
    )
}

export default CompoIndex