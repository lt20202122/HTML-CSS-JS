import React from 'react'
import { DropdownOne, DropdownTwo, DropdownThree} from '@/components/layout/nav/Dropdowns'
import '@/components/layout/nav/Nav.css'
export default function Nav () {
  return (
    <nav className = "h-[185px] flex justify-evenly items-start m-3">
      <DropdownOne />
      <DropdownTwo />
      <DropdownThree />
    </nav>
  )
}