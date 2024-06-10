'use strict';

const c = React.createElement;

class LikeButtonNumber extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked number button' + this.props.commentID;
        }

        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like number button 1'
        );
    }
}

const domContainerNumber = document.querySelector('#number_button_container');
ReactDOM.render(c(LikeButtonNumber, { commentID: 1 }), domContainerNumber);
