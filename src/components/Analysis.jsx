import {Revenue} from "./Revenue"
import {Pending} from "./Pending"
import {Processed} from "./Processed"
export function Analysis(){
    return(
        <div className='flex mt-4'>
        <div className='w-100'><Revenue/></div>
        <div className='w-100'><Pending/></div>
        <div className='flex-grow'><Processed/></div>
      </div>
    )
}