import styled from 'styled-components';

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: nav;

  background-color: #0096c7;

  nav {
    padding: 1rem 0;
    flex: 1;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;

  background-color: #023e8a;
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
    flex-shrink: 0;

    background-color: #03045e;
    height: 2.5rem;
    width: 2.5rem;
    border: 0;
    border-radius: 50%;

    color: #ffffff;
    font-size: 1rem;
  }
`;
