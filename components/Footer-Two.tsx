import React from 'react'

const FooterTwo = () => {
  return (
    <footer className='space-y-2 px-1 text-lg font-bold text-[#444444] bg-[#F5F5F5] flex flex-col text-center mx-auto lg:flex-row py-5 lg:px-10  lg:justify-between w-full'>
        <div className="">
            <p>© 2025 Smart Solutions Ltd <span className='text-orange-400'> - Grace at work</span>. All rights reserved.</p>
        </div>
        <div className="flex justify-center max-w-2xs items-center gap-5 flex-wrap">
            <div className="w-24 lg:w-24"><img src="/trace.png" alt="" /></div>
            <div className="w-24 lg:w-24"><img src="/nitda.png" alt="" /></div>
            <div className="w-24 lg:w-24"><img src="veritas.png" alt="" /></div>
        </div>

    </footer>
  )
}

export default FooterTwo