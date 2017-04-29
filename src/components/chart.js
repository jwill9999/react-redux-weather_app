import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'; 
     
    

const Chart = props => {  

    //calculate average values  
    function average(data) {
        return data.reduce(function (acc, val) {
            let total = acc + val / props.data.length;
            return Math.floor(total)
        }, 0);
    }

    //sparklines external  library 
    return (
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type='avg' />
            </Sparklines>
            <div>Avg : {average(props.data)} {props.units}</div>

        </div>
    )
}




export default Chart