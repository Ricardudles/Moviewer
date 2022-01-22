import * as React from "react";
import styled from "styled-components";
import { ReactComponent as SvgLogo } from "../../assets/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg";

function Credits() {
  return (
    <>
      <Logo width={600} />
    </>
  );
}

export default Credits;

const Logo = styled(SvgLogo)`
  position: absolute;
  bottom: 0;
  margin-bottom: 10px;
`;
