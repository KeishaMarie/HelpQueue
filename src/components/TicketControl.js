import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import Question from './Question';
class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      count: 0
    };
  }

  handleClick = () => {
    this.setState({count: this.state.count + 1})
    if (this.state.count + 1 >= 3) {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage}));
    }
  }
  
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.count === 0) {
      currentlyVisibleState = <Question questionNumber = {1} questionText = "Have you gone through all the steps on the Learn How to Program debugging lesson?" />;
      buttonText = "Yes";
    } else if (this.state.count === 1) {
      currentlyVisibleState = <Question questionNumber = {2} questionText = "Have you asked another pair for help?" />;
      buttonText = "Yes"; 
    } else if (this.state.count === 2) {
      currentlyVisibleState = <Question questionNumber = {3} questionText = "Have you spent 15 minutes going through through the problem documenting every step?"/>;
      buttonText = "Yes"; 
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <TicketList/>;
      buttonText = "Add Ticket"; 
    } else {
      currentlyVisibleState = <NewTicketForm />
      buttonText= 'Return to ticket list';
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default TicketControl;