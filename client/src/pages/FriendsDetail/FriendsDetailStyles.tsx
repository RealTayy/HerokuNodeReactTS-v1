import styled from "styled-components"
import { spacers, devices } from "../../assets/styles"

export const _FriendsDetail = styled.div`
`

export const _FriendsDetail_Container = styled.div`
  padding: 0 ${spacers[3]};
  @media ${devices.tablet} {
    padding: 0 ${spacers[4]};
  }
`