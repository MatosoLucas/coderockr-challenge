import styled from 'styled-components'

export const GridTest = styled.div`
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-rows: 320px 640px 320px 640px;
  /* grid-template-columns: repeat(320px, 1fr); */
  grid-template-areas: 
    "item0 item0 item0 item1 item1 item1"
    ". . item2 item2 item2 item2"
    "item3 item3 item3 item4 item4 item4"
    "item5 item5 item5 item5 . .";
  grid-gap: 0px;
  grid-row-gap: 80px;
  margin-top: 80px;

  @media (max-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`

export const PostContainer = styled.div<{ index: number }>`
  display: flex;
  max-height: 320px;
  max-width: 960px;
  grid-area: item${props => props.index};

  @media (max-width: 1024px) {
    max-width: 640px;
    transition: 0.3s;
  }

  @media(max-width: 678px) {
    flex-direction: column;
    max-width: 320px;
    max-height: none;
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
      padding: 15px 30px;
    }

    @media (max-width:1024px) {
      padding: 15px 20px;
    }

    span {
      font-size: 24px;
      color: #2D2D2D;
      margin: 0px;

      @media (max-width:1624px) {
      font-size: 20px;
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

      @media (max-width:1800px) {
      font-size: 26px;
      }

      @media (max-width:1024px) {
      font-size: 26px;
      }

    }

    p {
      font-size: 24px;
      color: #2D2D2D;
      margin: 0;

      @media (max-width: 1624px) {
        font-size: 22px;
      }

      @media (max-width:1024px) {
      font-size: 22px;
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

export const PostContainerLarge = styled.div<{ index: number }>`
  display: flex;
  max-height: 640px;
  max-width: 1280px;
  grid-area: item${props => props.index};

  @media (max-width: 1280px) {
    max-height: 320px;
    max-width: 960px;
    }

  @media (max-width: 1024px) {
    max-width: 640px;
    transition: 0.3s;
  }

  @media(max-width: 678px) {
    flex-direction: column;
    max-height: none;
    max-width: 320px;
  }

  img {
    height: 40rem;
    width: 40rem;

    @media (max-width: 1280px) {
      height: 320px;
      width: 320px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    padding: 80px 162px;
    background: #FFFFFF;

    @media (max-width:1800px) {
      padding: 80px 100px;
    }

    @media (max-width:1624px) {
      padding: 80px 100px;
    }

    @media (max-width:1024px) {
      padding: 25px 30px;
    }

    span {
      font-size: 24px;
      color: #2D2D2D;
      margin: 0px;

      @media (max-width:1280px) {
      font-size: 20px;
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

      @media (max-width:1280px) {
      font-size: 24px;
      }

      @media (max-width:1024px) {
      font-size: 26px;
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