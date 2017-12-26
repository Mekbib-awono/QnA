import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
            value: null,
        };
    }

    render() {
        return (
            <div className="col-xs-12 col-md-12 col-lg-12 category" >
                {this.props.value}
            </div>
        );
    }
}

export default Header;