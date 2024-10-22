import { useRef, useState } from "react";



function Main() {
    const inputRef = useRef('')
    const resultRef = useRef('')
    const alertRef = useRef('')

    const regexp = new RegExp(/[\\/###**]/, 'g');
    const regexp2 = new RegExp(/([a-zA-Z])\1+/, 'g')

    
    const [currentTheme, setTheme] = useState('To dark theme')
    const [currentBg, setBg] = useState('bg-slate-200')
    const [currentBtnBg, setBtnBg] = useState('bg-black')
    const [currentFontBtnBg, setFontBtnBg] = useState('text-white')

    const [result, setResult] = useState('')
    const [copyAlert, setCopyAlert] = useState('')
   
    function input_edit() {
        let inputValue = inputRef.current.value
        if(inputValue.match(regexp) || inputValue.match(regexp2)!== null  ){
            inputValue = inputValue.replace(regexp, '')
            inputValue = inputValue.replace(regexp2, '')
            setResult(inputValue)
        }else setResult(inputValue)
        
        
    }

    // change this to setTimeOut

    function copy(){
        if(inputRef.current.value != undefined && resultRef.current.value != undefined){
            navigator.clipboard.writeText(resultRef.current.value);
            setCopyAlert('Copied!')
               setTimeout(() => {
                        setCopyAlert('')
                }, 3000);
            
        }
    } 
    
    
    function input_reset() {
        inputRef.current.value = '';
        setResult('')
    }


    function themeChange(){
        setTheme(prevState => prevState == 'To dark theme'? 'To light theme': 'To dark theme')
        setBg(prevState => prevState == 'bg-slate-200'? 'bg-black': 'bg-slate-200')
        setBtnBg(prevState => prevState == 'bg-black'? 'bg-slate-200': 'bg-black')
        setFontBtnBg(prevState => prevState == 'text-white'? 'text-black':'text-white')
    }
    
    

    return (
        <div className={`min-h-screen flex flex-col justify-center  ${currentBg}`} >
            <div className=" min-w-screen h-6 flex justify-end mb-4 mr-5">
                <button className="mr-3 bg-slate-300 rounded-md" onClick={themeChange}>{currentTheme}</button>
  
            </div>
            <div className="flex justify-center">

                <div className="flex self-center">
                    <textarea id="result" rows="5" cols="33" className="rounded-xl border-black border-2 h-80 w-96 mr-10" ref={inputRef}>
                    </textarea>
                </div>

                <div className="flex self-center">
                    <textarea id="result" rows="5" cols="33" className="rounded-xl border-black border-2 h-80 w-96" value={result}>
                    </textarea>
                 
                </div>

            </div>
            <div className="flex justify-center self-center my-5">
                <button className={`rounded-md border ${currentBtnBg} ${currentFontBtnBg} mr-3 w-20`} onClick={input_edit}>Format</button>
                <button className={`rounded-md border ${currentBtnBg} ${currentFontBtnBg} mr-3 w-20`} onClick={copy} >Copy</button>
                <button className={`rounded-md border-2 ${currentBtnBg} ${currentFontBtnBg} w-20`} onClick={input_reset}>Reset</button>
            </div>
            <div className='w-12 h-5  self-center'>
                <div>{copyAlert}</div>
            </div>
    </div>
  )
    
}
export default Main