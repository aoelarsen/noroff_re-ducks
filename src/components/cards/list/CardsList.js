import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { mockFetchCards } from "../../../redux/methods";
import { setInputValue, setFilteredCards } from "../../../redux/actions";
import { BASE_URL } from "../../../constants/API";
import Spinner from "react-bootstrap/Spinner";
import Search from "./Search";

import CardItem from "./CardItem";
import CardsGrid from "../../ui/cardStyles/CardsGrid";
import CardsContainer from "../../ui/cardStyles/CardsContainer";
import SpinnerContainer from "../../ui/SpinnerContainer";

const CardsList = ({
  mockFetchCards,
  isLoading,
  cards,
  inputValue,
  setInputValue,
  setFilteredCards,
  filteredCards
}) => {
  useEffect(() => {
    mockFetchCards(BASE_URL);
  }, [mockFetchCards]);

  const clearInputValue = () => {
    setInputValue("");
    setFilteredCards(cards);
  };

  const filterCards = e => {
    const searchValue = e.target.value.toLowerCase();

    setInputValue(e.target.value);
    if (!e.target.value) {
      setInputValue("");
    }

    const filteredArray = cards.filter(card => {
      const loverCaseName = card.name.toLowerCase();

      if (loverCaseName.startsWith(searchValue)) {
        return true;
      }
      return false;
    });

    setFilteredCards(filteredArray);
  };

  if (isLoading) {
    return (
      <CardsGrid>
        <SpinnerContainer>
          <Spinner animation="border" className="spinner" />
        </SpinnerContainer>
      </CardsGrid>
    );
  }

  return (
    <>
      <Search
        handleSearch={filterCards}
        inputValue={inputValue}
        clearInput={clearInputValue}
      />
      <CardsGrid>
        {filteredCards.map(card => {
          const { id, name, rarity, imageUrl } = card;
          if (!imageUrl) {
            return "";
          }
          return (
            <CardsContainer key={id}>
              <CardItem id={id} name={name} rarity={rarity} image={imageUrl} />
            </CardsContainer>
          );
        })}
      </CardsGrid>
    </>
  );
};

CardsList.propTypes = {
  mockFetchCards: PropTypes.func.isRequired,
  cards: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  setInputValue: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  setFilteredCards: PropTypes.func.isRequired,
  filteredCards: PropTypes.array.isRequired
};

const mapStateToProps = store => {
  return {
    cards: store.cardsCollection.allCards,
    isLoading: store.isLoading.isLoading,
    inputValue: store.filterReducer.inputValue,
    filteredCards: store.filterReducer.filteredCards
  };
};

export default connect(mapStateToProps, {
  mockFetchCards,
  setInputValue,
  setFilteredCards
})(CardsList);
