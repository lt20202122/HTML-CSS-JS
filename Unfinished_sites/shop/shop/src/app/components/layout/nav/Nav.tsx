import React from 'react'
import { DropdownOne, DropdownTwo} from '@/components/layout/nav/Dropdowns'
import '@/components/layout/nav/Nav.css'

export default function Nav () {
  return (
    <nav className = "h-[100px] flex">
      <DropdownOne />
      <DropdownTwo />
    </nav>
  )
}

