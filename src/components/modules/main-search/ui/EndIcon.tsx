"use client";

import { ReactNode } from "react";

export const EndIcon = ({ icon, onClick }: { icon?: ReactNode; onClick?: () => void }) => {
  return icon ? (
    <div
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        if (onClick) {
           onClick();
        }
      }}
      className="absolute transform -translate-y-1/2 cursor-pointer right-1 tablet:right-2 laptop:right-5 top-1/2"
    >
      {icon}
    </div>
  ) : null;
};
