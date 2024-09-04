import React, { useState } from "react";
import { galleryItems } from "./data";
import PhotoCard from "./PhotoCard2";

function App() {
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <div>
      <p>{activePhoto ? activePhoto.description : "사진설명이 나오는 칸"}</p>
      <div className="photo-grid">
        {galleryItems.map((item) => (
          <PhotoCard
            key={item.id}
            item={item}
            onClick={setActivePhoto}
            isActive={activePhoto?.id === item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
