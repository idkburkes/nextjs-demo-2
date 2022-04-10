
import { useState } from 'react'



export default function CreatePanel(props) {

        const [location, setLocation] = useState('')
        const [minCustomers, setMinCustomers] = useState(0)
        const [maxCustomers, setMaxCustomers] = useState(0)
        const [avgCustomers, setAvgCustomers] = useState(0)

        const handleSubmit = (e) => {
            e.preventDefault()

              let data = {
                  location,
                  minCustomers,
                  maxCustomers,
                  avgCustomers,
                  hourlySales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
                  index: props.data.length 
              }
              props.handleSubmit(data) 
        }
        
        const updateLocation = (e) => {
            setLocation(e.target.value)
        }

        const updateMinCustomersPerHour = (e) => {
            let min = parseInt(e.target.value)
            setMinCustomers(min)
        }

        const updateMaxCustomersPerHour = (e) => {
            let max = parseInt(e.target.value)
            setMaxCustomers(max)
        }

        const updateAvgCookiesPerSale = (e) => {
            let avg = parseInt(e.target.value)
            setAvgCustomers(avg)
        }


        return (

            <div className="items-center justify-center bg-emerald-300 pt-5 px-5 w-3/4 h-56 rounded">

                <div className="justify-center items-center flex mb-5">
                    <header>
                        <h1 className="text-black text-2xl">{props.title}</h1> 
                    </header>
                </div>
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-10">
                        <label className="mr-3">
                        Location
                        </label>
                        <input onChange={updateLocation} className="w-10/12 bg-[#e7f0fe]" name="location" type="text ml-4"/>    
                    </div>

                    <div className="flex w-full">
                        <div className="bg-emerald-200 rounded items-center justify-center text-center mx-2 w-1/4">
                            <div className="grid mx-1 my-2"> 
                                <label className="text-sm w-full mb-2"> Minimum Customers per hours</label>
                                <input onChange={updateMinCustomersPerHour} />
                            </div>
                        </div>
                        <div className="bg-emerald-200 rounded items-center justify-center text-center mx-2 w-1/4">
                            <div className="grid mx-1 my-2">
                                <label className="text-sm w-full mb-2"> Maximum Customers per Hour</label>
                                <input onChange={updateMaxCustomersPerHour} />
                            </div>
                        </div>
                        <div className="bg-emerald-200 rounded items-center justify-center text-center mx-2 w-1/4">
                            <div className="grid mx-1 my-2">
                                <label className="text-sm w-full mb-2"> Average Cookies per Sale</label>
                                <input onChange={updateAvgCookiesPerSale} />                        
                            </div>
                        </div>
                        <div className="grid mx-2 w-1/4 text-center">
                            <button className="bg-[#15b981] rounded" > Create</button> 
                        </div>
                        
                    </div>
                </form>
            </div> 
        )

}