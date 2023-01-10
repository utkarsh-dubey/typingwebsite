import React, { createRef, useEffect, useRef } from 'react'

const TypingBox = ({words}) => {

    const inputRef = useRef(null);

    const wordSpanRef = Array(words.length).fill(-1).map(i=>createRef());
    console.log(wordSpanRef);


    const handleKeyDown = (e)=>{
        console.log(e);
    }

    const focusInput = ()=>{
        inputRef.current.focus();
    }   

    useEffect(()=>{
        focusInput();
    },[]);


  return (
    <div>
        <div className="type-box" onClick={focusInput}>
            <div className="words">
                {words.map((word, index)=>(
                    <span className="word" ref={wordSpanRef[index]}>
                        {word.split('').map((char)=>(
                            <span className='char'>{char}</span>
                        ))}
                    </span>
                ))}
            </div>
        </div>
        <input
            type='text'
            className='hidden-input'
            onKeyDown={handleKeyDown}
            ref={inputRef}
        />
    </div>
  )
}

export default TypingBox