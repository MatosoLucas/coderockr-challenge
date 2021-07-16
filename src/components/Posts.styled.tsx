import styled from 'styled-components'

export const GridTest = styled.div`
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-rows: 320px 640px 320px 640px;
  grid-template-columns: auto auto;
  grid-template-areas: 
    "item0 item1"
    ". item2"
    "item3 item4"
    "item5 .";
  grid-gap: 0px;
  margin-top: 60px;

  @media (max-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`

export const PostContainer = styled.div<{ index: number }>`
  display: flex;
  max-height: 320px;
  max-width: 960px;
  margin: 0 auto 50px auto;
  grid-area: item${props => props.index};

  @media (max-width: 1024px) {
    max-width: 640px;
    transition: 0.3s;
  }

  img {
    height: 20rem;
    width: 20rem;
  }

  div {
    display: flex;
    flex-direction: column;
    padding: 35px 80px;
    background: #FFFFFF;

    @media (max-width:1920px) {
      padding: 25px 60px;
    }

    @media (max-width:1624px) {
      padding: 25px 40px;
    }

    @media (max-width:1024px) {
      padding: 25px 30px;
    }

    span {
      font-size: 24px;
      color: #2D2D2D;
      margin: 0px;

      @media (max-width:1624px) {
      font-size: 18px;
      }

    }

    span:nth-child(2) {
      color: #F1A10A;
      font-size: 36px;
      margin: 7px 0 13px 0;
      cursor: pointer;

      :hover {
        text-decoration: underline;
      }

      @media (max-width:1920px) {
      font-size: 24px;
      }

    }

    p {
      font-size: 24px;
      color: #2D2D2D;
      margin: 0;

      @media (max-width: 1624px) {
        font-size: 24px;
      }

    }

    div { 
      padding: 0;
      cursor: pointer;
      :hover {
        text-decoration: underline;
      }
    }
  }
`