import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ListItem = styled.li`
  width: calc((100% - 80px) / 5);
  display: flex;
  row-gap: 20px;
  flex-direction: column;
  justify-content: space-between; 
  border-radius: 5px;
  overflow: hidden;
  background-color: #fde7f0;
  padding-bottom: 20px;
  color: black;
  font-size: 20px;

 
`;

export const Image = styled.img`
    height: 324px;
    object-fit: cover;
`;

export const ActorInfo = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  flex-grow: 1; 

  h4 {
    font-size:22px;
    margin: 0;
    margin-bottom: 10px;
    text-align: center;
  }

  p{
    font-size:20px;
    font-weight: 500;
    font-style: italic;
    margin: 0;
    text-align: center;
  }
`;

