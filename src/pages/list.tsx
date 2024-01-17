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

    useEffect(()=>{
      const getBookFetch = async() =>{
        console.log("1")
        const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=%E5%91%8A%E7%99%BD");
        if (response.ok) { // Check if the HTTP status code is 2xx
          const data = await response.json(); // Parse the body as JSON
          console.log(data.items[0].volumeInfo);
        }

      }

      getBookFetch()

    },[])



  
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
  