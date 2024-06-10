import React, { useEffect, useState } from "react";
import MenuCard from "../menuCard/MenuCard";
import "./style.css";

// Import JSON data for each corner
import breakFastDetails from "./json/breakFast/breakFastDetails.json";
import breakFastState from "./json/breakFast/breakFastState.json";
import breakFastLikes from "./json/breakFast/breakFastLikes.json";
import breakFastDislikes from "./json/breakFast/breakFastDislikes.json";
import breakFastComment from "./json/breakFast/breakFastComment.json";

import menu1Details from "./json/menu1/menu1Details.json";
import menu1State from "./json/menu1/menu1State.json";
import menu1Likes from "./json/menu1/menu1Likes.json";
import menu1Dislikes from "./json/menu1/menu1Dislikes.json";
import menu1Comment from "./json/menu1/menu1Comment.json";

import menu2Details from "./json/menu2/menu2Details.json";
import menu2State from "./json/menu2/menu2State.json";
import menu2Likes from "./json/menu2/menu2Likes.json";
import menu2Dislikes from "./json/menu2/menu2Dislikes.json";
import menu2Comment from "./json/menu2/menu2Comment.json";

import saladDetails from "./json/salad/saladDetails.json";
import saladState from "./json/salad/saladState.json";
import saladLikes from "./json/salad/saladLikes.json";
import saladDislikes from "./json/salad/saladDislikes.json";
import saladComment from "./json/salad/saladComment.json";

import proDetails from "./json/pro/proDetails.json";
import proState from "./json/pro/proState.json";
import proLikes from "./json/pro/proLikes.json";
import proDislikes from "./json/pro/proDislikes.json";
import proComment from "./json/pro/proComment.json";

// Import other JSON files similarly...

export default function MenuCardList() {
  const [menus, setMenus] = useState({
    breakFast: {},
    menu1: {},
    menu2: {},
    salad: {},
    pro: {},
  });

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://13.209.8.57:5002/restaurant/corner/corners"
      );
      const data = await response.json();

      setMenus({
        breakFast: {
          details: breakFastDetails,
          state: breakFastState.state,
          likes: breakFastLikes.likes,
          dislikes: breakFastDislikes.dislikes,
          bestComment: breakFastComment.bestComment,
        },
        menu1: {
          details: menu1Details,
          state: data.stateCorner1.flag, // Adjust according to actual mapping
          likes: menu1Likes.likes,
          dislikes: menu1Dislikes.dislikes,
          bestComment: menu1Comment.bestComment,
        },
        menu2: {
          details: menu2Details,
          state: data.stateCorner3.flag, // Adjust according to actual mapping
          likes: menu2Likes.likes,
          dislikes: menu2Dislikes.dislikes,
          bestComment: menu2Comment.bestComment,
        },
        salad: {
          details: saladDetails,
          state: saladState.state,
          likes: saladLikes.likes,
          dislikes: saladDislikes.dislikes,
          bestComment: saladComment.bestComment,
        },
        pro: {
          details: proDetails,
          state: proState.state,
          likes: proLikes.likes,
          dislikes: proDislikes.dislikes,
          bestComment: proComment.bestComment,
        },
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Initial fetch
    const interval = setInterval(fetchData, 10000); // Fetch every 10 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="menu_card_list">
      <MenuCard
        details={menus.breakFast.details}
        initialState={menus.breakFast.state}
        bestComment={menus.breakFast.bestComment}
        likes={menus.breakFast.likes}
        dislikes={menus.breakFast.dislikes}
      />
      <MenuCard
        details={menus.menu1.details}
        initialState={menus.menu1.state}
        bestComment={menus.menu1.bestComment}
        likes={menus.menu1.likes}
        dislikes={menus.menu1.dislikes}
      />
      <MenuCard
        details={menus.menu2.details}
        initialState={menus.menu2.state}
        bestComment={menus.menu2.bestComment}
        likes={menus.menu2.likes}
        dislikes={menus.menu2.dislikes}
      />
      <MenuCard
        details={menus.salad.details}
        initialState={menus.salad.state}
        bestComment={menus.salad.bestComment}
        likes={menus.salad.likes}
        dislikes={menus.salad.dislikes}
      />
      <MenuCard
        details={menus.pro.details}
        initialState={menus.pro.state}
        bestComment={menus.pro.bestComment}
        likes={menus.pro.likes}
        dislikes={menus.pro.dislikes}
      />
    </div>
  );
}
