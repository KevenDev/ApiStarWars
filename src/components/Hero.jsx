import React, { useEffect, useState } from 'react'
import star from '../assets/starwars.jpg'
import yoda from '../assets/yoda.svg'
import {  Pagination  } from 'antd';

const Hero = ()=> {

  const [names, setNames] = useState([])
  const [current, setCurrent] = useState(1)

  const onChange = (page) => {
    setCurrent(page);
  };

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/?page=${current}`)
      .then((res) => res.json())
      .then((response) => {
        setNames([response]);
        console.log(response);
      });
  }, [current]);
  

  return (
    <>
  <div className="relative">
      <div
        className="absolute inset-0  bg-black bg-opacity-4 h-[calc(100vh-160px)]"
        style={{ backgroundImage: `url(${star})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
       <div className="absolute w-full h-[calc(100vh-160px)] bg-black opacity-80"></div> 
      <div className="relative z-10 p-4 grid md:grid-cols-4 grid-cols-2 gap-2 place-items-center">
        {names.length > 0 &&
          names[0].results.map((item) => (
            <div
              key={item.name}
              className="md:w-50 md:h-[6.2rem] w-40 h-[4.3rem] bg-black bg-opacity-30 p-4 text-center flex flex-col text-white rounded-lg"
            >
              <img className="xl:h-20 w-10 h-10 mx-auto bg-opacity-30" src={yoda} alt="" />
              <h2 className="text-sm">{item.name}</h2>
            </div>
          ))}
      </div>
      <div className="relative flex justify-center">
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
