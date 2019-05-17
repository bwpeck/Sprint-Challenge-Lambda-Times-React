import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';
import Carousel from '../Carousel/Carousel'

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({tabs: tabData, cards: cardData});
  }

  changeSelected = tab => {
    // this function should take in the tab and update the state with the new tab.
  };
  selectTabHandler = tab => {
    this.setState({selected:tab})
  }

  filterCards = () => {
   const cards = this.state.cards.filter(card => {
     if(this.state.selected === "all") {
      return this.state.cards;
     } else if (this.state.select === card.tab) {
       return card;
     }
   })
   return cards;
  };

  render() {
    return (
      <div className="content-container">
      <Carousel/>
        <Tabs tabs={this.state.tabs} selectedTab={this.state.selected} selectTabHandler={this.selectTabHandler} />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
 export default Content