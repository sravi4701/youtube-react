import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';

const API_KEY = "AIzaSyB9ES4SzaY7fyxyw5TzIXfD0Kbw73M2LcY";

class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			selectedVideo: null,
			videos: []
		}

		this.videoSearch("motivation");

	}

	videoSearch (term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo:videos[0] 
			});
		});
	}

	render() {
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch}/>
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
				onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
				videos={this.state.videos} />
			</div>
		);
	}
}


ReactDOM.render(<App/>, document.querySelector(".container"));