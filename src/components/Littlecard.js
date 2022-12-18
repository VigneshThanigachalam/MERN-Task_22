import React from 'react'
import { Littlecarditem } from './Littlecarditem'
export const Littlecard = () => {
  return (
<div className='row d-flex'>
<Littlecarditem title="Earnings (Monthly)" cost="$40,000" borderColor="blue"/>
<Littlecarditem title="Earnings (Annual)" cost="$2,15,000" borderColor="green"/>
<Littlecarditem title="Tasks" cost="50%" borderColor="lightblue" />
<Littlecarditem title="Pending Requests" cost="18" borderColor="orange" />
    </div>
  )
}
