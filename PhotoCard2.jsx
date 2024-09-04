import React from "react";

const PhotoCard = ({ item, onClick, isActive }) => {
  return (
    <div
      className={`photo-card ${isActive ? "active" : ""}`}
      onClick={() => onClick(item)}
    >
      <img src={item.imageUrl} alt={item.title} />
      <div className="photo-card-content">
        <h2>{item.title}</h2>
        <div>{item.dateTaken}</div>
        <div>{item.location}</div>
        {item.tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>
    </div>
  );
};

export default PhotoCard;
