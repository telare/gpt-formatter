import { Link } from 'react-router-dom'; 
 function Nav() {
    return (
        <div>
        <div className="bg-gray-900 h-12 flex justify-between text-white font-medium ">
          <h1 className="text-3xl mt-1">FORMATTER</h1>
          <div>
            <div className="flex mt-3 mr-20 2xl:mr-2 max-lg:mr-1">
               <Link to='/' className='mr-2'>Home</Link>
              <a href="https://github.com/telare/gpt-formatter" target="_blank" rel="noopener noreferrer " className='mr-2'>GitHub</a>
            </div>
          </div>
        </div>
    </div> 
  )
    
}
export default Nav