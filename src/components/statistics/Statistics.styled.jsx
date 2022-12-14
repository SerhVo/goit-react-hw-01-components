import styled from '@emotion/styled';

export const StatSection = styled.section`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 25px;
`;

export const Title = styled.h2`
  padding: 16px 0;
  font-size: 20px;
  text-transform: uppercase;
  color: #000000a0;
`;

export const StatList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 80px;
  color: #fff;
  background-color: ${props => props.backgroundColor};
  text-shadow: 1px 1px 5px #00000040;  
`;

export const Label = styled.span`
  margin-bottom: 5px;
`;

export const Percentage = styled.span`
  font-size: 30px;
`;
