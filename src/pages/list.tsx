import { HStack, Text, VStack } from '@chakra-ui/react'
import { BookCard } from "@/components/bookCard"
import { FC, useState, useEffect } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'

export default function List() {

    const listItems:{title:string, image:string}[] =[
      {
        title: "パーカー",
        image:"https://bit.ly/dan-abramov"
       },
       {
        title: "靴",
        image:"https://bit.ly/dan-abramov"
       },
       {
        title: "シャツ",
        image:"https://bit.ly/dan-abramov"
       },
    ]


  
    return (
      <>
        <Text>リストページ</Text>
        <VStack spacing='24px' >
          <HStack>
            {listItems.map((item) =>
              <BookCard title={item.title} image={item.image} />
            )}
            {/* <BookCard title="パーカー" image="https://bit.ly/dan-abramov" />
            <BookCard title="靴" image="https://bit.ly/dan-abramov" />
            <BookCard title="シャツ" image="https://bit.ly/dan-abramov"  /> */}
          </HStack>
          <HStack spacing='24px' >
            <BookCard title="パーカー" image="https://bit.ly/dan-abramov"  />
            <BookCard title="靴" image="https://bit.ly/dan-abramov"   />
            <BookCard title="シャツ" image="https://bit.ly/dan-abramov" />
          </HStack>
        </VStack> 

        <Breadcrumb>
          <BreadcrumbItem>
          <BreadcrumbLink href='#'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='#'>About</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      </>
    )
  }
  