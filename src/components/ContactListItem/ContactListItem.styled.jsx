import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  gap: 8px;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Span = styled.span`
  font-size: 18px;
  padding: 1px;
`;

export const Button = styled.button`
  padding: 1px 2px;
  border: 1px solid black;
  background-color: transparent;
  font-size: 16px;
  :hover {
    scale: 1.05;
  }
`;
