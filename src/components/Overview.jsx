import { FaChevronDown } from "react-icons/fa6";
export function Overview(){
    return(
        <div className="flex">
            <p className="text-xl font-semibold pl-8 pt-9">Overview</p>
            <div className="bg-white h-10 mt-9 ml-208 w-34 border border-gray-300 pl-3 pt-1 flex rounded"><div className="mr-2 font-normal text-lg text-gray-500 ">This month</div><div className="pt-1"><FaChevronDown /></div></div>
        </div>
    )
}