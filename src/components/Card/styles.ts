import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  &:hover {
    box-shadow: 3px 3px 15px #666;
    cursor: pointer;
  }

  span {
    position: absolute;
    width: 70px;
    height: 20px;
    text-align: center;
    margin: 10px 0 0 80px;
  }
`;

export const Title = styled.h3`
  margin: 150px 0 0 3px;
  position: absolute;
  color: white;
`;

export const Date = styled.div`
  position: absolute;
  margin: 175px 0 0 3px;
  color: white;
  font-size: 10px;
`;

export const Details = styled.div`
  position: absolute;
  margin: 195px 0 0 3px;
  color: white;
  font-size: 10px;
`;
