import React from 'react'

const Type = ({type, damageValue}) => {

  const bg = `bg-${type}`;
  return (
    <div className={`${bg} h-[1.5rem] py-1 px-3 rounded-2xl font-bold text-[0.6rem] text-zinc-800 leading-[0.8rem] capitalize flex gap-1 justify-center items-center`}
    >
      <span>{type}</span>
      {damageValue && (
        <span className='bg-zinc-200/40 p-[.125rem] rounded'>
          {damageValue}
        </span>
      )}
    </div>
  )
}

export default Type