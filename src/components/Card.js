import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import moment from "moment";

export default function CardApi({api}) {
    const{message,hostname,time,nameApi} =api
    let name = hostname?.split('-')[0] 
   
  return (
        <Card  sx={{
            marginTop:"10%",
            marginLeft:"8%", 
            marginRight:"8%",
            marginBottom:"10%",
            boxShadow: 2,
            textAlign:"center",
            minHeight:170}}>
            <CardContent>
                {hostname ? 
                <>
                    <Typography style={{fontWeight:"bold"}} variant="h5" >
                        {name?.charAt(0).toUpperCase() + name?.slice(1)}
                    </Typography>
                    <Typography style={{backgroundColor:"green",color:"white"}}>
                        {message.split(' ')[0] }
                    </Typography>
                    <Typography sx={{fontSize:14}}>
                        {hostname}
                    </Typography>
                    <Typography >
                        {moment(time).format("LTS")}
                    </Typography>
                </>
                : 
                <>
                    <Typography style={{fontWeight:"bold"}} variant="h5" >
                        {nameApi?.charAt(0).toUpperCase() + nameApi?.slice(1)}
                    </Typography>
                    <Typography style={{backgroundColor:"red",color:"white"}}>
                        Error
                    </Typography>
                    <Typography style={{color:"red"}} >
                        {message}
                    </Typography>
                </>
                }  
            </CardContent>     
        </Card>
  );
}
