import { useRef, useState } from "react";
import MathJax from "react-mathjax2";  


function Main() {
    const inputRef = useRef('')
    //const resultRef = useRef('')

    const alertRef = useRef('')

    const regexp = new RegExp(/[\\/###**]/, 'g');
    const regexp2 = new RegExp(/([a-zA-Z])\1+/,'g')
    const [formatResult, setFotmatResult] = useState('')
    const [currentTheme, setTheme] = useState('To dark theme')
    const [currentBg, setBg] = useState('bg-slate-200')
    const [currentBtnBg, setBtnBg] = useState('bg-black')
    const [currentFontBtnBg, setFontBtnBg] = useState('text-white')
   
    function input_edit() {
        if(inputRef.current.value.match(regexp) !== null ){
            
            setFotmatResult(`${inputRef.current.value}`)
            
            //resultRef.current.value = inputRef.current.value.replace(regexp,'')
            //resultRef.current.value = `\\\(${inputRef.current.value})\\`    
        }
        // if (inputRef.current.value.match(regexp2) !== null){
        //     //resultRef.current.value = inputRef.current.value.replace(regexp2,'$1')
        // }
        
    }

    // change this to setTimeOut

    function copy(){
        if(inputRef.current.value !=0 && resultRef.current.value != 0){
            navigator.clipboard.writeText(resultRef.current.value);
        
            alertRef.current.innerText = 'Copied!'
        }
    } 
    
    
    function input_reset() {
        inputRef.current.value = '';
        resultRef.current.value = '';
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
                    <input type="text" name="" id="user_input" placeholder="Paste here" 
                    className="mr-4 rounded-xl border-black  border-2 h-80 w-96
                     placeholder:top-1 placeholder:left-1  placeholder:absolute   autofocus" ref={inputRef}/>
                </div>

                <div className="flex self-center">
                <div className="rounded-xl border-black border-2 h-80 w-96" >
                        <MathJax.Context>
                            <div>
                                <MathJax.Node inline>{formatResult}</MathJax.Node> 
                            </div>
                        </MathJax.Context>
                    </div>
                </div>

            </div>
            <div className="flex justify-center self-center my-5">
                <button className={`rounded-md border ${currentBtnBg} ${currentFontBtnBg} mr-3 w-20`} onClick={input_edit}>Format</button>
                <button className={`rounded-md border ${currentBtnBg} ${currentFontBtnBg} mr-3 w-20`} onClick={copy} >Copy</button>
                <button className={`rounded-md border-2 ${currentBtnBg} ${currentFontBtnBg} w-20`} onClick={input_reset}>Reset</button>
            </div>
            <div className='w-12 h-5  self-center' ref={alertRef}></div>
    </div>
  )
    
}
export default Main