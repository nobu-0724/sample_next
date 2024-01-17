// import { Text , Stack, Image} from '@chakra-ui/react'
// import {FC} from "react"

// type Props ={
//     title: string,
//     image: string,
//     onClick: ()=> void
// }

// export const BookCard:FC<Props> = ({ title, image , onClick})=>{
//     return(
//         <>
//         <Stack spacing="12px" alignItems="center" w="300px"  bg="#0f0" >
//             <Image src={image} alt={title}/>
//             <Text>{title}</Text>
//         </Stack>
//         </>
//     )
// }

import { Text, Stack, Image, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button , useDisclosure} from '@chakra-ui/react';
import { FC, useState, useContext } from 'react';
import { UserContext} from "@/pages/_app"

type Props = {
  title: string;
  image: string;
};

export const BookCard: FC<Props> = ({ title, image }) => {
  const user = useContext(UserContext)
  


  const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <>
    
      <Stack spacing="12px" alignItems="center" w="300px" bg="#0f0">
        <Image src={image} alt={title} onClick={onOpen} style={{ cursor: 'pointer' }} />
        <Text>{user.name}</Text>
      </Stack>

      {/* モーダル */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="gray.400">{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={image} alt={title} />
            {/* 他にも表示したい情報があればここに追加 */}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              閉じる
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
