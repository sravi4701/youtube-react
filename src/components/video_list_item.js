import React from 'react';


let VideoListItem = function ({video, onVideoSelect}) {
	let imageUrl = video.snippet.thumbnails.default.url;
	let title = video.snippet.title;

	return (
		<li className="list-group-item" onClick={()=>onVideoSelect(video)}>
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} alt={title}/>
				</div>

				<div className="media-body">
					<div className="media-heading">{title}</div>
				</div>
			</div>
		</li>
	);
}

export default VideoListItem;