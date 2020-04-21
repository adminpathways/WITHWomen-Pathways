import React from 'react';
import {contactUs} from '../services/contact';
import $ from 'jquery';
import {notify} from 'react-notify-toast';

const ContactForm = () => <form
    className='margin-top-2'
    id='contactForm'
    onSubmit={event => {
        event.preventDefault();
        const elements = event.target.elements;
        const name = elements.name.value;
        const email = elements.email.value;
        const subject = elements.subject.value;
        const message = elements.message.value;
        contactUs({name, email, subject, message});
        $('#contactForm')[0].reset();
        notify.show('Email sent. We will reply to you shortly.', 'success');
    }}>
    <div className='grid-y'>
        <div className='grid-x align-justify'>
            <input
                className='cell small-5'
                id='name'
                name='name'
                placeholder='Name'
                required
                type='text'
            />
            <input
                className='cell small-5'
                id='email'
                name='email'
                placeholder='Email'
                required
                type='email'
            />
        </div>
        <div className='grid-x'>
            <input
                className='cell'
                id='subject'
                name='subject'
                placeholder='Subject'
                required
                type='text'
            />
        </div>
        <div className='grid-x'>
            <textarea
                data-validate='true'
                id='message'
                name='message'
                placeholder='Message'
                required
                rows='5'
            />
        </div>
        <div className='grid-x align-center-middle margin-top-2'>
            <div className='cell large-5 small-10'>
                <button
                    className='expanded button primary shadow'
                    type='submit'
                >
                    Submit
                </button>
            </div>
        </div>
    </div>
</form>;

export default ContactForm;