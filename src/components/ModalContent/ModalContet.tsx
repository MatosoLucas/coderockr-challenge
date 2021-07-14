import styled from 'styled-components'

const ModalContainer = styled.div`
  display: flex;
  max-width: 1113px;
  max-height: 600px;

  form {
    display: flex;
    flex-direction: column;
    margin: 0 123px;

    label {
      font-size: 24px;
      margin-top: 48px;
      
    }

    input {
      width: 565px;
      height: 60px;
      border-radius: 4px;
      border: 1px solid #2D2D2D;
      box-sizing: border-box;
      margin-top: 20px;
    }

    input:last-child {
      height: 200px;

    }
  }
`

export default function ModalContent () {
  return (
    <ModalContainer>
      <form>
        <label>Name</label>
        <input placeholder="Fill your full name"></input>
        <label>E-mail</label>
        <input type="e-mail" placeholder="Fill a valid e-mail"></input>
        <label>Phone</label>
        <input placeholder="Fill your phone"></input>
        <label>Post</label>
        <input placeholder="Hello..."></input>
      </form>
    </ModalContainer>
  )
}