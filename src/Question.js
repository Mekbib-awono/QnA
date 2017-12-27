import React from 'react';

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: true,
            showAnswer: false,
            paging: 0, //for multiple choice questions
            currentQn: null,
        };
    }

    hideQuestion() {
        this.setState({
            status: false,
            showAnswer: false,
            paging: 0,
            currentQn: null,
        });
        this.props.openQuestion(false)
    }

    showAnswer() {
        this.setState({showAnswer: true})
    }

    // for mutliple questions
    nextQuestion() {
         // use states or sth not window variable
        let question = this.props.question[window.mqPaging]
        window.mqPaging = window.mqPaging + 1;
        // let el = this.refs.mq; //document.getElementById('multipleQn');
        // if (el) {
        //     el.innerHTML = question;
        // }
        // this.mq.innerHTML = question;
        // alert("mqp " + question)
        this.setState({currentQn: question})
        if (!question) {
            this.hideQuestion();
        }
    }

    render() {
        //first run
        if (Array.isArray(this.props.question) && !this.state.currentQn){
            //alert("render.. " + this.state.currentQn)
            window.mqPaging = 1;
            this.state.currentQn = this.props.question[0]
        }

        return (
            <div className={`modal ${this.props.status ? 'active' : ''}`}
                tabindex="-1" role="dialog" >
                <div className={`background ${this.props.status ? 'active' : ''}`}/>
                <div className="modal-dialog question-box col-lg-8" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{this.props.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" onClick={() => this.hideQuestion()}>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                        {!this.props.multiple ?
                            !this.state.showAnswer ?
                                <div dangerouslySetInnerHTML={ {__html: this.props.question} } />
                                 :
                                 <div dangerouslySetInnerHTML={ {__html: this.props.answer} } />
                             :
                            <div>
                                <div id="multipleQn"  ref="mq"  dangerouslySetInnerHTML={ {__html: this.state.currentQn} } />
                                <div className="btn btn-success" onClick={() => this.nextQuestion()}>Next</div>
                            </div>
                        }

                        </div>

                        <div className="modal-footer">
                         {this.props.answer && !this.props.multiple?
                            <button type="button" className="btn btn-primary"
                                onClick={() => this.showAnswer()}>
                                Show Answer
                            </button> : <span></span>}
                            {!this.props.multiple?
                            <button type="button" className="btn btn-secondary" data-dismiss="modal"
                                onClick={() => this.hideQuestion()}>
                                Close
                            </button>:<span></span>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Question;