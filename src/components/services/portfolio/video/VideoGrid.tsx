import React from 'react';
import VideoCard from './VideoCard';

const videos = [
  { id: "1042220416", title: "Brand Story" },
  { id: "1042220411", title: "Product Showcase" },
  { id: "1042220400", title: "Event Coverage" },
  { id: "1042220389", title: "Customer Testimonial" },
  { id: "1042220379", title: "Behind the Scenes" },
  { id: "1042097617", title: "Company Culture" }
];

export default function VideoGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {videos.map((video, index) => (
        <VideoCard
          key={video.id}
          {...video}
          index={index}
        />
      ))}
    </div>
  );
}