import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditTicketForm(props){
	const { ticket } = props;

	function handleEditFormSubmission(event){
		event.preventDefault();
		props.onEditTicket({
			names: event.target.names.value,
			location: event.target.location.value,
			issue: event.target.issue.value,
			id: ticket.id
		});
	}
	return(
		<React.Fragment>
			<ReusableForm
				formSubmissionHandler={handleEditFormSubmission}
				buttonText="Update Ticket" />
		</React.Fragment>
	)

};

EditTicketForm.propTypes = {
	ticket: PropTypes.object,
	onEditTicket: PropTypes.func
};

export default EditTicketForm;