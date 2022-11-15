import { NavLink, Outlet } from "react-router-dom";
import searchBar from './Search';

export default function Layout(){
    return <>
  <div>
    <nav class="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-3xl tracking-tight">Digitalize Clinic</span>
      </div>


      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-l lg:flex-grow">
          <a href="#responsive-header" class="text-lg block mt-4 lg:inline-block lg:mt-0 text-sky-200 hover:text-white mr-8 ml-5">
            <NavLink className={({isActive, isPending})=>{
                return isActive?"active":isPending?"pending":""}}
                to={'patients'}>
                Patients
            </NavLink> 
          </a>

          <a href="#responsive-header" class="text-lg block mt-4 lg:inline-block lg:mt-0 text-sky-200 hover:text-white mr-8">
            <NavLink className={({isActive, isPending})=>{
                        return isActive?"active":isPending?"pending":""}}
                        to={'history'}>
                        History
            </NavLink>
          </a>

      <div href="#responsive-header" class="text-lg block mt-4 lg:inline-block lg:mt-0 text-sky-200 hover:text-white mr-8">
        <a href="#responsive-header" class="text-lg block mt-4 lg:inline-block lg:mt-0 text-sky-200 hover:text-white mr-8 ml-5">
          <form class="flex items-center">
            <div class="relative w-full">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              </div>
              <input type="text" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-white dark:border-blue dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required=""/>
              </div>
              <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </button>
          </form>
          <NavLink className={({isActive, isPending})=>{return isActive?"active":isPending?"pending":""}}
                        to={'searchBar'}>
          </NavLink>
        </a>
        </div>
      </div>


    <div>
      <a href="#responsive-header" class="text-lg block mt-4 lg:inline-block lg:mt-0 text-sky-200 hover:text-white mr-8 ml-5 border rounded border-white hover:border-transparent hover:text-teal-500 hover:bg-white">
        <NavLink className={({isActive, isPending})=>{
              return isActive?"active":isPending?"pending":""}}
              to={'login'}>
              Log Out
        </NavLink> 
      </a>
    </div>
  </div>
</nav> 
</div>

<div className="flex flex-row">
  <div id="detiails" className="w-full p-4 bg-sky">
            <Outlet/>
    </div>
</div>
        
</>
}

