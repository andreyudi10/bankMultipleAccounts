import React,{ useEffect, useState } from 'react'
import dataLihat from './data.json'
import { useHistory} from 'react-router-dom'
import { MDBBtn } from 'mdb-react-ui-kit';
import {MDBTable, MDBTableBody,MDBTableHead} from 'mdb-react-ui-kit'
function Home(props) {    
    let history = useHistory()
    const [data,setData] = useState(dataLihat.data)
    const handleClick = (e) =>(           
        history.push(`./${e.target.parentNode.getAttribute('nama')}`)        
    )
    // const aray = [
    //     {
    //         value:'andri',
    //         kentang:1                
    //     },
    //     {
    //         value:'yudi',
    //         kentang:2                
    //     },
    //     {
    //         value:'pratomo',
    //         kentang:3                
    //     },                    
    // ]
    // const getData=()=>{
    //     fetch('./data2.json'
    //     ,{
    //       headers : { 
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //        }
    //     }
    //     )
    //       .then(function(response){
    //         console.log(response)
    //         return response.json();
    //       })
    //       .then(function(myJson) {
    //         console.log(myJson);
    //       });
    //   }      

    const template =data.map((array,index)=>(
                <>
                <tr nama={array.accountNumber} key={index.toString()}>
                    <th scope='row'>{array.accountNumber}</th>
                    <th scope='row'>{array.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</th>
                    <th scope='row'>{array.currency}</th>                         
                    <th scope='row'>{array.lastTransactionDate}</th>                         
                </tr>                    
                </>

                
    ))
    return(
        <div>
            Helo Mr Many Account
            <MDBBtn color="secondary">Button</MDBBtn>
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
                    {template}
                </MDBTableBody>
            </MDBTable>            
        </div>
    )
}

export default Home;