import styled from "styled-components";
import { Link } from "react-router-dom";

export const GalleryList = styled.ul`

  @media screen and (min-width: 768px) {
       display: flex;
          flex-wrap: wrap;
          gap: 25px;

      }
  margin-top: 0;
  margin-bottom: 30px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const GalleryItem = styled.li`
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);  
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 25px)/2);
  }

  @media screen and (min-width: 1200px) {
    flex-basis: calc((100% - 2 * 25px)/3);
  }

  &:not(:last-child) {
    @media screen and (max-width: calc(768px - 1px)) {
      margin-bottom: 15px;
    }
  }

  
  :hover {
  transform: scale(1.03);
  cursor: pointer;

  & p {
    color: #fc458e;
  }
  
}
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
`
