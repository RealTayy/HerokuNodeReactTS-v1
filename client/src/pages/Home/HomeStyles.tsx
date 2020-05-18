import styled from "styled-components"
import { spacers, devices } from "../../assets/styles"

export const _Home = styled.div`
`

export const _Home_Container = styled.div`
  padding: 0 ${spacers[3]};
  @media ${devices.tablet} {
    padding: 0 ${spacers[4]};
  }
`