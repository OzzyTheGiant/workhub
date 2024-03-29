import React from "react";
import PropTypes from "prop-types";

const IconLink = props => {
	let selected = "";
	if (props.selected) selected = "selected";
	return (
		<li 
			onClick={props.iconClickHandler} 
			onDoubleClick={props.dblClickHandler} 
			data-id={props.id} className={selected + " " + props.fileType} 
			title={props.name}>
			<p>{props.name}</p>
			<span className="details">
				{props.view === "list-view" ? Object.keys(props.details).map((key, index) => <p key={index}>{props.details[key]}</p>) : null}
			</span>
		</li>
	);
};

IconLink.propTypes = {
	id:PropTypes.any.isRequired,
	details:PropTypes.object.isRequired,
	dblClickHandler:PropTypes.func.isRequired,
	fileType:PropTypes.string,
	name:PropTypes.string.isRequired,
	view:PropTypes.string.isRequired,
	iconClickHandler:PropTypes.func.isRequired,
	selected:PropTypes.bool.isRequired
};

export default IconLink;