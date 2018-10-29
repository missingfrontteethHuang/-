import React from 'react';
import ReactDOM from 'react-dom';

class Login extends React.Component {
    static defaultProps = {
        name: 'xxx'
    };

    constructor() {
        super();
        this.num = 100;
    }

    fn() {

    }

    render() {
        let {name} = this.props;

        return <h1>
            HELLO WORLD~~
            <br/>
            {name}
        </h1>;
    }
}

ReactDOM.render(<div>
    <Login name='珠峰'/>
</div>, window.root);