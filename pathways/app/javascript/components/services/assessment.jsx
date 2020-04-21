import axios from 'axios';

export const getScreenQuestions = () => axios.get('/questions').then(res => res.data);

/* eslint camelcase: ["error", {allow: ["question_id"]}] */
export const submitAnswer = (qId, text) => axios.post('/answers', {answer: {question_id: qId, text}});

export const submitMyConcerns = concerns => axios.post('/concerns', {concerns});