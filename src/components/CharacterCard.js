import React from "react";

export default function CharacterCard(props) {
  return (
    <div className="tile">
      <div key={props.id}>
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={props.image} alt="Placeholder image" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{props.name}</p>
                <p className="subtitle is-6">{props.species}</p>
              </div>
            </div>

            <div className="content">
              <ul>
                <li>{props.gender}</li>
                <li>{props.status}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
