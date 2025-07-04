import { CiSearch } from "react-icons/ci";
import { TbArrowsSort } from "react-icons/tb";
import { MdOutlineFileDownload } from "react-icons/md";
export function Orderid(){
    return(
        <div className="flex pt-3 pl-3 ">
            <div className="flex w-75 border border-gray-300 h-9"><div className="pl-3 pt-2 text-gray-600"><CiSearch size={18}/></div><input className="w-70 pl-2 placeholder:text-gray-400 placeholder:text-lg" placeholder="Order Id or transactions ID" /></div>
            <div className="flex ml-153 ">
                <div className="flex w-19 pl-3 pt-[2px] border border-gray-300"><div className="text-gray-500 text-lg">Sort</div><div className="pt-[6px] pl-1 text-gray-600"><TbArrowsSort /></div></div>
                <div className="ml-3 w-10 border border-gray-300 pl-1 text-gray-600"><MdOutlineFileDownload size={30} /></div>
            </div>
        </div>
    )
}