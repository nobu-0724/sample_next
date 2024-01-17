import React, { useState } from "react";
// import './styles.css'
import { Button, Text, VStack } from '@chakra-ui/react'

const Counter = () => {
    // const initialState = Math.floor(Math.random() * 10) + 1
    const [count, setCount] = useState(0)
    // const [open, setOpen] = useState(true)
    // const toggle = () => setOpen(!open)

    return (
        <>
        <VStack spacing="16px" >
            <Text style={{
                color:"gray.300"
            }} sx={{
                color:"gray.300"
            }} >現在の数字は{count}です</Text>
            <Button onClick={() => setCount(count +1)}>
                + 1
            </Button>
            <Button onClick={() => setCount(count -1)}>-1</Button>
            <Button onClick={() => setCount(0)}>0</Button>
            <Button onClick={() => setCount(0)}>最初の数値に戻す</Button>
        </VStack>
        </>
    )
}

export default Counter

