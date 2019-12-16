import styled from 'styled-components';

const PageRootContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px;
  padding-top: 140px;
  @media screen and (min-width: 1200px) {
    padding-top: 40px;
  }
`;

export {PageRootContainer};
