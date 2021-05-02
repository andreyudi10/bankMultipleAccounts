import React,{ useEffect, useState } from 'react'
import dataLihat from './data.json'
import { useHistory} from 'react-router-dom'
import {MDBTable, MDBTableBody,MDBTableHead} from 'mdb-react-ui-kit'
import styles from './Home.module.css'
function Home(props) {    
    let history = useHistory()
    const [data,setData] = useState(dataLihat.data)
    const [search, setSearch] = useState('')
    const [filtered, setFiltered]=useState([])
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
          setFiltered(results);
    }        
    ,[search])
    

    // console.log(props.data)
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

    const template =filtered.map((array,index)=>(                
        <tr nama={array.accountNumber} key={index.toString()}>
            <th scope='row'>{array.accountNumber}</th>
            <th scope='row'>{array.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</th>
            <th scope='row'>{array.currency}</th>                         
            <th scope='row'>{array.lastTransactionDate}</th>                         
        </tr>                                            
    ))
    return(
        <div>
            <h1 className={styles.title}>                
                Helo Mr Many Account
            </h1>            
            <input type="text" value={search} onChange={handleChange} placeholder="search"></input>
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