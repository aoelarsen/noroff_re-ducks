import {
  FETCH_CARDS,
  SET_LOADING,
  FILTER_CARDS,
  FETCH_SINGLE_CARD
} from "../searchCards/types";
import fetchMock from "fetch-mock";
import mockCards from "../../../constants/cards";

export const mockFetchCards = url => dispatch => {
  dispatch({
    type: SET_LOADING,
    payload: true
  });
  fetchMock.mock(url, { cards: mockCards });

  fetch(url)
    .then(res => res.json())
    .then(json => {
      dispatch({
        type: FETCH_CARDS,
        payload: json.cards
      });
      dispatch({
        type: FILTER_CARDS,
        payload: json.cards
      });
      dispatch({
        type: SET_LOADING,
        payload: false
      });
    })
    .catch(error => console.error(error));

  fetchMock.reset();
};

export const fetchCards = url => dispatch => {
  dispatch({
    type: SET_LOADING,
    payload: true
  });
  fetch(url)
    .then(res => res.json())
    .then(json => {
      dispatch({
        type: FETCH_CARDS,
        payload: json.cards
      });
      dispatch({
        type: FILTER_CARDS,
        payload: json.cards
      });
      dispatch({
        type: SET_LOADING,
        payload: false
      });
    })
    .catch(error => console.error(error));
};

export const fetchSingleCard = url => dispatch => {
  dispatch({
    type: SET_LOADING,
    payload: true
  });
  fetch(url)
    .then(res => res.json())
    .then(json => {
      dispatch({
        type: FETCH_SINGLE_CARD,
        payload: json.card
      });
      dispatch({
        type: SET_LOADING,
        payload: false
      });
    })
    .catch(error => console.error(error));
};
