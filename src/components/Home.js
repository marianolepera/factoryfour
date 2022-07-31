import React, { useState, useEffect } from 'react';
import Header from './Header';
import Card from "./Card"
import Spinner from './Spinner';
import { getApis } from '../services';
import { Grid } from '@mui/material';

export default function Home(){

    const INTERVAL_TIME=15000
    const [apiFactoryList, setapiFactoryList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getApiFactoryList = async () => {
        const data = await getApis();
        setapiFactoryList(data);
        setIsLoading(false);
    };

    useEffect(() => {
        getApiFactoryList()
        const interval = setInterval(() => {
            getApiFactoryList()
        }, INTERVAL_TIME);

        //avoid memory leak
        return () => clearInterval(interval);
      }, []);

    if (isLoading) return <Spinner />;
    
    return (
        <div style={{backgroundColor:"#d3cecec0"}}>
            <Header/>
            <Grid
                container 
                spacing={{ xs: 2, md: 3 }} 
                columns={{ xs: 4, sm: 8, md: 12 }}
            >
                {apiFactoryList.map((api, index) =>
                 <Grid item xs={12} sm={4} md={2} lg={2} key={index}>  
                    <Card api={api}/>
                </Grid>
                  )}
            </Grid>
        </div>
    )

}