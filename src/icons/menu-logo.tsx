import React from 'react'
import Image from 'next/image'

type MenuLogoProps = {
  onClick(): void
}

export const MenuLogo = ({ onClick }: MenuLogoProps) => {
  return (
    <div onClick={onClick} className="cursor-pointer -mt-2 -m-5">
      <Image
        src="/logo.png"
        alt="Logo"
        width={40}
        height={40}
        priority
      />
    </div>
  )
}
