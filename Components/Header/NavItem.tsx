import NextLink from "next/link";
import styled from "styled-components";

interface NavItemProps {
  name: "TV" | "Movies" | "Sports" | "News" | "Premium" | "Disney+";
}

const NavItem = ({ name }: NavItemProps) => {
  return (
    <Container>
      <Logo>
        <NextLink href={"/public/assets/starlogo.jpg"}>{name}</NextLink>
      </Logo>
    </Container>
  );
};

export default NavItem;

const Container = styled("div")`
  height: 70px;
  background-color: #121926;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;
const Logo = styled("img")`
  width: 80px;
`;
