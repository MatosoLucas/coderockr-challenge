import styled from 'styled-components'

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1113px;

  span {
    color: #F1A10A;
    font-size: 36px;
    font-weight: 700;
    margin-top: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 0 123px;

    label {
      font-size: 24px;
      margin-top: 48px;

      @media(max-width: 468px) {
      margin-top: 20px;
      }

    }

    input {
      width: 565px;
      height: 60px;
      border-radius: 4px;
      border: 1px solid #2D2D2D;
      box-sizing: border-box;
      margin-top: 20px;
    }

    textarea {
      margin-top: 20px;
      height: 200px;
      border: 1px solid #2D2D2D;
      border-radius: 4px;
      box-sizing: border-box;
      resize: none;
    }

    @media(max-width: 1024px) {
      margin: 0 60px;

      input {
        width: 450px;
        transition: 0.3s
      }
    }

    @media(max-width: 768px) {
      margin: 0 30px;
      transition: 0.3s;

      input {
        width: 350px;
        transition: 0.3s;
      }
    }

    @media(max-width: 468px) {
      margin: 20px;
      transition: 0.3s;

      input {
        width: 300px;
        transition: 0.3s;
      }
    }
    
  }
`

export default function ModalContent() {

  return (
    <ModalContainer>
        <span>Contact</span>
      <form>
        <label>Name</label>
        <input placeholder="Fill your full name"></input>
        <label>E-mail</label>
        <input type="e-mail" placeholder="Fill a valid e-mail"></input>
        <label>Phone</label>
        <input placeholder="Fill your phone"></input>
        <label>Post</label>
        <textarea placeholder="Hello..."></textarea>
      </form>
    </ModalContainer>
  )
}