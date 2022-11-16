import { Button } from "../components/Button";
const History = ()=>{
    const alertFunc = ()=> alert('We Will Back Soon. Thank You')
    return <div class="h-screen bg-gradient-to-b from-blue-500 to-sky-300">
        <Button onClick={alertFunc}>
        <div>
          <div>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-20 h-20 text-yellow-400">
                  <path stroke-linecap="round" stroke-linejoin="round"
                     d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
                 <h1 class="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-5xl xl:text-6xl dark:text-white">We’ll be back soon!</h1>
                 <p className="text-center text-gray-100">
                   Sorry. We’re having some maintenance at the moment.   
                 </p>      
         </div>
        </Button>
    </div>
}

export default History;