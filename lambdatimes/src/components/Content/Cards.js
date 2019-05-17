import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map((card,a) => <Card key={a} card={card}/>)}
    </div>
  )
}

Cards.PropTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      tab: PropTypes.string,
      img: PropTypes.string,
      author: PropTypes.string
    })
  )
};

export default Cards;