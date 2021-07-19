import Link from "next/link";
import { useState } from "react";
import Image from 'next/image';
import ModalContent from "../ModalContent/ModalContent";

import { CloseButton, HeaderContainer, HeaderContent, StyledModal, SubmitButton } from "./Header.styled";
import CloseIcon from '../../../public/closeIcon.svg';
import SubmitIcon from '../../../public/submitIcon.svg';


export default function Header({ home = true }) {

  const [isOpen, setIsOpen] = useState(false);

  function modalToggle() {
    setIsOpen(!isOpen);
  }


  return (
    <HeaderContainer show={home}>
      <HeaderContent>
        <Link href="/" passHref>
          <span>Rockr Blog</span>
        </Link>
        <div>
          <Link href="/">
            <a>Posts</a>
          </Link>
          <a onClick={() => modalToggle()}>Contact</a>
        </div>
      </HeaderContent>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={modalToggle}
        onEscapeKeydown={modalToggle}
      >
        <CloseButton onClick={() => modalToggle()}>
          <Image src={CloseIcon} alt="close icon" />
        </CloseButton>
        <ModalContent />
        <SubmitButton onClick={() => modalToggle()}>
          <Image src={SubmitIcon} alt="arrow submit icon" />
          Submit
        </SubmitButton>
      </StyledModal>
    </HeaderContainer>
  )
}