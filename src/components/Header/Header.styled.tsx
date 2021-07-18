import styled from "styled-components"
import Modal from "styled-react-modal"

export const HeaderContainer = styled.div<{ show: boolean }>`
  display: flex;
  height: 100px;
  width: 100%;
  background-color: #2D2D2D;
  align-items: center;
  ${props => props.show && 'position: sticky; top: 0; z-index: 1;'};
`

export const HeaderContent = styled.div`
  display: flex;
  max-width: 1340px;
  width: 100%;
  align-items: center;
  margin: 0 auto;

  span {
    display: block;
    font-size: 36px;
    color: #FFFFFF;
    white-space: nowrap;

    @media (max-width:1400px) {
      margin-left: 20px;
    }

    @media (max-width: 468px) {
      font-size: 32px;
    }
  }

  div {
    display: flex;
    margin-left: auto;

    a {
      color: #FFFFFF;
      font-size: 32px;
      font-weight: 500;
      margin: 0;
      text-decoration: none;

      @media(max-width: 468px) {
        margin-right: 10px;
        font-size: 30px;
      }
    }

    a:last-child {
      margin-left: 120px;
      cursor: pointer;

      @media(max-width: 1401px) {
        margin-right: 20px;
      }

      @media(max-width: 768px) {
        margin-left: 20px;
        transition-duration: 0.2s
      }
    }

    @media(max-width: 420px) {
      a:first-child {
        display: none;
      }
    }

  }
`

export const SubmitButton = styled.button`
  display: flex;
  background: #2D2D2D;
  border-radius: 4px;
  width: 230px;
  height: 60px;
  margin: 72px auto 112px auto;
  color: #FFFFFF;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px 0 36px;
  font-size: 24px;

  @media(max-width: 768px) {
    margin: 36px 0;
  }
`

export const StyledModal = Modal.styled`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
  margin-top: 250px;
  margin-bottom: 10px;
`
export const CloseButton = styled.button`
  background: transparent;
  border: none;
  width: 28px;
  height: 28px;
  margin: 18px 51px 0 auto;

  @media (max-width: 768px) {
    margin: 18px 24px 0 auto;
  }
`