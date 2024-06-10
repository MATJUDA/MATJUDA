import React, { useState } from "react";
import BestComment from "../bestComment/BestComment";
import LikeDislike from "../like_dislike/LikeDislike";
import MenuName from "../menuName/MenuName";
import Picture from "../picture/Picture";
import State from "../state/State";
import "./style.css";

export default function MenuCard({
  details = {},
  initialState,
  bestComment,
  likes,
  dislikes,
}) {
  const { pictureUrl, corner, menuName } = details;
  const [likeCount, setLikeCount] = useState(likes);
  const [dislikeCount, setDislikeCount] = useState(dislikes);
  const [hasClicked, setHasClicked] = useState(false);

  const handleLike = () => {
    const newLikeCount = likeCount + 1;
    setLikeCount(newLikeCount);
    setHasClicked(true);

    fetch("/api/like", {
      method: "POST",
      body: JSON.stringify({ menuName, action: "like" }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setLikeCount(data.likes);
        setDislikeCount(data.dislikes);
      })
      .catch(() => {
        // 롤백
        setLikeCount(likeCount);
        setHasClicked(false);
      });
  };

  const handleDislike = () => {
    const newDislikeCount = dislikeCount + 1;
    setDislikeCount(newDislikeCount);
    setHasClicked(true);

    fetch("/api/like", {
      // 서버에서 like와 dislike를 같은 엔드포인트로 처리하는 경우
      method: "POST",
      body: JSON.stringify({ menuName, action: "dislike" }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setLikeCount(data.likes);
        setDislikeCount(data.dislikes);
      })
      .catch(() => {
        // 롤백
        setDislikeCount(dislikeCount);
        setHasClicked(false);
      });
  };

  return (
    <div className="frame">
      {pictureUrl && <Picture url={pictureUrl} />}
      {corner && menuName && <MenuName corner={corner} menuName={menuName} />}
      <State getSignal={initialState} />
      {bestComment && <BestComment bestComment={bestComment} />}
      <LikeDislike
        downRate={dislikeCount}
        upRate={likeCount}
        onLike={handleLike}
        onDislike={handleDislike}
        hasClicked={hasClicked}
      />
    </div>
  );
}
