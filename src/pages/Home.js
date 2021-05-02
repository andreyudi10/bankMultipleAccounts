import React,{ useEffect, useState } from 'react'
import dataLihat from './data.json'
import { useHistory} from 'react-router-dom'
import {MDBTable, MDBTableBody,MDBTableHead} from 'mdb-react-ui-kit'
import styles from './Home.module.css'
function Home(props) {    
    let history = useHistory()
    const [data,setData] = useState(dataLihat.data)
    const [search, setSearch] = useState('')
    const [FilteredData, setFilteredData]=useState([])
    const handleClick = (e) =>(           
        history.push(`./${e.target.parentNode.getAttribute('nama')}`)        
    )
    const handleChange = (e) => {        
        setSearch(e.target.value)
    }    

    useEffect(()=>{        
        const results = data.filter(data =>
            data.currency.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
            data.accountNumber.toString().indexOf(search.toLowerCase()) > -1 ||
            data.lastTransactionDate.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
            data.balance.toString().indexOf(search.toLowerCase()) > -1  
          );
          setFilteredData(results);
    }        
    ,[search])

    const tableBody =FilteredData.map((array,index)=>(                
        <tr nama={array.accountNumber} key={index.toString()}>
            <th scope='row'>{array.accountNumber}</th>
            <th scope='row'>{array.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</th>
            <th scope='row'>{array.currency}</th>                         
            <th scope='row'>{array.lastTransactionDate}</th>                         
        </tr>                                            
    ))
    return(
        <div className={styles.area}>
            <h1 className={styles.title}>                
                Welcome Mr. Many Account
            </h1>            
            <input type="text" value={search} onChange={handleChange} placeholder="Search by anything"></input>
            <MDBTable hover>
                <MDBTableHead className="bg-primary shadow-1-strong text-light">
                    <tr>
                        <th scope='col'>Account Number</th>
                        <th scope='col'>Balance</th>
                        <th scope='col'>Currency</th>                    
                        <th scope='col'>Last Transaction Date</th>                    
                    </tr>
                </MDBTableHead>

                <MDBTableBody onClick={handleClick}>
                    {tableBody}
                </MDBTableBody>
            </MDBTable>            
        </div>
    )
}

export default Home;