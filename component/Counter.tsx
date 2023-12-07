import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootSate, AppDispatch } from '../state/store'
import { increment, decrement, incrementByAmount, incrementAsync } from '../state/counter/couterSlice'

const Counter =()=>{
   const count = useSelector((state:RootSate)=>state.counter.value)
   const dispatch = useDispatch<AppDispatch>()
   return (
      <div>
<h1>Counter</h1>
<h2>{count}</h2>
<button className='btn btn-primary' onClick={()=>{dispatch(increment())}}>+</button>
<button  className='btn btn-primary'  onClick={()=>{dispatch(decrement())}}>-</button>
<button  className='btn btn-primary'  onClick={()=>{dispatch(incrementByAmount(8))}}>+</button>
<button  className='btn btn-primary'  onClick={()=>{dispatch(incrementByAmount(8))}}>[+]</button>
      </div>
   )
}

export default Counter