import React from "react";
import { useStoreState } from "easy-peasy";

const Card = () => {
  const Card = useStoreState((state) => state.comment.like);
  return (
    <card>
      <h3>jumlah like:{Card}</h3>
    </card>
  );
};

export default Card;
