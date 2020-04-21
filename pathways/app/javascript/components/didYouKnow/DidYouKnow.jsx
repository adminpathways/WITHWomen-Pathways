import React from 'react';
import DYKContent from '../appContent/DoYouKnow';
import AccordionContent from '../AccordionContent';

const DidYouKnow = () =>
    <div>
        <div className='text-center'>
            <h1>Did You Know</h1>
        </div>
        <AccordionContent content={DYKContent} showNumbers/>
    </div>;

export default DidYouKnow;