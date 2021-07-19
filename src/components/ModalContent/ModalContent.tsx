import { ModalContainer } from "./ModalContent.styled";

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