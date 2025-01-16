import React from "react";

type Props = {
  passCount: number;
  price: string;
};

export const DetailsFooterAside = ({ passCount, price }: Props) => {
  return (
    <div className="space-y-2">
      <p className="small_text text-text_seconddary_color">{`${passCount} Pasenger`}</p>
      <p className="main_text_body text-label_color">{price}$</p>
    </div>
  );
};
