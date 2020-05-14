import styled from "styled-components";
import { devices } from "../../assets/styles";

export const _Container = styled.div`
  margin: auto;
  @media ${devices.tablet} {
    max-width: 85%;
  }  
  
  @media ${devices.laptop} {
    max-width: 80%;
  }

  @media ${devices.laptopL} {
    max-width: 75%;
  }

  @media ${devices.desktop} {
    max-width: 70%;
  }
`