import styled from 'styled-components';

export const ButtonStyled = styled.button`
  position: relative;
  display: flex;
  align-items: center;

  background-color: #0077b6;
  width: 100%;
  border: 0;

  height: 50px;
  padding: 0 1rem;

  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;

    background-color: #023e8a;
    width: 0;
    height: 50px;
    transition: width 0.4s ease;
  }

  &:hover {
    &:before {
      width: 100%;
    }
  }

  svg,
  span {
    z-index: 1;
  }

  span {
    margin-left: 0.5rem;
  }
`;
