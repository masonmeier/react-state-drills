import React, { Component } from 'react';

class Accordion extends Component {
  static defaultProps = { sections: [] };

  constructor(props) {
    super(props);
    this.state = {
      section: ''
    }

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }


  handleButtonClick(e) {
    const button = e.target;

    switch (button.innerText) {
      case 'Section 1':
        this.setState({section: 'Section 1'});
        break;
      case 'Section 2':
        this.setState({section: 'Section 2'});
        break;
      case 'Section 3':
        this.setState({section: 'Section 3'});
        break;
      default:
        return;
    }
  }

  render() {
    const buttons = this.props.sections.map((sections, index) => (
      <li key = {index}>
        <button onClick={this.handleButtonClick}>
        {sections.title}
        </button>
        { sections.title === this.state.section && (
          <p>{sections.content}</p>
        )}
      </li>
    ));

    return <ul>{ buttons }</ul>;
  }
}

export default Accordion;

//The accordion component will accept sections as a prop
//The accordian will display none by default
//This is done by the component rendering an empty li by default
//When a button is clicked a section associated with that button is rendered
//This is done with a .map function on the the section array prop
//When a new button is clicked the previous display should unmount


//****constructor****
//The empty accordian component is generated

//****render****
//The 3 sections are defined in an array with title and content in each
//button on click handler uses the .map function to give
//The empty accordian component is rendered
//The buttons are rendered with ids

