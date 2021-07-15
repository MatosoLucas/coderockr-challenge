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
    background: 'rgba(0, 0, 0, 0.6)',
    position: 'absolute',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '20%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '0',
    marginTop: '30%',
  },
};


export default function Header({ home = true }) {

  const [isOpen, setIsOpen] = useState(false);

  function modalToggle() {
    setIsOpen(!isOpen);
  }


  return (
    <HeaderContainer show={home}>
      <HeaderContent>
        <Link href="/">
          <span>Rockr Blog</span>
        </Link>
        <div>
          <Link href="/">
            <a>Posts</a>
          </Link>
          <a onClick={() => modalToggle()}>Contact</a>
        </div>
      </HeaderContent>
      <Modal
        isOpen={isOpen}
        onRequestClose={modalToggle}
        style={customStyles}
        preventScroll={false}
        contentLabel="teste"
      >
        <ModalContent />
        <SubmitButton onClick={() => modalToggle()}>Submit</SubmitButton>
      </Modal>
    </HeaderContainer>
  )
}