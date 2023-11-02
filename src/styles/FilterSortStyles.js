import styled, { keyframes } from 'styled-components';

/* Keyframe animation for fade-in effect */
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const SortContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

export const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #007bff;
  }
`;

export const FilterLabel = styled.label`
  font-weight: bold;
  margin-right: 10px;
`;

export const SortLabel = styled.label`
  font-weight: bold;
  margin-right: 10px;
`;

export const FilterSelect = styled(Select)`
  &:hover {
    border-color: #007bff;
  }
`;

export const SortSelect = styled(Select)`
  &:hover {
    border-color: #007bff;
  }
`;

export const SortOptions = styled.div`
  display: none;
  position: absolute;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  z-index: 1;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
`;

export const SortOption = styled.div`
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const SortDropdown = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${SortOptions} {
    display: block;
    animation: ${fadeIn} 0.3s ease;
  }
`;
