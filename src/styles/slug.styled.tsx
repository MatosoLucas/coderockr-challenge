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
  max-width: 1280px;
  flex-direction: column;
  margin: 60px auto 218px auto;
  background: #FFFFFF;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 1320px) {
    margin: 60px 50px 218px 50px;
  }

  @media (max-width: 590px) {
    width: 320px;
    margin: 60px auto 218px auto;
  }

  div {
    display: flex;

    @media (max-width: 590px) {
      flex-direction: column;
    }

    img {
      display: flex;
      width: 50%;
      height: 50%;

      @media (max-width: 740px)
      {
        width: 320px;
        height: 320px;
      }
    }
  } 
`

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 120px;

  @media (max-width: 1320px) {
    padding: 15px 60px;
  }

  @media (max-width: 1320px) {
    padding: 15px 60px;
  }

  @media (max-width: 768px) {
    padding: 0px 30px;
  }

  @media (max-width: 590px) {
    justify-content: center;
    margin-top: 30px;
  }

  span:first-child {
    font-size: 18px;
    color: #032937;
    /* white-space: nowrap; */
    margin-bottom: 44px;

    @media (max-width:768px) {
      margin-bottom: 22px;
    }
  }

  span {
    font-size: 24px;
    color: #2D2D2D;

    @media (max-width:768px) {
      font-size: 20px;
    }
  }

  p {
    font-size: 36px;
    color: #F1A10A;
    font-weight: 700;
    margin: 15px 0 0 0;

    @media (max-width: 768px) {
      font-size: 24px;
    }
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

    @media (max-width: 590px) {
      margin: 64px 20px;
    }
  }
`