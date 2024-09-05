import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Create() {
  const [name,setName]=useState('')
  const [img,setImg]=useState()
  const [chegirma,setChegirma]=useState('')
  const [narh,setNarh]=useState('')
  const [Brand,setBrand]=useState('')
  const [categori,setCategori]=useState('')
  const [text,setText]=useState('')
  let dispach=useDispatch()
  const users = useSelector((state) => state.users.datas);
  console.log(users)
  let navigeyt=useNavigate()
  function tayor(){
    let data={
      id: Date.now(),
      name,
      img,
      chegirma,
      narh,
      Brand,
      categori,
      text,
    }
    dispach({ type: 'ADD', payload: data })
    navigeyt("/")
  }
  return (
    <div className="bg-[#f0f0f0] h-[100vh] w-[100%] div-1">
      <div className="bg-[#d2d2d3fa] flex flex-col gap-[4vh] items-center justify-center">
         <div className="bg-white w-[300px] text-[#6c6b6b] drop-shadow-2xl" >
          {img&&<div className="w-full h-[200px]"           >
            <img className="w-full h-full p-1 rounded-[10px]" src={img} alt={name} />
          </div>}
          <div className="p-2">
            <h3>{name}</h3>
            <p className="text-[10px]">{text}</p>
            <div className="flex justify-between text-[14px] font-[700]">
              <p>{narh}$</p>
              <p>{chegirma}$</p>
            </div>
              <button className=" w-full bg-[#0d00ff] h-[30px] text-white rounded-[5px]">Sotib olish</button>
            
          </div>
         </div>
        <div className="flex gap-10">
          <button className="bg-[#fff] w-32 h-10 rounded-[2px]">Tozalash</button>
          <button onClick={tayor} className="bg-[#1e02f7] text-white w-32 h-10 rounded-[2px]">Tayor</button>
         </div>
      </div>
      <div className="bg-[#d2d2d3fa] flex items-center justify-center">
        <div className="bg-[#fff] w-[70%] h-[94vh] rounded-[5px] p-[30px]">
          <h2 className="font-[700] text-[23px]">Mahsulot yaratish</h2>
          <div className="flex flex-col gap-2 my-auto mt-3">
            <label
              className="flex flex-col border-[#0901ff] border-solid border-b-[1px] font-[600] "
              htmlFor=""
            >
              Mahsulot: Nomi
              <input
              onChange={(e)=>{setName(e.target.value)}}
              value={name}
                className="focus:outline-none focus:ring-0 focus:border-transparent w-full h-[40px]  pl-5 text-[17px]"
                type="text "
                placeholder="Name"
              />
            </label>
            <label
              className="flex flex-col border-[#0901ff] border-solid border-b-[1px] font-[600]"
              htmlFor=""
            >
              Mahsulot: Rasmi
              <input
              onChange={(e)=>{setImg(e.target.value)}}
              value={img}
                className="focus:outline-none focus:ring-0 focus:border-transparent w-full h-[40px]  pl-5 text-[17px]"
                type="text "
                placeholder="Image"
              />
            </label>
            <div className="flex justify-between">
              <label
                className="flex flex-col border-[#0901ff] border-solid border-b-[1px] w-[48%] font-[600]"
                htmlFor=""
              >
                Mahsulot:Narhi
                <input
                onChange={(e)=>{setNarh(e.target.value)}}
                value={narh}
                  className="focus:outline-none focus:ring-0 focus:border-transparent w-full h-[40px]  pl-5 text-[17px]"
                  type="text "
                  placeholder="Narh"
                />
              </label>
              <label
              
                className="flex flex-col border-[#0901ff] border-solid border-b-[1px] font-[600] w-[48%]"
                htmlFor=""
              >
                Mahsulot:CHegirmali narhi
                <input
                onChange={(e)=>{setChegirma(e.target.value)}}
                value={chegirma}
                  className="focus:outline-none focus:ring-0 focus:border-transparent w-full h-[40px]  pl-5 text-[17px]"
                  type="text "
                  placeholder="Chegirma"
                />
              </label>
            </div>
            <label
              className="flex flex-col border-[#0901ff] border-solid border-b-[1px] font-[600]"
              htmlFor=""
            >
              Brend
              <input
              onChange={(e)=>{setBrand(e.target.value)}}
              value={Brand}
                className="focus:outline-none focus:ring-0 focus:border-transparent w-full h-[40px]  pl-5 text-[17px]"
                type="text "
                placeholder="Brend"
              />
            </label>
            <label className="flex flex-col font-[600]" htmlFor="">
              Categoria
              <select
              onChange={(e)=>{setCategori(e.target.value)}}
              value={categori} className="select select-bordered w-full border-[#0901ff] border-solid border-b-[1px] ">
                <option disabled defaultValue>
                Categoria tanlang
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </label>
            <label
              className="flex flex-col border-[#0901ff] border-solid border-b-[1px] font-[600]"
              htmlFor=""
            >
              Malumod
              <textarea
              onChange={(e)=>{setText(e.target.value)}}
              value={text}
                className=" border-solid border-[#1900ff] border-[1px] w-full pt-[20px] pl-[20px] h-[27vh]"
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Mahsulot haqida toliq malumod"
              ></textarea>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
