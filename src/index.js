import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyB9ES4SzaY7fyxyw5TzIXfD0Kbw73M2LcY";

class App extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return (<SearchBar />);
	}
}


ReactDOM.render(<App/>, document.querySelector(".container"));