import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Home() {
  const [name,setName]=useState("")
  const [data,setData]=useState([])
  let dispach=useDispatch()
  const users = useSelector((state) => state.users.datas);
  useEffect(()=>{
    setData(users)
  },[users])
  console.log(users)
  function qidiruv(qidir){
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(qidir.toLowerCase())
    );
    setData(filteredUsers)
  }
  function udalit(e){
    dispach({ type: 'REMOVE', payload: e })
  }
  return (
    <div className='w-[100%] '>
        <div className='px-10'>
            <div className='flex w-[100%] items-center gap-4 border-[#030ffd] border-solid border-b-[1px] pb-5 pt-2'>
                <img className='w-10' src="   https://cdn-icons-png.flaticon.com/512/10316/10316182.png " alt="" />
                <input value={name} onChange={(e)=>{qidiruv(e.target.value),setName(e.target.value)}} className='focus:outline-none focus:ring-0 focus:border-transparent w-[70%] text-[20px]' type="text" placeholder='Nomi bo"yicha qidirish'/>
            </div>
            <div className='overflow-y-auto h-[89vh]'>
              <h2 className='py-5 font-[600] text-[22px]'>Product</h2>
            <div className='flex flex-wrap justify-around gap-[2vh] '>
              {data&&data.map((e,index)=>(
                 <div key={index} className="bg-white w-[300px] text-[#6c6b6b] drop-shadow-md" >
                 <div className="w-full h-[200px] relative"           >
                   <img className="w-full h-full p-1 rounded-[10px]" src={e.img} alt={e.name} />
                   <button className=' absolute w-9  h-9 bg-[#00000028]  flex items-center justify-center rounded-[50px] top-0 m-2 hover:bg-[#ffffff7e] left-0'> <img className='w-5' src="   https://cdn-icons-png.flaticon.com/512/892/892346.png " alt="" /></button>
                   <button onClick={()=>{udalit(e.id)}} className='absolute  w-9  h-9 bg-[#00000028] flex items-center justify-center rounded-[50px] m-2 top-0 hover:bg-[#ffffff7e] right-0'><img className='w-5' src="   https://cdn-icons-png.flaticon.com/512/8001/8001499.png " alt="" /></button>
                 </div>
                 <div className="p-2">
                   <h3>{e.name}</h3>
                   <p className="text-[10px]">{e.text}</p>
                   <div className="flex justify-between text-[14px] font-[700]">
                     <p>{e.narh}$</p>
                     <p>{e.chegirma}$</p>
                   </div>
                     <button className=" w-full bg-[#0d00ff] h-[30px] text-white rounded-[5px]">Sotib olish</button>
                   
                 </div>
                </div>
              ))}
            </div>
            </div>
        </div>
    </div>
  )
}

export default Home