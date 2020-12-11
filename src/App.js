import React from 'react';

import './App.css';

import Lifecycles from './components/lifecycle/lifecycle.component';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lifeLine: 39,
            toggleShow: true,
            text: ''
        };
        this.props = props;
    }

    // Simple Way of state define
    // state = { lifeLine: 39 };

    // Method 1 : using props form index.js

    handleClick = () => {
        this.setState((prevState, preProps) => {
            return { lifeLine: prevState.lifeLine + preProps.inc }
        }, () => { console.log(`CS ${this.state.lifeLine} || PS ${this.props.inc}`) })
    }

    // Method 2 : Normal way, call back used for sync update state 

    // handleClick = () => {
    //     this.setState((prevState, preProps) => {
    //         return { lifeLine: prevState.lifeLine + 1 }
    //     },() => {})
    // }


    render() {

        return (
            <div className='App'>
                <h1>{this.state.lifeLine}</h1>
                <button className='btn' onClick={this.handleClick} >
                    Update
            </button>
                <br />

                <button
                    onClick={() => this.setState(prevState => {
                        return { toggleShow: !prevState.toggleShow }
                    }, () => console.log(this.state.toggleShow))
                    }
                >
                    Toggle LifeCycles
            </button>

                <br />
                <button
                    onClick={() => this.setState(state => {
                        return { text: `${state.text}_hello` }
                    }, () => console.log(this.state.text)
                    )}
                >
                    Update Text
            </button>

                {this.state.toggleShow ? <Lifecycles text={this.state.text} /> : null}

            </div>

        );


    }

}

export default App;
