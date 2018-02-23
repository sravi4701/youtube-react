import React from 'react';

import VideoListItem from './video_list_item';

let VideoList = function({videos, onVideoSelect}){
	return (
		<ul className="col-md-4 list-group">
			{
				videos.map((video, index) => {
					return <VideoListItem 
					key={video.etag} 
					video={video} 
					onVideoSelect={onVideoSelect}/>
				})
			}
		</ul>
	)
}


export default VideoList;