import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  `

export const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  h3 {
  font-weight: 700;
  color: #f787b4;
  font-size: 30px;
  }

`;

export const LinksList = styled.ul`
  display: flex;
  column-gap: 30px;
`;

export const LinkItem = styled(NavLink)`
  display: flex;
  column-gap: 10px;
  min-width: 200px;
  justify-content: center;
  padding: 10px 30px;
  background-color: white;
  color: black;
  border: 5px solid transparent;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 800;
  text-transform: uppercase;
  box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);
  cursor: pointer;
  transition: 250ms background-color ease-in, 250ms color ease-in;
  &.active {
    color: white;
    background-color: #fc458e;
   
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    background-color: #fde7f0;
    color: #fc458e;;
  }
`;




