import React from 'react';
import questions from '../../data/cafe/questions';

const CafeQuestionsList = () => {
    return (
      <div>
        {questions.map((question, index) => (
          <div key={index} className="p-4 border-b">
            <p className="text-md font-semibold my-1">{question.query}</p>
            {question.short_answer && (
              <p className={"text-md text-gray-600 italic py-2"}>
                {question.short_answer}
              </p>
            )}
            <p className={"text-md text-gray-600 italic"}>{question.answer}</p>
          </div>
        ))}
      </div>
    );
}

export default CafeQuestionsList;
