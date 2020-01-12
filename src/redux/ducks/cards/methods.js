import * as actions from "./actions";
import fetchMock from "fetch-mock";
import mockCards from "../../../constants/cards";

const mockGetCards = url => async dispatch => {
  dispatch(actions.loadCardsBegin());

  fetchMock.mock(url, { cards: mockCards });

  try {
    await fetch(url)
      .then(response => response.json())
      .then(jsonResponse => {
        dispatch(actions.loadCardsSuccess(jsonResponse.cards));
        dispatch(actions.setFilteredCards(jsonResponse.cards));
      })
      .catch(error => actions.loadCardsError(error));
  } catch (error) {
    dispatch(actions.loadCardsError(error));
  } finally {
    fetchMock.reset();
  }
};

const getCards = url => async dispatch => {
  dispatch(actions.loadCardsBegin());

  try {
    await fetch(url)
      .then(response => response.json())
      .then(jsonResponse => {
        dispatch(actions.loadCardsSuccess(jsonResponse.cards));
        dispatch(actions.setFilteredCards(jsonResponse.cards));
      })
      .catch(error => actions.loadCardsError(error));
  } catch (error) {
    dispatch(actions.loadCardsError(error));
  }
};

const setFilteredCards = actions.setFilteredCards;
const setInputValue = actions.setInputValue;

export { mockGetCards, getCards, setFilteredCards, setInputValue };
