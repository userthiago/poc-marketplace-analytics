import styled from 'styled-components';

export const HomeContainer = styled.main`
  padding: 112px 2rem 2rem;
  overflow-y: auto;

  @media screen and (max-width: ${({ theme }) => theme.viewports.small}) {
    padding: 112px 1rem 1rem;
  }
`;

export const ProductsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  width: 100%;

  @media screen and (max-width: ${({ theme }) => theme.viewports.small}) {
    gap: 0.5rem;
    justify-content: space-between;
  }
`;
