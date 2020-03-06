import styled from "styled-components";
import {Container} from "reactstrap";
import cloudBg from "../../../../common/images/nuvens.svg";
import mainBg from "../../../../common/images/gradient-bg.svg";


export const SContainer = styled(Container)`
  background-image: url(${cloudBg}), url(${mainBg});
  background-repeat: no-repeat,repeat;
  background-position: top,center;
  min-height: 690px;
`;