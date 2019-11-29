import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  max-width: 768px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 30px;
  margin: 100px 15px;
  @media only screen and (min-width: 768px) {
    margin: 100px auto;
  }
  h1 {
    font-size: 24px;
    color: #1089ff;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;

    svg {
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  input,
  select {
    flex: 1;
    border: 1px solid #eeeeee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
    margin-bottom: 15px;
    background-color: transparent;
    color: #23374d;
  }
`;

const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}

`;
export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background-color: #23374d;
  border: 0;
  padding: 10px 15px;
  border-radius: 4px;

  width: 85px;
  cursor: pointer;
  &:hover {
    background-color: #1089ff;
  }
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
export const List = styled.ul`
  li {
    display: flex;
    margin: 25px 0;
    + li {
      border-top: 1px solid #eee;
      padding-top: 25px;
    }
  }
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 25px;
  }
`;

export const Info = styled.p`
  color: ${props => (props.color ? props.color : '#cccccc')};
  font-family: ${props => (props.font ? props.font : '#cccccc')};
`;
export const Title = styled.span`
  display: flex;
  font-size: 36px;
`;
export const SubTitle = styled.span`
  display: flex;
  font-size: 14px;
`;
export const SavedIn = styled.small`
  color: #ccc;
  font-size: 12px;
`;

export const Message = styled.div`
  background: lightseagreen;
  padding: 14px;
  border-radius: 4px;
  margin: 25px 0;
  color: #fff;
  font-family: Arial;
  letter-spacing: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  svg {
    cursor: pointer;
  }
`;
