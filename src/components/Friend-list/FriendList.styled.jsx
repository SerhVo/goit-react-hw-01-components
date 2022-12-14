import styled from '@emotion/styled';
export const ListOfFriends = styled.ul``;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 0;
  width: 250px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 3px 3px 5px #00002030;
`;

export const Status = styled.span`
  margin: 0 20px;
  width: 15px;
  height: 15px;
  background-color: ${props => (props.isOnline ? '#11f50f' : '#f5100a')};
  border-radius: 50%;
`;

export const Avatar = styled.img`
  margin: 0 6px;
`;

export const Name = styled.p`
  margin: 0 35px;
  font-size: 20px;
  font-weight: 600;
`;
