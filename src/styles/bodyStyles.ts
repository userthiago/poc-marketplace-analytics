import styled from 'styled-components';

export const BodyContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(180px, 14vw) 86vw;
  grid-template-rows: 80px calc(100% - 80px);
  grid-template-areas:
    'nav header'
    'nav content';

  height: 100vh;

  .main-container {
    grid-area: content;
  }
`;
