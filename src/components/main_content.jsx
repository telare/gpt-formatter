import { useRef, useState } from "react";

function Main() {
    const inputRef = useRef('')
    const alertRef = useRef('')
    const bgRef = useRef(null)
    const [currentTheme, themeChange] = useState('To dark theme')
    const regexp = new RegExp(/[\\/###**]/, 'g');
    const regexp2 = new RegExp(/([a-zA-Z])\1+/,'g')
    function input_edit() {
        if(inputRef.current.value.match(regexp) !== null ){
            inputRef.current.value = inputRef.current.value.replace(regexp,'')
            
        }
        if (inputRef.current.value.match(regexp2) !== null){
            inputRef.current.value = inputRef.current.value.replace(regexp2,'$1')
        }
        
    }
    function copy(){
        if(inputRef.current.value !=0){
            navigator.clipboard.writeText(inputRef.current.value);
            alertRef.current.innerText = 'Copied!'
        }
    } 
    
    
    function input_reset() {
        inputRef.current.value = '';
    }
    function themeChange(){
        
    }
    

    return (
        <div className="bg-slate-200 min-h-screen flex flex-col justify-center" ref={bgRef}>
            <div className=" min-w-screen h-6 flex justify-end mb-4 mr-5">
                <button className="mr-3 bg-slate-300 rounded-md" onClick={themeChange}>{currentTheme}</button>
  
            </div>
            <div className="flex self-center">
                <input type="text" name="" id="user_input" placeholder="paste here" className="rounded-xl border-black  border-2 h-80 w-96 placeholder:top-1 placeholder:left-1  placeholder:absolute   autofocus" ref={inputRef}/>
            </div>
            <div className="flex justify-center self-center my-5">
                <button className="rounded-md border bg-black text-white mr-3 w-20" onClick={input_edit}>Format</button>
                <button className="rounded-md border bg-black text-white mr-3 w-20" onClick={copy} >Copy</button>
                <button className="rounded-md border-2 bg-black text-white w-20 " onClick={input_reset}>Reset</button>
            </div>
            <div className='w-12 h-5  self-center' ref={alertRef}></div>
    </div>
  )
    
}
export default Main