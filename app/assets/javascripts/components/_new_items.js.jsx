var NewItem= React.createClass({ 
	handleClick() { 
		var name = $("#name").val(); //this.refs.name.value; 
		var description = $("#description").val(); //this.refs.description.value; 
		$.ajax({ 
			url: '/api/v1/items', 
			type: 'POST', 
			data: { item: { name: name, description: description } }, 
			success: (item) => { 
				console.log('it worked!', item);
				this.props.handleSubmit(item);
			} 
		}); 
	}, 

	handleSubmit(item) { 
		var newState = this.props.items.concat(item); 
		this.setState({ items: newState }) 
	},

	render() { 
		return ( 
			<div> 
				<input id='name' placeholder='Enter the name of the item' /> 
				<input id='description' placeholder='Enter a description' /> 
				<button onClick={this.handleClick}>Submit</button> 
			</div> 
		) 
	} 
})
