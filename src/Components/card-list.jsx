import React from 'react'
import Card from './card';

const Cardlist = (props) => {
  return (
    <div className="h-full w-full flex flex-row flex-wrap gap-4 justify-center  ">
        {props.presidents.map(president => (
            <Card key={president.order} president={president}/>
          ))}
    </div>
  )
}

export default Cardlist;