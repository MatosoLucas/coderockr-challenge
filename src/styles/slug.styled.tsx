import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(90deg, #F1A10A 0%, #342303 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  min-height: 100vh;
`

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px auto 218px auto;
  background: #FFFFFF;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);

      div {
        display: flex;

      img {
        display: flex;
        width: 50%;
        height: 50%;
        }
} 
`

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;

  span:first-child {
    font-size: 18px;
    color: #032937;
    white-space: nowrap;
    margin-bottom: 44px;
  }

  span {
    font-size: 24px;
    color: #2D2D2D;
  }

  h1 {
    font-size: 36px;
    color: #F1A10A;
    font-weight: 700;
  }
`
export const PostContent = styled.div`
  div {
    display: flex;
    flex-direction: column;
    max-width: 680px;
    font-size: 24px;
    margin: 124px auto;
    line-height: 34.13px;
    
    @media (max-width: 768px) {
      margin: 124px 20px;
    }
  }
`