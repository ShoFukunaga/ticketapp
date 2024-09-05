import Link from "next/link";
import React from "react";
import ToggleMode from "./ToggleMode";
import MainNaviLinks from "./MainNaviLinks";

const MainNavi = () => {
  return (
    <div className="flex justify-between">
      <MainNaviLinks />
      <div className="flex items-center gap-2">
        <Link href="/">Logout</Link>
        <ToggleMode />
      </div>
    </div>
  );
};

export default MainNavi;
