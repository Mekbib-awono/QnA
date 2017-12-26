import React from 'react';

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: true,
            showAnswer: false
        };
    }

    hideQuestion() {
        this.setState({
            status: false,
            showAnswer: false
        });
        this.props.openQuestion(false)
    }

    showAnswer() {
        this.setState({showAnswer: true})
    }

    render() {

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


                        {!this.state.showAnswer ?
                            <div dangerouslySetInnerHTML={ {__html: this.props.question} } />
                             :
                             <div dangerouslySetInnerHTML={ {__html: this.props.answer} } />
                        }

                        </div>
                        <div className="modal-footer">
                         {this.props.answer ?
                            <button type="button" className="btn btn-primary"
                                onClick={() => this.showAnswer()}>
                                Show Answer
                            </button> : <span></span>}
                            <button type="button" className="btn btn-secondary" data-dismiss="modal"
                                onClick={() => this.hideQuestion()}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Question;