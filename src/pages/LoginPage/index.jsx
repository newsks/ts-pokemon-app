import React from 'react'

const LoginPage = () => {
  return (
    <section className='bg-gray-50 min-h-[90vh] flex items-center justify-center'>
      <div className='bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center'>
        <div className='md:w-1/2 px-8 md:px-16'>
          <h2 className='font-bold text-4xl text-[#002D74]'>Pokemon</h2>
          <p className='font-bold text-s mt-7 text-[#002D74]'>포켓몬 사이트에 오신걸</p>
          <p className='font-bold text-s mt-2 text-[#002D74]'>환영합니다.</p>
          <p className='font-bold text-xl mt-5 text-[#002D74]'>로그인 해주세요.</p>
        </div>
        <div className='md:block hidden w-1/2'>
          <img
            alt='login'
            className='rounded-2xl'
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
          />
        </div>
      </div>
    </section>
  )
}

export default LoginPage