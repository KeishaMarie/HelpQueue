import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import Question from './Question';
import EditTicketForm from './EditTicketForm';
import TicketDetail from './TicketDetail';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      selectedTicket: null,
      count: 0,
      mainTicketList: []
    };
  }

  handleClick = () => {
    if (this.state.count === 4 || this.state.selectedTicket != null){
      this.setState({
        count: 0, 
        selectedTicket: null, 
        editing: false});
    } else {
      this.setState(prevState => ({
        count: prevState.count + 1
      }));
    }
  }

  handleAddingNewTicketToList = (newTicket) => {
    const newMainTicketList = this.state.mainTicketList.concat(newTicket);
    this.setState({mainTicketList: newMainTicketList,
      count: 0});
  }

  handleEditClick = () => {
    console.log("bloop");
    this.setState({editing: true})
  }

  handleEditingTicketInList = (ticketToEdit) => {
    const editedMainTicketList = this.state.mainTicketList
      .filter(ticket => ticket.id !== this.state.selectedTicket.id)
      .concat(ticketToEdit);
    this.setState({
      mainTicketList: editedMainTicketList,
      editing: false,
      selectedTicket: null
    });
  }

  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.state.mainTicketList.filter(ticket => ticket.id === id) [0];
      this.setState({selectedTicket: selectedTicket});
  }

  handleDeleteingTicket = (id) => {
    const newMainTicketList = this.state.mainTicketList.filter(ticket => ticket.id != id);
    this.setState({
      mainTicketList: newMainTicketList,
      selectedTicket: null
    });
  }


  
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedTicket != null) {
      if (this.state.editing){
        currentlyVisibleState = <EditTicketForm ticket = {this.state.selectedTicket} onEditTicket = {this.handleEditingTicketInList} />
        buttonText = "Return to ticket list";
      } else {
        currentlyVisibleState =
        <TicketDetail
          ticket = {this.state.selectedTicket}
          onClickingDelete = {this.handleDeleteingTicket}
          onClickingEdit = {this.handleEditClick} />
        buttonText = "Return to ticket list";
      }
    } else {
      if (this.state.count === 1) {
        currentlyVisibleState = <Question questionNumber = {1} questionText = "Have you gone through all the steps on the Learn How to Program debugging lesson?" />;
        buttonText = "Yes";
      } else if (this.state.count === 2) {
        currentlyVisibleState = <Question questionNumber = {2} questionText = "Have you asked another pair for help?" />;
        buttonText = "Yes"; 
      } else if (this.state.count === 3) {
        currentlyVisibleState = <Question questionNumber = {3} questionText = "Have you spent 15 minutes going through through the problem documenting every step?"/>;
        buttonText = "Yes"; 
      } else if (this.state.count === 4) {
        currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList}/>
        buttonText= 'Return to ticket list';
      } else {
        currentlyVisibleState = <TicketList ticketList={this.state.mainTicketList} onTicketSelection={this.handleChangingSelectedTicket} />;
        buttonText = "Add Ticket";
      }
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