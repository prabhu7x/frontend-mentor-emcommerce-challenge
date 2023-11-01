import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { fetchData } from './slice'
import { Link } from 'react-router-dom'

function Test() {
    const dispatch = useDispatch()
    const {data, status} = useSelector(state=> state.test)
    useEffect(()=>{
        if(status === 'idle'){
           dispatch(fetchData()) 
        }
    },[])

  return (
    <div>
      {
        data.map((item)=>{
          return (
            <div key={item.id}>
              <Link to={`child/${item.id}`}>
                <h1>{item.name}</h1>
              </Link>
              {item.id}
            </div>
          );
        })
      }
    </div>
  )
}

export default Test