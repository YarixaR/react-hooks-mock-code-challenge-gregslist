import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings}) {
  
  
  function displayCards () {
    
    const listingsArray = listings.map((item) => {
      return (
        <ListingCard id={item.id} description={item.description} image={item.image} location={item.location}  />
      )
    })

    return listingsArray
  }

  return (
    <main>
      <ul className="cards">
        {displayCards()}
      </ul>
    </main>
  );
}

export default ListingsContainer;
