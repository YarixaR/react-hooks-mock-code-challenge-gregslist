import React, {useState} from "react";

function ListingCard({id, description, image, location}) {

  const [favorite, setFavorite] = useState(false)

  function handleFavorite (e) {
    e.preventDefault()
    setFavorite(!favorite)
  }

  function handleDelete (e) {
    e.preventDefault()
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={handleFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorite}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
