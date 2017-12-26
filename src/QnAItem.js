import React from 'react';


class QnAItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visited: false,
        };
    }

    handleClick() {
        this.setState({visited: !this.state.visited});
        if (!this.state.visited) {
            this.props.openQuestion(true, this.props.question, this.props.answer, this.props.title)
        }
    }

    render() {
        return (
            <div className={`col-xs-2 col-md-2 col-lg-2 qna-item  ${this.state.visited ? 'visited' : ''}`}
                onClick={() => this.handleClick()}>
                    {this.props.value}
            </div>
        );
    }
}

export default QnAItem;