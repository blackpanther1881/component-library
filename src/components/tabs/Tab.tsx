import React from "react";
import { forwardRef } from "../../utils/forwardRef";

export type TabProps = {
  title: string;
  disable?: boolean;
  children?: React.ReactNode | string;
};

export const Tab = forwardRef<HTMLDivElement, TabProps>(({ children }) => {
  return <div className="tabBody">{children}</div>;
});
