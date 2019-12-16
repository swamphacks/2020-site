import styled from 'styled-components';

const PageRootContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px;
  margin-top: 100px;
  @media screen and (min-width: 1200px) {
    margin-top: 0px;
  }
`;

export {PageRootContainer};
