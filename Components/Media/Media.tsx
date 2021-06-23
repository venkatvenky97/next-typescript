import NextLink from "next/link";
import styled from "styled-components";
import { Input } from "@material-ui/core";

let Media = () => {
  return (
    <Head>
      <div className="media">
        <NextLink href={"/"} />
        <Input className="Image" />
      </div>
    </Head>
  );
};

export default Media;

const Head = styled("div")`
  img {
    width: 250px;
    border-radius: 2px;
    cursor: pointer;
    margin-left: 10px;
  }

  media {
    margin: 10px;
    transition: transform 100ms;
    cursor: pointer;
  }
`;
