import styled from 'styled-components';

export const NavigationContainer = styled.div`
  grid-area: nav;

  background-color: #4191e1;

  nav {
    padding: 1rem 0;

    button {
      position: relative;
      display: flex;
      align-items: center;

      background-color: #4169e1;
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

        background-color: #2d669d;
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
    }
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;

  background-color: #5d53e1;
  height: 80px;
  padding: 0 1rem;

  color: #ffffff;

  span {
    margin-left: 0.8rem;

    font-weight: 500;
  }

  .profile__picture {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #413a9d;

    height: 2.5rem;
    width: 2.5rem;
    border: 0;
    border-radius: 50%;

    color: #ffffff;
    font-size: 1rem;
  }
`;
