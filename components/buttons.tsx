import * as system from "styled-system"
import styled from "@emotion/styled"
export interface ContainerProps extends system.PositionProps, system.LayoutProps, system.TypographyProps, system.SpaceProps { }

export const DropDownOption = styled.option<ContainerProps>`
    text-decoration:none;
    background-image:linear-gradient(to bottom right,orange,purple,blue);
    width:20vh;
    text-align:center;
    border:none;
    font-weight:bold;
    color:Black;
    &:hover{
        background-image:linear-gradient(to bottom right,orange,purple,blue);
        color:white;
        border-radius:15px;
    }
    ${system.space}
    ${system.width}
    ${system.layout}
`

export const DropDownButton = styled.select<ContainerProps>`
    width:auto;
    color:transparent;
    text-align:center;

    border:none;
    font-weight:800;
    background-image:linear-gradient(to bottom right,orange,purple,blue);
    background-size:200% 200%;
    background-clip:text;
    &:hover{
        background-clip:padding-box;
        color:white;
        border-radius:15px;
    }
    ${system.space}
    ${system.width}
    ${system.layout}
`
