import styled from 'styled-components';

// Styled Table
export const StyledTable = styled.table`
  width: 100%;
  height: 20%;
  overflow: auto;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-collapse: collapse;

   & tr{
    align-items: center;
    justify-content: center;
  } 
  & tr:nth-child(even){
    background-color: #f2f2f2;
  }

  & tr:hover{
    background-color: #d8dfed;
  }
`;

export default StyledTable;