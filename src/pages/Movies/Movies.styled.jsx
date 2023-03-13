import styled from 'styled-components';
import { IconButton } from 'components/IconButton';

export const SearchFilter = styled.div`

  display: flex;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  margin-bottom: 30px;
`;

export const SearchForm = styled.form`
  display: flex;
  width: 100%;
  height: 70px;
  max-width: 600px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  border: 4px solid #f787b4;
`;

export const SearchFormButton = styled(IconButton)`
    display: inline-block;
    border: 0;
    background-color: transparent;
    border-radius: 0;
    cursor: pointer;
    outline: none;
    height: 100%;
    box-shadow: none;
   
`
export const SearchFormInput = styled.input`
      height: 50px;
      width: 100%;
      height: 100%;
      padding-left: 70px;
      font-size: 24px;
      font-weight: 600;
      color: #f66fa5;
      border: none;
      outline: none;
      padding-left: 20px;
      padding-right: 4px;
      ::placeholder {
        font: inherit;
        font-size: 24px;
}
` ;


export const List = styled.ul`
  margin-left: 30px;
`;

