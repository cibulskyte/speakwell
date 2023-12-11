import React from 'react';
import PropTypes from 'prop-types';
import './Card.module.scss'; 

const Card = ({ title, startDate, schedule, location }) => {


  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-startdate">{startDate}</p>
        <p className="card-schedule">{schedule}</p>
        <p className="card-location">{location}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  schedule: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,

};

export default Card;