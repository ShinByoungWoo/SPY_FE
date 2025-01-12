import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import { IoMdClose } from 'react-icons/io';
import Slider from '../components/Slider/Slider';
const RuleModal = ({ showModal, setShowModal }) => {
  // const [modal, setModal] = useState(true);
  const modalRef = useRef();

  const closeBtn = (e) => {
    if (modalRef.current === e.target) showModal(false);
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

//모달속 표 데이터
//   const columnData = [
//     {
//       maxPlayer: 6,
//       employee: 3,
//       lawyer: 0,
//       detective: 1,
//       spy: 2
//     },
//     {
//       maxPlayer: 7,
//       employee: 3,
//       lawyer: 1,
//       detective: 1,
//       spy: 2
//     },
//     {
//       maxPlayer: 8,
//       employee: 4,
//       lawyer: 1,
//       detective: 1,
//       spy: 2
//     },
//     {
//       maxPlayer: 9,
//       employee: 4,
//       lawyer: 1,
//       detective: 1,
//       spy: 3
//     },
//     {
//       maxPlayer: 10,
//       employee: 5,
//       lawyer: 1,
//       detective: 1,
//       spy: 3
//     },
// ]
  return (
    <>
      {showModal ? (
        <ModalBg onClick={closeBtn} ref={modalRef}>
          <WrapModal showModal={showModal}>
            <div>
            <Slider/>
            </div>
            <CloseModal onClick={() => setShowModal((prev) => !prev)}>
              닫기
            </CloseModal>
          </WrapModal>
        </ModalBg>
      ) : null}
    </>
  );
};

const WrapModal = styled.div`
  width: 80%;
  height: 80%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: flex;
  /* grid-template-columns: 1fr 1fr; */
  position: relative;
  z-index: 10;
  text-align: center;
  justify-content: center;
  align-items: center;
    @media (max-width: 600) {
    width: 50rem
  }
`;

const ModalBg = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const CloseModal = styled.button`
  cursor: pointer;
  border : none;
  position: absolute;
  background-color: #9296FD;
  top: 30px;
  right: 60px;
  width: 9%;
  min-width: 60px;
  height: 48px;
  border-radius: 30px;
  box-shadow: 3px 3px 3px #bbbbbbbb;
  font-family: 'yg-jalnan';
  color: #dddddd;
  font-size: 1.2rem;
  padding: 0;
  z-index: 10;
`;



export default RuleModal;
