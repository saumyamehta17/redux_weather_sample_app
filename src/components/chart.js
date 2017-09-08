import React from 'react';
import {Sparklines, SparklinesLine} from 'react-sparklines';
import _ from 'lodash';

function average(data) {
    return _.round(_.sum(data)/data.length)
}
const Chart = function(props){
    return(
        <div>
            <Sparklines data={props.data}>
                <SparklinesLine color={props.color}/>
            </Sparklines>
            <div>{average(props.data)}</div>
        </div>
    )
};
export default  Chart