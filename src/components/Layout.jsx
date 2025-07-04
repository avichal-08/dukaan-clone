import { Analysis } from './Analysis'
import { Navbar } from './Navbar'
import { Overview } from './Overview'
import { Transaction } from './Transaction'
import { Buttons } from './Buttons'
import { Order } from './Order'
import { Avichal } from './Avichal'
export function Layout(){
return(
    <div className='flex-grow bg-gray-50 h-full ml-56'>
      <Navbar/>
      <Overview/>
      <Analysis/>
      <Transaction/>
      <Buttons/>
      <Order/>
      <Avichal/>
    </div>
)
}