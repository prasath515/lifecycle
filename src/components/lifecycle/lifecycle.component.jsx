import React from 'react';

import './lifecycle.style.css'

class Lifecycles extends React.Component {

    constructor(props) {
        super(props);
        console.log('Constructor!');
    }

    componentDidMount() {
        console.log('componentDidMount!!');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate!!');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount!!');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        console.log(`nextProps -> ${nextProps.text} | current_prop -> ${this.props.text}`)
        return nextProps.text !== this.props.text;
    }

    render() {
        console.log('render!')
        return (

            <div className='lifecycle'>
                <h1>Lifecycle Component</h1>
                <h3>{this.props.text}</h3>
            </div>

        )
    }
}

export default Lifecycles;