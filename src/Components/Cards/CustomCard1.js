import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';



const CustomCard1 = ({ cardTitle, cardStats, footNote, cardIcon }) => {
    return (
        <>
            <Card className='rounded-2xl border-none shadow-sm mt-3 max-h-36 max-w-sm'>
                <Row className='p-3 text-text_primary'>
                    <Col className='col-md-12'>
                        <p className='text-xs md:text-md lg:text-xl xl:text-2xl'>{cardTitle}</p>
                    </Col>

                    <Col className='col-md-6'>
                        <div className='pt-2 md:flex lg:lex xl:flex justify-between'>
                            <p className='text-4xl'>{cardStats}</p>
                        </div>
                    </Col>

                    <Col className='col-md-6'>
                        <div className='pt-2 flex'>
                            {cardIcon}
                        </div>
                    </Col>

                    <Col className='col-md-12'>
                        <div className='pt-2.5'>
                            <p className='text-sm md:text-sm lg:text-md xl:text-lg text-secondary_green'>{footNote}</p>
                        </div>
                    </Col>
                </Row>
            </Card>
        </>
    )
}

export default CustomCard1