import React, { createRef, useEffect, useRef, useState } from 'react'
import { useTestMode } from '../Context/TestModeContext';
import UpperMenu from './UpperMenu';

const TypingBox = ({ words }) => {

    const {testTime} = useTestMode();
    const [currCharIndex, setCurrCharIndex] = useState(0);
    const [currWordIndex, setCurrWordIndex] = useState(0);
    const [countDown, setCountDown] = useState(testTime); // -> 15s countdown
    const [testStart, setTestStart] = useState(false);
    const [testEnd, setTestEnd] = useState(false);

    const inputRef = useRef(null);

    const wordSpanRef = Array(words.length).fill(-1).map(i => createRef());
    // console.log("context value",useTestMode());

    const startTimer = () => {

        const intervalId = setInterval(timer, 1000);

        function timer() {
            setCountDown((currCountDown) => {
                if (currCountDown === 1) {
                    clearInterval(intervalId);
                    setTestEnd(true);
                    return 0;
                }
                return currCountDown - 1;
            })
        }

    }

    const handleKeyDown = (e) => {

        if (!testStart) {
            startTimer();
            setTestStart(true);
        }

        const allChildrenSpans = wordSpanRef[currWordIndex].current.childNodes;
        if (e.keyCode === 32) {
            //space is pressed


            if (allChildrenSpans.length <= currCharIndex) {
                // remove current-right cursor
                allChildrenSpans[currCharIndex - 1].classList.remove('current-right');
            }
            else {
                //remove my current cursor
                allChildrenSpans[currCharIndex].className = 'char';
            }

            wordSpanRef[currWordIndex + 1].current.childNodes[0].className = 'char current';
            setCurrCharIndex(0);
            setCurrWordIndex(currWordIndex + 1);

            return;
        }

        if (e.keyCode === 8) {
            //backspace is pressed


            if (currCharIndex !== 0) {

                if (currCharIndex === allChildrenSpans.length) {
                    allChildrenSpans[currCharIndex - 1].className = 'char current';
                    setCurrCharIndex(currCharIndex - 1);
                    return;
                }

                allChildrenSpans[currCharIndex].className = 'char';
                allChildrenSpans[currCharIndex - 1].className = 'char current';
                setCurrCharIndex(currCharIndex - 1);

            }

            return;
        }

        if (currCharIndex === allChildrenSpans.length) {
            // add new character after the word

            let newSpan = document.createElement('span'); // -> <span></span>
            newSpan.innerText = e.key;
            newSpan.className = 'char incorrect current-right extra';
            allChildrenSpans[currCharIndex - 1].classList.remove('current-right');
            wordSpanRef[currWordIndex].current.append(newSpan);
            setCurrCharIndex(currCharIndex + 1);
            return;
        }


        if (e.key === allChildrenSpans[currCharIndex].innerText) {
            allChildrenSpans[currCharIndex].className = 'char correct';
        }
        else {
            allChildrenSpans[currCharIndex].className = 'char incorrect';
        }

        if (currCharIndex + 1 === allChildrenSpans.length) {
            allChildrenSpans[currCharIndex].className += ' current-right';
        }
        else {
            allChildrenSpans[currCharIndex + 1].className = 'char current';
        }

        setCurrCharIndex(currCharIndex + 1);


    }


    const focusInput = () => {
        inputRef.current.focus();
    }   

    useEffect(()=>{
        setCountDown(testTime);
    }, [testTime]);

    useEffect(() => {
        focusInput();
        wordSpanRef[0].current.childNodes[0].className = 'char current';
    }, []);


    return (
        <div>
            <UpperMenu countDown={countDown}/>
            {(testEnd) ? (<h1>Test over!</h1>) : (
                <div className="type-box" onClick={focusInput}>
                    <div className="words">
                        {words.map((word, index) => (
                            <span className="word" ref={wordSpanRef[index]}>
                                {word.split('').map((char) => (
                                    <span className='char'>{char}</span>
                                ))}
                            </span>
                        ))}
                    </div>
                </div>)}
            < input
                type='text'
                className='hidden-input'
                onKeyDown={handleKeyDown}
                ref={inputRef}/>
        </div>
    )
}

export default TypingBox