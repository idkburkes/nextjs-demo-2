
import CreateForm from './CreateForm'
import { useState } from 'react'
import ReportTable from './ReportTable'
import Header from './Header'
import Footer from './Footer'


export default function AdminDisplay() {

    const [data, setData] = useState([])


    const handleSubmit = (newData) => {
        setData([...data, newData])
    }

    return(
        <div className="min-h-screen">
            <Header title={"Cookie Stand Admin"}/>
            <div className="flex my-10 mx-auto items-center justify-center">
                    <CreateForm  
                        title={"Create Cookie Stand"}
                        handleSubmit={handleSubmit}
                        data={data}>
                    </CreateForm>
            </div>
            <div className="flex items-center justify-center">
                <ReportTable data={data}></ReportTable> 
            </div>
            <Footer amountLocations={8}> </Footer>
        </div>
    )
}