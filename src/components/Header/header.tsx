import Link from "next/link";
import styled from "styled-components";
import Modal from 'react-modal'
import { useState } from "react";
import ModalContent from "../ModalContent/ModalContet";

const HeaderContainer = styled.div<{ show: boolean }>`
  display: flex;
  height: 100px;
  width: 100%;
  background-color: #2D2D2D;
  margin-bottom: 60px;
  align-items: center;
  ${props => props.show && 'position: sticky; top: 0;'}
`

const HeaderContent = styled.div`
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
  }

  div {
    display: flex;
    margin-left: auto;

    a {
      color: #FFFFFF;
      font-size: 32px;
      margin: 0;
      text-decoration: none;
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
  }
`

const SubmitButton = styled.button`
  background: #2D2D2D;
  border-radius: 4px;
  width: 230px;
  height: 60px;
  margin: 72px auto 112px auto;
  color: #FFFFFF;
`

const customStyles = {
  overlay: {
    position: 'fixed',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    overflow: 'hidden'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundcolor: 'rgba(0, 0, 0, 0.6)',
    marginBottom: '10%'
  },
};


export default function Header({ home = true }) {

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <HeaderContainer show={home}>
      <HeaderContent>
        <span>Rockr Blog</span>
        <div>
          <Link href="/">
            <a>Posts</a>
          </Link>
          <a onClick={() => openModal()}>Contact</a>
        </div>
      </HeaderContent>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        preventScroll={false}

        contentLabel="teste"
      >
        <ModalContent />
        <SubmitButton onClick={() => closeModal()}>Submit</SubmitButton>
      </Modal>
    </HeaderContainer>
  )
}