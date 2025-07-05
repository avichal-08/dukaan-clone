import { FaChevronDown } from "react-icons/fa6";
import { Options } from "./Options";
import { CiWallet } from "react-icons/ci";
export function Sidebar(){
    return(
        <div style={{backgroundColor:"#131f38"}} className="h-screen w-56 fixed">
            <div className="flex pt-5 pl-5">
                <div className="bg-white h-11 w-11 text-sm pt-[10px] pl-[4px] rounded">𝓐𝓿𝓲</div>
                <div className="text-white pl-3">
                    <p>Avichal</p>
                    <a href="" className="underline text-sm">Vist Store</a>
                    </div>
                    <div className="pt-3 pl-14 text-white"><FaChevronDown /></div>
            </div>
            <Options/>
            <div className="flex bg-gray-700 w-46 h-15 mt-25 ml-4 rounded">
                <div className="text-white bg-gray-600 w-10 m-3 p-1 rounded"><CiWallet size={30}/></div>
                <div className="text-white">
                    <p className="text-sm mt-2">Available Credits</p>
                    <p className="font-medium">224.10</p>
                </div>
            </div>
        </div>
    )
}