import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';



export const CustomTab = (props) => {


    const [tabActive, setTabActive] = useState(0);


    //Tab names on modal
    const tabNames = [
        {
            name: "Tab 1",

        },
        {
            name: "Tab 2",

        },
        {
            name: "Tab 3",

        },
        {
            name: "Tab 4",

        }

    ]


    //Tab active
    const showActive = (i) => {
        if (i === tabActive) {
            return 'rounded-full pl-5 pr-5 pt-1 pb-1 shadow-3xl bg-default_blue text-default_white'
        } else {
            return 'bg-default_white rounded-full pl-5 pr-5 pt-1 pb-1 shadow-3xl hover:bg-default_blue hover:text-default_white'
        }
    }

    return (
        <>
            <Tabs>
                <TabList className='bottom-0 mb-3 flex gap-4'>
                    {
                        tabNames.map((item, index) =>
                        (
                            <Tab key={index} className='border-0 bg-transparent'><button key={index} onClick={setTabActive.bind(this, index)} className={showActive(index)}>{item.name}</button></Tab>
                        )
                        )
                    }
                </TabList>

                <TabPanel>{props.Tab1Content}</TabPanel>
                <TabPanel>{props.Tab2Content}</TabPanel>
                <TabPanel>{props.Tab3Content}</TabPanel>
                <TabPanel>{props.Tab4Content}</TabPanel>

            </Tabs>
        </>
    )
}
