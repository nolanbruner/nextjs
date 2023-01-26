import styled from "@emotion/styled";
import * as system from "styled-system"

export interface ContainerProps extends system.PositionProps, system.LayoutProps, system.TypographyProps, system.SpaceProps { }
export const Bod = styled.div<ContainerProps>`
    width:30vw;
    // color: rgba(0,0,0,0.7);
    // background-color:rgba(255,255,255,0.85);
    border-radius:10px 10px 10px 10px;
    padding:10px;
	box-shadow: 15px 20px 10px rgba(1, 1, 1, .2);
    ${system.space}
    ${system.width}
    ${system.layout}
    ${system.background}
`
export const grid = styled.div<ContainerProps>`
  display:grid;
  grid: auto / auto auto auto ;
  ${system.gridGap}
  ${system.width}
  ${system.height}
  ${system.overflowX}
  ${system.overflowY}
  ${system.textAlign}
`