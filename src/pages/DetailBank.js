import React, { useEffect, useState } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useParams} from "react-router-dom";
import { Link } from 'react-router-dom'
import dataLihat from './data.json'
import {MDBTable, MDBTableBody,MDBTableHead} from 'mdb-react-ui-kit'
import styles from './DetailBank.module.css'

function DetailBank(props) {    
    const {id} = useParams()
    const [data,setData] = useState(dataLihat.data)    
    const objekFilteredData = data.filter((aray)=>aray.accountNumber.toString()===id)
    const arrayFilteredData = objekFilteredData[0].details    
    const [hasil,setHasil]=useState(arrayFilteredData)
    const [searchTerm,setSearchTerm]=useState('')
    const [filtered,setFiltered] = useState()
    const [currency,setCurrency] = useState(objekFilteredData[0].currency)     
    useEffect(()=>{
        const results = arrayFilteredData.filter((value)=>
            value.transactionnarative.indexOf(searchTerm.toLowerCase()) > -1
        )        
        setFiltered(results)
        console.log(filtered)
    }
    ,[searchTerm])
    
    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const tableBody = filtered && filtered.map((value,key)=>        
        <tr key={key.toString()}>
            <th scope='row'>{key+1}</th>
            <th scope='row'>{value.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</th>
            <th scope='row'>{value.date}</th>
            <th scope='row'>{currency}</th>                         
            <th scope='row'>{value.debit}</th>
            <th scope='row'>{value.credit}</th>
            <th scope='row'>{value.transactionnarative}</th>
        </tr>                            
    )    
    return(
        <div className={styles.area}>
            <h1 className={styles.title}>
                Detail Bank                            
            </h1>
            <Link to="/">
                <MDBBtn className={styles.backButton}>
                    back
                </MDBBtn>                
            </Link>
            <input type="text" placeholder="Search by narative" className={styles.input} onChange={handleChange}>
                
            </input>
            <MDBTable hover>
            <MDBTableHead className="bg-primary shadow-1-strong text-light">
                <tr>
                    <th scope='col'>No</th>
                    <th scope='col'>Value</th>
                    <th scope='col'>Date</th>
                    <th scope='col'>Currency</th>                    
                    <th scope='col'>Debit</th>                    
                    <th scope='col'>Credit</th>                    
                    <th scope='col'>Transaction Narrative</th>                    
                </tr>
            </MDBTableHead>

            <MDBTableBody>
                {tableBody}
            </MDBTableBody>
        </MDBTable>                     
        </div>
    )
}

export default DetailBank;

