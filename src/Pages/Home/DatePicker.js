import React, { useState } from 'react'
import DatePicker from 'react-date-picker'
import './DatePicker.css'
export default function DatePickerjs() {
  const [value, onChange] = useState(new Date())

  return (
    <DatePicker
      className={[
        '!border-sky-500',
        '!outline-none',
        '!rounded',
        'bg-white',
        'border',
      ]}
      onChange={onChange}
      calendarClassName={['!bg-white']}
      value={value}
    />
  )
}
