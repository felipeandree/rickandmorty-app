import React from "react";

const Characters = ({ characters = [] }) => {
  return (
    <div className="/">
      {characters.map((item, index) => (
        <div key={index} className="/">
            <div className="card" >
                <img src={item.image} alt="" />
                <div className="card-body"> 
                    <h5 className="card-title">{item.name}</h5>
                    <p>Species: {item.species} </p>
                    <p>Location: {item.location.name} </p>
                    <hr />
                </div>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
