import React, { createRef, useEffect, useRef, useState } from 'react'

const TypingBox = ({words}) => {

    const [currCharIndex, setCurrCharIndex] = useState(0);
    const [currWordIndex, setCurrWordIndex] = useState(0);

    const inputRef = useRef(null);

    const wordSpanRef = Array(words.length).fill(-1).map(i=>createRef());

    const handleKeyDown = (e)=>{
        
        const allChildrenSpans = wordSpanRef[currWordIndex].current.childNodes;

        if(e.keyCode === 32){
            //space is pressed


            if(allChildrenSpans.length<=currCharIndex){
                // remove current-right cursor
                allChildrenSpans[currCharIndex-1].classList.remove('current-right');
            }
            else{
                //remove my current cursor
                allChildrenSpans[currCharIndex].className = 'char';
            }

            wordSpanRef[currWordIndex+1].current.childNodes[0].className = 'char current';
            setCurrCharIndex(0);
            setCurrWordIndex(currWordIndex+1);

            return;
        }

        if(e.keyCode === 8){
            //backspace is pressed


            if(currCharIndex!==0){

                if(currCharIndex===allChildrenSpans.length){
                    allChildrenSpans[currCharIndex-1].className = 'char current';
                    setCurrCharIndex(currCharIndex-1);
                    return;
                }

                allChildrenSpans[currCharIndex].className = 'char';
                allChildrenSpans[currCharIndex-1].className = 'char current';
                setCurrCharIndex(currCharIndex-1);

            }

            return;
        }

        if(currCharIndex === allChildrenSpans.length){
            // add new character after the word

            let newSpan = document.createElement('span'); // -> <span></span>
            newSpan.innerText = e.key;
            newSpan.className = 'char incorrect current-right extra';
            allChildrenSpans[currCharIndex-1].classList.remove('current-right');
            wordSpanRef[currWordIndex].current.append(newSpan);
            setCurrCharIndex(currCharIndex+1);

            return;
        }


        if(e.key === allChildrenSpans[currCharIndex].innerText){
            allChildrenSpans[currCharIndex].className = 'char correct';
        }
        else{
            allChildrenSpans[currCharIndex].className = 'char incorrect';
        }

        if(currCharIndex+1 === allChildrenSpans.length){
            allChildrenSpans[currCharIndex].className+=' current-right';
        }
        else{   
            allChildrenSpans[currCharIndex+1].className = 'char current';
        }
    
        setCurrCharIndex(currCharIndex+1);


    }


    const focusInput = ()=>{
        inputRef.current.focus();
    }   

    useEffect(()=>{
        focusInput();
        wordSpanRef[0].current.childNodes[0].className = 'char current';
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