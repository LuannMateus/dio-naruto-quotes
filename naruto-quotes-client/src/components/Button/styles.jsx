import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #dc872c;
  color: #fff;

  border: none;
  border-radius: 0;
  box-shadow: #333 3px 3px;

  font-size: 1.5rem;
  font-family: 'New Tegomin', serif;

  padding: 10px 20px;

  cursor: pointer;

  &:hover {
    background-color: #a40000;
  }

  &:focus {
    outline: none;
  }
`;

export { StyledButton };
