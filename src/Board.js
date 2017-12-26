import React from 'react';

import QnAItem from './QnAItem';
import Question from './Question';


class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openQuestion: false,
            currentQuestion: null,
            currentAnswer: null
        };
        this.handleOpenQuestion = this.handleOpenQuestion.bind(this);
    }

    handleOpenQuestion(status, question, answer, title) {
        this.setState({
            openQuestion: status,
            currentQuestion: question,
            currentAnswer: answer,
            currentTitle: title
        });
    }


    render() {

        const categories =  window.appData.map((category) => {
            const questions =  category.questions.map((qn) => {
                 return (<QnAItem  value={qn.value} openQuestion={this.handleOpenQuestion}
                                    question={qn.question} answer={qn.answer} title={qn.title}
                    />);
            });

             return (<div className="row">
                        <div className="category col-lg-3">{category.name}</div>
                        {questions}
                    </div>);

        });

        return (
            <div className="container">

                <Question status={this.state.openQuestion} openQuestion={this.handleOpenQuestion}
                        question={this.state.currentQuestion} answer={this.state.currentAnswer}
                        title={this.state.currentTitle}/>

                {categories}
             </div>
        );
    }
}

export default Board;