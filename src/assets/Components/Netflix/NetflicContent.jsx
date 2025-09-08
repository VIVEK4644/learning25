import React from 'react'
import { useParams } from 'react-router'

function NetflicContent() {
    //use wildcard --> value 
    var name = useParams().name
  return (
    <div>
        <h1>NetflicContent {name}</h1>
    </div>
  )
}

export default NetflicContent