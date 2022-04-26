import React from 'react'

const Footer = () => {
  return (
    <div>
        <p className='text-sm mt-[104px] transition opacity-75'>
            Made using {' '}
            <a href='https://reactjs.org/' className='transition text-[#f5f5fa] hover:text-white hover:underline' target="_blank" rel="noopener noreferrer">
                React
            </a>
            {' & '}
            <a href='https://tailwindcss.com/' className='transition text-[#f5f5fa] hover:text-white hover:underline' target="_blank" rel="noopener noreferrer">
                Tailwind CSS 
            </a>
            .{' '}
            Design inspired by{' '} 
            <a href='https://dribbble.com/NicolasMzrd' className='transition text-[#f5f5fa] hover:text-white hover:underline' target="_blank" rel="noopener noreferrer">
                Nicolas Meuzard
            </a>
            .
        </p>
    </div>
  )
}

export default Footer