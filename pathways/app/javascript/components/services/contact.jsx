import axios from 'axios';

export const contactUs = contact => axios.post('/contact', {contact});