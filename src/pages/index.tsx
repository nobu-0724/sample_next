// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

// import { useState } from 'react';
// const inter = Inter({ subsets: ['latin'] })

// export default function Home() {

// const name = "北野"

// const [count, setCount] = useState(0);
// const [multiplication, setMultiplication] = useState(0);


//   return (
//     // <>
//     //   <p style={{color:"#f00"}}>Next.jsを始めよう</p>
//     //   <p>おはよう{name}</p>
//     //   <button>押す</button>
//     // </>

//     <>
//     <p>{count}</p>
//     <button onClick={() => setCount(count + 1)}>
//       +
//     </button>
//     <button onClick={() => setCount(cnt => cnt -1)}>
//       -
//     </button>
//     <input type="number" />
//     <button onClick={() => setMultiplication(multiplication * 3)}></button>
//     </>
//   )
// }

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

import { useState, ChangeEvent , useEffect} from 'react';
import { Spinner } from '@chakra-ui/react'
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [count, setCount] = useState(0);
  const [multiplication, setMultiplication] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // setInputValue(parseInt(e.target.value, 10));
    const a = e.target.value
    const newValue = parseInt(e.target.value, 10);
    // newValue が正数または 0 の場合のみ setInputValue を実行
    if (!!newValue && newValue >= 0) {
      setInputValue(newValue);
    }
  };

  const handleMultiply = () => {
    setMultiplication(count * inputValue);
  };


  return (
    <>
    <Spinner size="xl"/>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
      <button onClick={() => {
        if(count > 0){

          setCount(cnt => cnt -1)}
        }
      }>
        -
      </button>
      <input type="number" value={inputValue} onChange={(e) =>{handleInputChange(e)} } />
      <button onClick={handleMultiply}>
        Multiply
      </button>
      <p>Multiplication Result: {multiplication}</p>

      <Link href="/list" >Listへ</Link>
    </>
  )
}
