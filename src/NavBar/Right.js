import React from 'react'
import {
  ArrowLongRightIcon,
  FlagIcon,
  ViewfinderCircleIcon,
} from '@heroicons/react/24/solid'
import usImg from '../Images/us.svg'
import Country from './DropdownComponent/Country'
import Apps from './DropdownComponent/Apps'
import ShopingCart from './DropdownComponent/ShopingCart'
import Notification from './DropdownComponent/Notification'
import CommonIcon from './DropdownComponent/CommonIcon'
import UserProfile from './UserProfile'
function Right() {
  return (
    <div className="hidden lg:flex pr-4 items-center">
      <Country />
      <Apps />
      <ShopingCart />
      <CommonIcon icon="moon" />
      <CommonIcon icon={null} />
      <Notification />
      <UserProfile />
    </div>
  )
}

export default Right
