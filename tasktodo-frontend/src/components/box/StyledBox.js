import styled from 'styled-components';

// Styled Box Wrapper
export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props?.width ?? "1200px"};
  height: ${props => props?.height ?? "600px"};
  border-radius: 6px;
  background-color: white;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

export const StyledHeadBox = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
  align-items: center;
  justify-content: center;
  
`;

export const StyledBodyBox = styled.div`
  overflow: auto;
  display: block;
  width: 100%;
  height: 70%;
  align-items: center;
  justify-content: center;
  
`;

