import {
  add_tour_travel,
  cart_tour_travel,
  delete_tour_travel,
  details_tour_travel,
} from "../types/tourTravelTypes";

export const addTourTravelAction = (newTourTravel) => {
  return {
    type: add_tour_travel,
    newTourTravel,
  };
};

export const detailsTourTravelAction = (reviewTravel) => {
  return {
    type: details_tour_travel,
    reviewTravel,
  };
};

export const cartTourTravelAction = (cartTravel) => {
  return {
    type: cart_tour_travel,
    cartTravel,
  };
};

export const deleteTourTravelAction = (deleteCartTravel) => {
  return {
    type: delete_tour_travel,
    deleteCartTravel,
  };
};
