import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PaginationComponent = () => {
    return (
        <>
            <Container>
                <nav className='fa-pull-right mt-4 mb-3' aria-label="Page navigation example" id="paginationDiv">
                    <ul className="inline-flex items-center -space-x-px text-3xs md:text-xs lg:text-sm xl:text-md">
                        <li>
                            <Link to="#" className="block py-1 px-1 mr-4 bg-outline_light hover:bg-default_blue text-default_white rounded-lg hover:text-default_white">
                                <span className="sr-only">Previous</span>
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                            </Link>
                        </li>
                        <li>
                            <p to="#" className="py-2 px-3 text-text_primary">1</p>
                        </li>
                        <li>
                            <p to="#" className="py-2 px-3 text-text_primary">2</p>
                        </li>
                        <li>
                            <p to="#" aria-current="page" className="py-1 px-2.5 text-text_primary bg-default_blue text-default_white rounded-lg">3</p>
                        </li>
                        <li>
                            <p to="#" className="py-2 px-3 text-text_primary">4</p>
                        </li>
                        ....
                        <li>
                            <p to="#" className="py-2 px-3 text-text_primary">30</p>
                        </li>
                        <li>
                            <Link to="#" className="block py-1 px-1 ml-4 bg-outline_light hover:bg-default_blue text-default_white rounded-lg hover:text-default_white">
                                <span className="sr-only">Next</span>
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </Container>
        </>
    )
}

export default PaginationComponent