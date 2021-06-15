import styled from "styled-components";

export const Card = styled.div`
  border-radius: 10px;
  padding: 10px 30px;
  width: 100%;
  box-shadow: ${({ theme }) => theme.card.boxShadow};
  background: ${({ theme }) => theme.card.background};
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;

  & header {
    margin: 15px 0px;
    font-weight: 700;
    font-size: 24px;
    width: 100%;
  }

  & span {
    display: flex;
  }

  & section {
    margin-bottom: 12px;

    input {
      width: 100%;
      margin-top: 8px;
    }

    & > span {
      font-size: 20px;
      font-weight: 600;
    }

    & > button {
      margin-top: 8px;
    }
  }
`;

