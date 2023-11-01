import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { selectById } from './slice'
import {useSelector, useDispatch} from 'react-redux'
import { fetchData } from './slice'

function Child() {
    const {id} = useParams()
    const data = useSelector((state)=>selectById(state, Number(id)))
    const status = useSelector(state=>state.test.status)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(status === 'idle'){
            dispatch(fetchData())
        }
        console.log(status)
    },[dispatch,status])

    if(!data){
        return(
            <div>
                <h1>item not found</h1>
            </div>
        )
    }

  return (
    <div>
    <h1>{data.name}</h1>
    </div>
  )
}

export default Child