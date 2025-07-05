import { CiSearch } from "react-icons/ci";
import { AiFillNotification } from "react-icons/ai";
import { FaSortDown } from "react-icons/fa";
import { FaRegCircleQuestion } from "react-icons/fa6";
export function Navbar(){
    return(
        <div className="flex p-4 bg-white border border-b-gray-300 h-17">
            <div className="flex justify-between w-58 px-4 "><p className="text-xl font-medium">Payouts</p><div className="flex font-extralight py-1"><span className="p-1 opacity-60  "><FaRegCircleQuestion /></span>How it works</div></div>
            <div className="flex bg-gray-200 w-85 ml-48 h-10 mt-0 rounded "><span className="py-3 w-8 pl-3 pr-1 text-gray-600" ><CiSearch size={18}/></span><input className="pl-2 w-77" type="text" placeholder="Search features,tutorials,etc"/></div>
            <div className="flex ml-56 pb-3"><div className="bg-gray-200 w-10 p-2 h-10 rounded-full text-gray-700"><AiFillNotification size={25}/></div><div className="bg-gray-200 w-10 px-2 pt-0.5 h-10 ml-2 rounded-full text-gray-700"><FaSortDown size={25} /></div></div>
        </div>
    )
}