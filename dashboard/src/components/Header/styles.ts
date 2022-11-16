import styled from 'styled-components';

export const Container = styled.header`
  background-color: #d73035;
  height: 198px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  width: 100%;
  max-width: 1216px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .page-details {
    h1 {
      color: #fff;
      font-size: 32px;
    }

    h2 {
      color: #fff;
      font-size: 16px;
      font-weight: 400;
      opacity: 0.9;
    }
  }
`;
