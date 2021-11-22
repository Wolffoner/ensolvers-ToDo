import styled from 'styled-components';

// Styled form
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  & label {
    font-family: Verdana;
    font-size: 1.2em;
  }
  & input {
    font-family: Verdana;
    margin: 10px;
    width: 40%;
    min-height: 30px;
  }
  & textarea {
    font-family: Verdana;
    width: 50%;
    min-height: 100px;
    margin: 10px;
  }
`;

export default StyledForm;