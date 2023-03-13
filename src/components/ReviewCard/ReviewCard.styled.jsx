import styled from 'styled-components';


export const AvatarImage = styled.img`
  width: 50x;
  border-radius: 5px;
  border: 1px solid  black; 

`;

export const ReviewInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 15px;
    font-size: 20px;
    margin: 0;

      .sb-avatar__text {
      width: 50x;
      border-radius: 5px;
      border: 1px solid  black;
       span {
          font-size: 22px;
          color: black;
          font-weight: 700;
       }
    

    }

`
export const ReviewText = styled.div`
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
  margin-top: 20px;

  .show-more-less-clickable {
    color: #fc458e;
    font-weight: 700;
  }
`

export const AuthorReview = styled.span`
  margin-bottom: 25px;
  color: #fc458e;
  font-weight: 700;
  margin: 0;
`;

export const DateWrapper= styled.div`
  display:flex;
  column-gap: 60px;

`
export const DateReview = styled.p`
  font-style: italic;
  margin: 0;
  padding: 0;
`

export const UserRating = styled.div`
    margin: 0;
    display: flex;
    column-gap:10px;
    align-items: center;
    margin-left: auto;
    padding: 0;
     font-size: 26px; 
   svg {
      fill: #fc458e;
    }
`
export const Rate = styled.span`
  font-size: 34px;
  font-weight: 700;
`