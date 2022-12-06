import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Squares2X2Icon, Square3Stack3DIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.png';



const ProSideBar = (props) => {

    return (
        <>
            <Sidebar className='shadow-md   ' backgroundColor='#fff'>
                <Menu>
                    <MenuItem icon={<p className='outline outline-1 outline-default_blue py-1 px-2 rounded-sm text-sm text-default_blue'>UI</p>}>
                        <img className="ml-2" id="logo" src={logo} alt='...' />
                    </MenuItem>

                    <MenuItem className='text-outline_deep mt-2' routerLink={<Link to='#' />} id={props.dashActive} style={{ fontSize: "16px" }} icon={<BookOpenIcon className='h-6 w-6 pb-1' />} > Documentation</MenuItem>
                    <MenuItem className='text-outline_deep' routerLink={<Link to='/components' />} id={props.compoActive} style={{ fontSize: "16px" }} icon={<Square3Stack3DIcon className='h-6 w-6 pb-1' />} > Components</MenuItem>

                    <div className='mt-3 mb-3 container'><hr style={{ color: "#CCCCF8", height: "2px" }} /></div>

                    <MenuItem className='text-outline_deep' routerLink={<Link to='#' />} id={props.coursesActive} style={{ fontSize: "16px" }} icon={<Squares2X2Icon className='h-6 w-6 pb-1' />} > Resources</MenuItem>

                </Menu>
            </Sidebar>
        </>
    )
}

export default ProSideBar