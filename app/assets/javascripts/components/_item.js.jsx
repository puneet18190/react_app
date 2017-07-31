var Item = React.createClass({ 

	getInitialState() {
        return {editable: false}
    },

	handleEdit() {
        console.log('edit button clicked');
        if(this.state.editable) { 
        	var name = $("#edit_name").val(); //this.refs.name.value; 
        	var description = $("#edit_description").val(); //this.refs.description.value; 
        	var id = this.props.item.id;
        	console.log('in handleEdit', this.state.editable, name, description);
        	var item = {id: id , name: name , description: description}; 
        	this.props.handleUpdate(item);
        }
        this.setState({editable: !this.state.editable})
    },

	render() { 

		var name = this.state.editable ? <input type='text' defaultValue={this.props.item.name} id="edit_name"/> : <h3>{this.props.item.name}</h3>; 
		var description = this.state.editable ? <input type='text' defaultValue={this.props.item.description} id="edit_description"/>: <p>{this.props.item.description}</p>;
		
		return ( 
			<div> 
				{name}
				{description}
				<button onClick={this.props.handleDelete} >Delete</button> 
				<button onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit' } </button>
			</div>
		) 
	} 
});
