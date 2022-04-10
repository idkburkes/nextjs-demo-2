

import { useEffect } from 'react' 


export default function ReportTable(props) {

    useEffect( () => {
            // rerender
    }, [props.data]);


    // Use this function to preserve numeric fields in JSON 
    //https://stackoverflow.com/questions/38703780/how-to-preserve-numeric-fields-in-json-stringify
    const stringifyRow = (row) => {
        return <div>{JSON.stringify(row, (key, value) => (isNaN(value) ? value : +value))} </div>
    }

    const sum = (arr) => {
        let sum = 0
        for(let i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        return sum
    }

    const emeraldRowColor = (row) => {
        if (row.index % 2 == 0) {
            return "bg-emerald-400 border border-gray-800"
        } else {
            return "bg-emerald-300 border border-gray-800"
        }
    }

    // Convert collection of objects into a list
    const listLocations = props.data.map(row =>
        <tr>
        <td className={emeraldRowColor(row)}>{row.location}</td>
        <td className={emeraldRowColor(row)}>{row.hourlySales[0]}</td>
        <td className={emeraldRowColor(row)}>{row.hourlySales[1]}</td>
        <td className={emeraldRowColor(row)}>{row.hourlySales[2]}</td>
        <td className={emeraldRowColor(row)}>{row.hourlySales[3]}</td>
        <td className={emeraldRowColor(row)}>{row.hourlySales[4]}</td>
        <td className={emeraldRowColor(row)}>{row.hourlySales[5]}</td>
        <td className={emeraldRowColor(row)}>{row.hourlySales[6]}</td>
        <td className={emeraldRowColor(row)}>{row.hourlySales[7]}</td>
        <td className={emeraldRowColor(row)}>{row.hourlySales[8]}</td>
        <td className={emeraldRowColor(row)}>{row.hourlySales[9]}</td>
        <td className={emeraldRowColor(row)}>{row.hourlySales[10]}</td>
        <td className={emeraldRowColor(row)}>{row.hourlySales[11]}</td>
        <td className={emeraldRowColor(row)}>{row.hourlySales[12]}</td>
        <td className={emeraldRowColor(row)}>{row.hourlySales[13]}</td>
        <td className={emeraldRowColor(row)}>{sum(row.hourlySales)}</td>
        </tr>
    );



    return (
        <div className="">
            <table className="w-1/2 mx-auto my-4">
                <thead>
                    <tr>
                        <th className="bg-emerald-500">Locations</th>
                        <th className="bg-emerald-500">6am</th>
                        <th className="bg-emerald-500">7am</th>
                        <th className="bg-emerald-500">8am</th>
                        <th className="bg-emerald-500">9am</th>
                        <th className="bg-emerald-500">10am</th>
                        <th className="bg-emerald-500">11am</th>
                        <th className="bg-emerald-500">12am</th>
                        <th className="bg-emerald-500">1pm</th>
                        <th className="bg-emerald-500">2pm</th>
                        <th className="bg-emerald-500">3pm</th>
                        <th className="bg-emerald-500">4pm</th>
                        <th className="bg-emerald-500">5pm</th>
                        <th className="bg-emerald-500">6pm</th>
                        <th className="bg-emerald-500">7pm</th>
                        <th className="bg-emerald-500">Totals</th>
                    </tr>
                </thead>
                <tbody>
                    {listLocations}
                </tbody>
            </table>
        </div>
    )
}