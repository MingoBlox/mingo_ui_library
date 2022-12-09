import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.png';

const Home = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg text-dark bg-white px-0 py-3">
                <div className="container-xl">
                    <Link className="navbar-brand" to="#">
                        <img src={logo} alt="..." />
                    </Link>
                    <p className='outline outline-1 outline-default_blue py-1 px-2 rounded-sm text-sm text-default_blue'>UI</p>
                </div>
            </nav>


            {/* Body */} <br />
            <div className='container mt-4'>
                <div className='text-center'>
                    <p className='font-bold text-6xl'>
                        Rapidly build modern websites <br /> without ever leaving your HTML.
                    </p>

                    <p className='text-default_grey mt-4 text-lg'>
                        A utility-first CSS framework packed with classes like flex, pt-4, text-center and <br />
                        rotate-90 that can be composed to build any design, directly in your markup.
                    </p>
                    <br />

                    <div className='mt-4'>
                        {/* <input className='outline outline-1 outline-default_blue h-10 w-80 rounded-full px-3' placeholder='Quick Search...' /> */}
                        <div className="absolute left-0 right-0">
                            <input type="search" id="search_form" className="h-10 w-80 pr-8 pl-5 rounded-full outline outline-1 outline-outline_light placeholder-outline_deep" placeholder='Search...' autoFocus />
                            <div className="relative ml-64 bottom-8">
                                <button type="button" className="bg-outline_deep rounded-full py-1 px-3">
                                    <MagnifyingGlassIcon className="text-default_white z-20 w-5 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <br /> <br />

                    <div className='mt-4'>
                        <Link className='bg-outline_deep text-default_white py-1 px-5 rounded-full text-xl hover:bg-hover_blue hover:text-default_white' to="/introduction">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home