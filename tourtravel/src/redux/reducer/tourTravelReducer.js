import {
  add_tour_travel,
  cart_tour_travel,
  delete_tour_travel,
  details_tour_travel,
} from "../types/tourTravelTypes";

import { toast } from "react-toastify";

const initialState = {
  tourList: [
    {
      id: 1,
      time: "3 days 2 hours",
      start: "01 - 21/09/2021",
      vehicle: "Plane",
      place: "Cô Tô City",
      img: "./images/img-9.jpg",
      text: "Explore the hidden waterfall deep inside the Amazon Jungle",
      label: "Adventure",
      path: "/products",
      title: "Cô Tô",
      img1: "./images/cote1.jpg",
      img2: "./images/cote2.jpg",
      img3: "./images/cote3.jpg",
      img4: "./images/cote4.jpg",
      prince: 1999999,
      soLuong: 1,
    },
    {
      id: 2,
      time: "2 days 2 hours",
      start: "01 - 31/11/2021",
      vehicle: "Plane",
      place: "Long An City",
      img: "./images/img-2.jpg",
      text: "Travel through the Islands of Bali in a Private Cruise",
      label: "Luxury",
      path: "/products",
      title: "Long An",
      img1: "./images/longan1.jpg",
      img2: "./images/longan2.jpg",
      img3: "./images/longan3.jpg",
      img4: "./images/longan4.jpg",
      prince: 3999999,
      soLuong: 1,
    },
    {
      id: 3,
      time: "3 days 2 hours",
      start: "05 - 21/01/2022",
      vehicle: "Ship",
      place: "Hạ Long City",
      img: "./images/img-3.jpg",
      text: "Set Sail in the Atlantic Ocean visiting Uncharted Waters",
      label: "Mystery",
      path: "/products",
      title: "Hạ Long",
      img1: "./images/halong1.jpg",
      img2: "./images/halong2.jpg",
      img3: "./images/halong3.jpg",
      img4: "./images/halong4.jpg",
      prince: 1999999,
      soLuong: 1,
    },
    {
      id: 4,
      time: "4 days 2 hours",
      start: "11 - 15/01/2022",
      vehicle: "Bus",
      place: "Phan Thiet City",
      img: "./images/img-4.jpg",
      text: "Experience Football on Top of the Himilayan Mountains",
      label: "Adventure",
      path: "/products",
      title: "Phan Thiet",
      img1: "./images/phanthiet1.jpg",
      img2: "./images/phanthiet2.jpg",
      img3: "./images/phanthiet3.jpg",
      img4: "./images/phanthiet4.jpg",
      prince: 2000000,
      soLuong: 1,
    },
    {
      id: 5,
      time: "2 days 5 hours",
      start: "01 - 10/08/2021",
      vehicle: "Train",
      place: "Sapa City",
      img: "./images/img-8.jpg",
      text: "Ride through the Sahara Desert on a guided camel tour",
      label: "Adrenaline",
      path: "/products",
      title: "Sa Pa",
      img1: "./images/sapa1.jpg",
      img2: "./images/sapa2.jpg",
      img3: "./images/sapa3.jpg",
      img4: "./images/sapa4.jpg",
      prince: 2899000,
      soLuong: 1,
    },
    {
      id: 6,
      time: "3 days 0 hours",
      start: "01 - 31/11/2021",
      vehicle: "Bus",
      place: "Ho Chi Minh City",
      img: "./images/img-5.jpg",
      text: "Ride through the Sahara Desert on a guided camel tour",
      label: "Adrenaline",
      path: "/products",
      title: "Da Lat",
      img1: "./images/dalat1.jpg",
      img2: "./images/dalat2.jpg",
      img3: "./images/dalat4.jpg",
      img4: "./images/dalat6.jpg",
      prince: 3899000,
      soLuong: 1,
    },
  ],
  tourItem: [],
  cart: [],
};

const tourTravelReducer = (state = initialState, action) => {
  switch (action.type) {
    case add_tour_travel: {
      return { ...state };
    }

    case details_tour_travel: {
      let detail = state.tourItem;
      detail.shift();
      detail.push(action.reviewTravel);
      console.log("detail:", detail);
      // console.log("detail1:", state.tourItem);
      return { ...state };
    }

    case cart_tour_travel: {
      console.log("mua");
      let currentCar = state.cart;
      currentCar.push(action.cartTravel);
      console.log("currentCar:", currentCar);
      toast.success("Thêm mới thành công");
      return { ...state };
    }

    case delete_tour_travel: {
      console.log("state cart", state.cart);
      let currentCarDelete = [...state.cart];
      let index = currentCarDelete.find(
        (items) => items.id === action.deleteCartTravel.id
      );
      console.log("state cart cần xoá có id", action.deleteCartTravel.id);
      // console.log("index", index);
      if (index !== -1) {
        currentCarDelete.splice(index, 1);
      }
      state.cart = currentCarDelete;
      console.log("currentCar 3:", state.cart);
      toast.warning("Xoá giỏ hàng thành công");
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default tourTravelReducer;
