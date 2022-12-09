import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';
import { CopyCode } from '../../functions/CopyCode';
import CustomCard1 from '../../Components/Cards/CustomCard1';
import orders_list_icon from '../../Images/orders_list_icon.png';
import instructor_img from '../../Images/instructor_img.png';
import MessageCard from '../../Components/Cards/MessageCard';



const MingoCards = () => {
    return (
        <>
            <div className='container mt-2 mb-2'>

                <div>
                    <Link to='/components'>
                        <ArrowLeftIcon className='w-5 h-5' /> Back
                    </Link>
                </div>

                <p className='text-4xl font-bold mb-2'>Mingo Cards</p>

                <hr />

                <p className='font-semibold text-2xl mt-2'>Documentation</p>
                <p>
                    For the code below to work you will have to move the component folder into your project src folder. <br />
                    This component was styled using tailwind. The card component can be called using the code below.
                    The component takes in properties such as "cardTitle", "cardStats", "cardIcon" and "footNote". These properties can
                    take any value.
                </p>

                <div className='card mt-3'>
                    <div className='card-body'>
                        <div>
                            <p className='font-semibold text-2xl'>Example 1</p>

                            <div className='mt-2 flex justify-between'>
                                <div className='flex gap-5'>

                                    <CustomCard1
                                        cardTitle='Total Users'
                                        cardStats='200K'
                                        cardIcon={<img className='absolute right-4' src={orders_list_icon} alt="..." />}
                                        footNote={<span className='text-secondary_green'>8.3% &uarr;</span>}
                                    />

                                </div>

                                <div className='mt-2'>
                                    <button className='text-lg' onClick={() => CopyCode('cardCode1')}>
                                        <ClipboardDocumentListIcon className='w-6 h-6' />
                                    </button>
                                </div>
                            </div> <br />

                            <pre>
                                {`<!-- Code -->`}
                                <code id='cardCode1'>
                                    {`    
<CustomCard1
    cardTitle='Total Users'
    cardStats='200K'
    cardIcon={<img className='absolute right-4' src={orders_list_icon} alt="..." />}
    footNote={<span className='text-secondary_green'>8.3% &uarr;</span>}
/>`}
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
                                <div className='flex gap-5'>

                                    <MessageCard
                                        senderImage={<img className='img-fluid' src={instructor_img} alt='...' />}
                                        senderName='Mingoblox Ltd'
                                        senderIs='A Company'
                                        timeSent='2 days ago'
                                        messageTitle='Text Message'
                                        theMessage='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'
                                    />

                                </div>

                                <div className='mt-2'>
                                    <button className='text-lg' onClick={() => CopyCode('cardCode2')}>
                                        <ClipboardDocumentListIcon className='w-6 h-6' />
                                    </button>
                                </div>
                            </div> <br />

                            <pre>
                                {`<!-- Code -->`}
                                <code id='cardCode2'>
                                    {`    
<MessageCard
    senderImage={<img className='img-fluid' src={instructor_img} alt='...' />}
    senderName='Mingoblox Ltd'
    senderIs='A Company'
    timeSent='2 days ago'
    messageTitle='Text Message'
    theMessage='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
    voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'
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

export default MingoCards