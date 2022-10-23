import React, { useEffect, useState } from 'react';
import { getQuestions } from '../services/questionService';
import QuestionCard from './questions/questionCard';

function Questions(props) {

    const [questions, setQuestions] = useState([])

    useEffect(() => {
        async function getData() {
            const result = await getQuestions()
            setQuestions(result.data)
        }
        getData();
    }, []);

    // console.log(questions)

    return (
        <div className="row col-10">
            {questions.map((question) => (
                <QuestionCard question={question} key={question.id} />
            ))}
        </div>
    );
};

export default Questions;