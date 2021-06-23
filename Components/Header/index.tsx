import { useRouter } from "next/router";
import { useState } from "react";
import AppHeading from "./AppHeader";
import NavItem from "./NavItem";

const AppHeader = () => {
  const [value, setValue] = useState("");
  const { asPath } = useRouter();
  <div className="">
    <NavItem name="TV" />
    <NavItem name="Movies" />
    <NavItem name="Sports" />
    <NavItem name="News" />
    <NavItem name="Premium" />
    <NavItem name="Disney+" />
  </div>;
};

export default AppHeader;
