import styled from 'styled-components';

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
  margin-top: 30px;
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
export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  background-color: #23374d;
  border: 0;
  padding: 10px 15px;
  border-radius: 4px;

  width: 85px;
  cursor: pointer;
  :hover {
    background-color: #1089ff;
  }
`;
export const List = styled.div``;
