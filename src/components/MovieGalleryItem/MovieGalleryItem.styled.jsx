import styled from "styled-components";

export const Movie = styled.img`
  object-fit: cover;
  border-radius: 2px;
  width:370px;
  height: 555px;
  
`;

export const MovieTitle = styled.p`
  padding: 20px;
  font-size: 26px;
  font-weight: 900;
  color: black;
  text-align: center;
  margin: 0;
  flex-grow: 1;
`;
export const MovieYear= styled.span`
  background-color: #fc458e; 
  color: white;
  font-size: 26px ;
  font-weight: 700;
  position: absolute;
  top:0;
  left: 0;
  padding: 5px;
  border-bottom-right-radius: 5px;
  
`;

export const Rate = styled.div`
  position: absolute;
  top:10px;
  right: 10px;
`   
