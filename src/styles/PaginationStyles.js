// PaginationStyles.js
import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const PageNumber = styled.button`
  padding: 10px 15px;
  background-color: ${(props) => (props.className === 'current' ? '#007bff' : 'transparent')};
  color: ${(props) => (props.className === 'current' ? '#fff' : '#007bff')};
  border: 1px solid #007bff;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
`;

export const NavigationButton = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin: 0 5px;
  cursor: pointer;
`;

export const DisabledNavigationButton = styled.button`
  padding: 10px 15px;
  background-color: #ccc;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin: 0 5px;
  cursor: not-allowed;
`;

export const CurrentPageLabel = styled.span`
  font-weight: bold;
`;

export const TotalPagesLabel = styled.span`
  font-weight: normal;
`;


