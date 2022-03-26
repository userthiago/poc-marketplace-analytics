import styled from 'styled-components';

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: nav;

  background-color: ${({ theme }) => theme.colors.primary};

  nav {
    padding: 1rem 0;
    flex: 1;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primaryDark};
  height: 80px;
  padding: 0 1rem;
  border-bottom: solid 1px ${({ theme }) => theme.colors.gray500};

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

    background-color: ${({ theme }) => theme.colors.primaryLight};
    height: 2.5rem;
    width: 2.5rem;
    border: 0;
    border-radius: 50%;

    color: #ffffff;
    font-size: 1rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primaryDark};
  height: 80px;
  padding: 0 1rem;

  h1 {
    color: ${({ theme }) => theme.colors.primaryFontColor};
  }
`;
