import React, { useEffect, useState } from 'react'
import star from '../assets/starwars.jpg'
import yoda from '../assets/yoda.svg'
import { Pagination } from 'antd';

const Hero = ()=> {

  const [names, setNames] = useState([])
  const [activeIndex, setActiveIndex] = useState(1)

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/?page=${activeIndex}`)
      .then((res) => res.json())
      .then((response) => {
        setNames([response]);
        console.log(response);
      });
  }, [activeIndex]);
  

  return (
    <>
  <div className="relative">
      <div
        className="absolute inset-0  bg-black bg-opacity-4 h-[calc(100vh-160px)]"
        style={{ backgroundImage: `url(${star})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
       <div className="absolute w-full h-[calc(100vh-160px)] bg-black opacity-80"></div> 
      <div className="relative z-10 p-4 grid md:grid-cols-4 grid-cols-2  gap-2 place-items-center">
        {names.length > 0 &&
          names[0].results.map((item) => (
            <div
              key={item.name}
              className="w-40 h-30 bg-black bg-opacity-30 p-4 text-center flex flex-col text-white"
            >
              <img className="w-10 h-10 mx-auto bg-opacity-30" src={yoda} alt="" />
              <h2 className="text-xl">Name: {item.name}</h2>
            </div>
          ))}
      </div>
      <div className="relative mt-4 px-4 flex justify-center">
      <Pagination
      defaultCurrent={6}
      total={500}
      showSizeChanger={false}
      responsive={true}
      itemRender={(current, type, originalElement) =>
        type === 'page' ? (
          <div className="bg-black bg-opacity-80 text-white px-3  rounded">{current}</div>
        ) : (
          originalElement
        )
      }
    />
      </div>
    </div>
  </>
  )
}

export default Hero;
