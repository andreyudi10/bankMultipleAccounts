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
    const hasil = data.filter((aray)=>aray.accountNumber==id)                  
    const [currency,setCurrency] = useState(hasil[0].currency)      

    const ulang =hasil[0].details.map((value,key)=>        
        <tr >
            <th scope='row'>{value.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</th>
            <th scope='row'>{value.date}</th>
            <th scope='row'>{currency}</th>                         
            <th scope='row'>{value.debit}</th>
            <th scope='row'>{value.credit}</th>
            <th scope='row'>{value.transactionnarative}</th>
        </tr>                            
    )
    // useEffect(()=>
    //     console.log(data)
    // ,[])
    return(
        <div>
            <h1 className={styles.title}>
                Detail Bank                            
            </h1>
            <Link to="/">
                <MDBBtn className={styles.backButton}>
                    balik
                </MDBBtn>                
            </Link>
            <MDBTable hover>
            <MDBTableHead className="bg-primary shadow-1-strong text-light">
                <tr>
                    <th scope='col'>Value</th>
                    <th scope='col'>Date</th>
                    <th scope='col'>Currency</th>                    
                    <th scope='col'>Debit</th>                    
                    <th scope='col'>Credit</th>                    
                    <th scope='col'>Transaction Narrative</th>                    
                </tr>
            </MDBTableHead>

            <MDBTableBody>
                {ulang}
            </MDBTableBody>
        </MDBTable>                     
        </div>
    )
}

export default DetailBank;

