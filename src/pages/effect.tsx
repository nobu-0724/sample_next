import React, {useState, useEffect} from "react";
import { Button } from '@chakra-ui/react'


const EffectFunc = () => {
    const [count, setCount] = useState(0)
    // useEffect(() => {
    //     document.title = `${count}回クリックされました`
    //     console.log(`${count}回クリックされました`)
    // })

    useEffect(()=>{
        // 中の処理が行われる
        console.log(`${count}回クリックされました`)
    },[])

    return (
        <>
        <p>{`${count}回クリックされました`}</p>
        {/* <ButtonGroup color="primary" aria-label="outlined primary button group"> */}
            <Button sx={{
                w:"250px",
                borderRadius:"120px"
            }}  onClick={()=>setCount((prev) => prev + 1)}>
                ボタン
            </Button>
            <Button onClick={()=>setCount(0)}>
                リセット
            </Button>
        {/* </ButtonGroup> */}
        </>
    )
} 

export default EffectFunc

