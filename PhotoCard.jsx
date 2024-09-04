import React from "react";

function PhotoCard({
  title,
  description,
  imageUrl,
  dateTaken,
  location,
  tags,
  isSelected,
  onClick,
}) {
  return (
    <div
      className={`photo-card ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <img src={imageUrl} alt={title} />
      <div className="photo-card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <div>{dateTaken}</div>
        <div>{location}</div>
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PhotoCard;
