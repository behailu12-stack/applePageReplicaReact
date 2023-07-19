import React, { useEffect, useState } from "react";
import "./YoutubeVideos.css";

const YoutubeVideos = () => {
  const [youTubeVideos, setYouTubeVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBSe9p120v-d8tYLYm2ok5BCru410WuoWE&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=8`
        );
        if (response.ok) {
          const data = await response.json();
          const videos = data.items;
          setYouTubeVideos(videos);
        } else {
          throw new Error("Failed to fetch YouTube videos");
        }
      } catch (error) {
        console.log("Error fetching YouTube videos:", error);
      }
    };

    fetchVideos();
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="youtube-videos-wrapper">
      <div className="container">
        <h2 className="latest-videos-heading text-center">Latest Videos</h2>
        <div className="row">
          {youTubeVideos.map((video, index) => (
            <div className="col-3" key={video.id.videoId}>
              <div className="video-card">
                <a
                  href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="video-link"
                >
                  <img
                    src={video.snippet.thumbnails.high.url}
                    alt={video.snippet.title}
                    className="video-thumbnail"
                  />
                </a>
                <div className="video-title">
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="video-link"
                  >
                    {truncateText(video.snippet.title, 50)}
                  </a>
                </div>
                <div className="video-description">
                  <p className="description-text">
                    {truncateText(video.snippet.description, 80)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YoutubeVideos;
