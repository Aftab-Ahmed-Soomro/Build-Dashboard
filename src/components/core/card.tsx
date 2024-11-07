import React from 'react'

interface dataProps {
    data : {
        title : string,
        description : string,
    }
}

const Card:React.FC<dataProps> = ({data}) => {
    const {title, description} = data;
  return (
    <div className='flex justify-center items-center mb-6'>
    <div className='border-2 border-gray-500 shadow-md text-center p-5'>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
    </div>
  )
}

export default Card
