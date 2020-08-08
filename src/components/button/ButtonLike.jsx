import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

const ButtonLike = () => {
  const like = useStoreState((state) => state.comment.like);
  const setLike = useStoreActions((e) => e.comment.setLike);
  return <button onClick={setLike}> like {like}</button>;
};

export default ButtonLike;
