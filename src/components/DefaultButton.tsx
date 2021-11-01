import React, { VFC, ButtonHTMLAttributes } from "react";

export const DefaultButton: VFC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return (
    <button className="btn btn-primary" {...props}>
      {children}
    </button>
  );
};
