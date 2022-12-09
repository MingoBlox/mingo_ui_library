import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const MessageCard = ({ messageTitle, timeSent, theMessage, senderName, senderIs, senderImage }) => {
    return (
        <>
            <Card className='rounded-xl shadow-sm border-0 max-w-lg'>
                <Card.Body className='mb-3'>
                    <Row>
                        <Col sm={2}>
                            {senderImage}
                        </Col>
                        <Col sm={7} className='text-text_primary'>
                            <p className='text-lg'>{senderName}</p>
                            <p className='text-s opacity-70'>{senderIs}</p>
                        </Col>
                        <Col sm={3} className='text-text_primary'>
                            <p className='text-sm opacity-70'>{timeSent}</p>
                        </Col>
                    </Row>
                    <div className='text-text_primary mt-3 mb-3'>
                        <p className='text-lg'>{messageTitle}</p>
                        <p className='text-sm'>
                            {theMessage}
                        </p>
                        <div className='absolute right-4 mt-3'>
                            <Link className='text-default_blue' to="#">Reply</Link>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default MessageCard