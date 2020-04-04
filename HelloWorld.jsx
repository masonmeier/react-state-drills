import React from "react";

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            who: 'world'
        };

        this.handleButtonClick = this.handleButtonClick.bind(this);

        // const anObject = {
        //     property: 'foobar'
        // };
        //
        // console.log(anObject) // { property: 'foobar' }
        // console.log(anObject.property) // 'foobar'
    }

    handleButtonClick(e) {
        const button = e.target;

        switch(button.id)  {
            case 'friend':
                this.setState({ who: 'Friend'});
                break;
            case 'world':
                this.setState({ who: 'World'});
                break;
            case 'react':
                this.setState({ who: 'React'});
                break;
            default:
                return;
        }
    }

    render() {
        return (
            <div>
                <p> Hello { this.state.who }</p>
                <button id={'friend'} onClick={this.handleButtonClick}>Friend</button>
                <button id={'world'} onClick={this.handleButtonClick}>World</button>
                <button id={'react'} onClick={this.handleButtonClick}>React</button>
            </div>
        );
    }
}

export default HelloWorld;