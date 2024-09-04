import React, { useState } from "react";
import { galleryItems } from "./data";

function PhotoCard3({
  title,
  dateTaken,
  location,
  tags,
  imageUrl,
  onSelect,
  isClicked,
}) {
  // onSelect -> App :: handlePhotoClick()
  return (
    <div
      className={isClicked ? "photo-card active" : "photo-card"}
      onClick={onSelect}
    >
      <img src={imageUrl} alt={title} />
      <div className="photo-card-content">
        <h2>{title}</h2>
        <div>{dateTaken}</div>
        <div>{location}</div>
        {tags.map((tag, index) => (
          <p key={index}>{tag}</p>
        ))}
      </div>
    </div>
  );
}

function App() {
  //1. descroption => "사진을 선택해 주세요" , isClicked => false
  //2. 첫번째 카드를 클릭했을때 -> 리빌드(새로고침)
  //3. description => 산맥 위로 ...
  //4. photoCard 10개 전부 리빌드
  //5. description => 산맥 위로 ...
  //6. isClicked => true
  //7. className => "photo-card-grid"
  const [description, setDescription] = useState("사진을 선택해 주세요");

  function handlePhotoClick(des) {
    setDescription(des);
  }

  return (
    <div>
      <p>{description}</p>
      <div className="photo-grid">
        {galleryItems.map((item) => (
          // {return(<PhotoCard3 key={item.id} {...item} onSelect={()=>handlePhotoClick(item.description})}
          <PhotoCard3
            key={item.id}
            title={item.title}
            dateTaken={item.dateTaken}
            imageUrl={item.imageUrl}
            tags={item.tags}
            location={item.location}
            onSelect={() => handlePhotoClick(item.description)}
            isClicked={description === item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
