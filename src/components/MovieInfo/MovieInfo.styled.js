import styled from 'styled-components';

export const BackDrop = styled.section`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 92vh;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 66px;
  padding-top: 200px;

  /* padding-left: 400px;
  padding-right: 400px; */
`;

export const PosterWrapper = styled.div`
  display: block;
  border-radius: 8px;
  width: 250px;
  height: 375;
  overflow: hidden;
  .poster-image {
    width: 100%;
  }
`;

export const MovieData = styled.div`
  width: 600px;
  max-height: 375px;
  font-size: 18px;
  padding: 12px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Text = styled.span`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Shorts = styled.p`
  margin-bottom: 20px;
`;

export const Overview = styled.p`
  margin-bottom: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const ActionBtn = styled.button`
  display: flex;
  align-items: center;
  background-color: #ef4234;
  border: none;
  padding: 8px;
  border-radius: 10px;
  color: white;
  font-size: 16px;

  &:not(:last-child) {
    margin-right: 10px;
  }
  &:last-child {
    background-color: #5662f6;
  }

  .button-icon {
    margin-left: 8px;
  }
`;
