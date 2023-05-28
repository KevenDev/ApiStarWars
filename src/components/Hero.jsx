import React, { useEffect, useState } from 'react'
import star from '../assets/starwars.jpg'
import starIcon from '../assets/staricon.png'
import {Input, Pagination} from 'antd';
const {Search}= Input;


const Hero = ()=> {
  const [names, setNames] = useState([])
  const [current, setCurrent] = useState(1)
  const [query, setQuery] = useState('')

  const onSearch = (value) => setQuery(value);
  const onChange = (page) => setCurrent(page)


  useEffect(() => {
    fetch(`https://swapi.dev/api/people/?page=${current}`)
      .then((res) => res.json())
      .then((response) => {
        setNames([response]);
        console.log(response);
      });
  }, [current]);
  
  useEffect(()=>{
    fetch(`https://swapi.dev/api/people/?search=${query}`)
    .then((res) => res.json())
      .then((response) => {
        setNames([response]);
        console.log(response);
      })
    },[query])

  return (
    <>
  <div className="relative">
      <div
        className="absolute inset-0  bg-black bg-opacity-20 h-[calc(100vh-160px)]"
        style={{ backgroundImage: `url(${star})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
       /> 
      <div className='bg-black opacity-80 flex w-screen justify-center p-4  '>
        <Search
          placeholder="Qual personagem?"
          allowClear
          enterButton="Search"
          size="medium"
          className='bg-black w-60 opacity-100 text-white rounded-lg'
          onSearch={onSearch}
        />
      </div>
    <div className="absolute w-full z-100 h-[calc(100vh-160px)] bg-black opacity-10"></div>
      
      <div className="relative h-[100%] z-10 p-4 grid md:grid-cols-4 grid-cols-2 gap-2 place-items-center ">
        {names.length > 0 &&
          names[0].results.map((item) => (
            <div
              key={item.name}
              className="2xl:w-96 2xl:h-40 xl:w-80 xl:h-26 lg:w-52 lg:h-24 md:w-50 md:h-15 w-40 h-[4rem]  bg-black bg-opacity-60 p-2 text-center flex flex-col text-white rounded-lg"
            >
              <img className="xl:h-20 w-11 h-9 mx-auto bg-opacity-30" src={starIcon} alt="" />
              <h2 className="2xl:text-xl font-bold text-sm">{item.name}</h2>
            </div>
          ))}
      </div>
      <div className="relative flex justify-center items-center">
        <Pagination current={current} onChange={onChange} total={90} className="bg-black bg-opacity-40" showSizeChanger={false} itemRender={(page, type, originalElement) => {
        if (type === 'page') {
          return <div className=" bg-black  text-white rounded">{page}</div>;
        }
        return originalElement;
      }}/>;
      </div>
    </div>
  </>
  )
}

export default Hero;
