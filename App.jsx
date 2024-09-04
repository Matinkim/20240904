import React, { useState } from "react";
import { galleryItems } from "./data";
import PhotoCard from "./PhotoCard";

function App() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoClick = (photo) => {
    console.log("확인", photo);
    setSelectedPhoto(photo);
  };

  return (
    <div>
      <p>
        {selectedPhoto ? selectedPhoto.description : "사진설명이 나오는 칸"}
      </p>
      <div className="photo-grid">
        {galleryItems.map((item) => (
          <PhotoCard
            key={item.id}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            dateTaken={item.dateTaken}
            location={item.location}
            tags={item.tags}
            isSelected={selectedPhoto && selectedPhoto.id === item.id}
            onClick={() => handlePhotoClick(item)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
