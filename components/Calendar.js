"use client"
import React, { useState, } from 'react'
import { Fugaz_One } from "next/font/google";
import { gradients, baseRating } from '@/utils'
const months = { 'January': 'Jan', 'February': 'Feb', 'March': 'Mar', 'April': 'Apr', 'May': 'May', 'June': 'Jun', 'July': 'Jul', 'August': 'Aug', 'September': 'Sept', 'October': 'Oct', 'November': 'Nov', 'December': 'Dec' }
const monthsArr = Object.keys(months)
const now = new Date()
const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function Calendar({ demo, CompleteData, handleSetMood }) {
  const now = new Date()
  const currMonth = now.getMonth()
  const [seletecMonth, setSelectedMonth] = useState(Object.keys(months)[currMonth])
  console.log("SELECTED MONTH: ", seletecMonth)
  const [selectedYear, setSelectedYear] = useState(now.getFullYear())
  const numericMonth = monthsArr.indexOf(seletecMonth)
  const data = CompleteData?.[selectedYear]?.[seletecMonth] || {}
  console.log("THIS MONTHS DATA: ", data)

  function handleincrementMonth(val) {
    if (numericMonth + val < 0) {
      setSelectedYear(curr => curr - 1)
      setSelectedMonth(monthsArr[monthsArr.length - 1])
    } else if (numericMonth + val > 11) {
      setSelectedMonth(curr => curr + 1)
    } else {
      setSelectedMonth(monthsArr[numericMonth + val])
    }

  }
  // const year = 2024
  // const month = "July"
  const monthNow = new Date(selectedYear, Object.keys(months).indexOf(seletecMonth), 1)
  const firstDayOfMonth = monthNow.getDay()
  const daysInMonth = new Date(selectedYear, Object.keys(months).indexOf(seletecMonth) + 1, 0).getDate()
  const daysToDisplay = firstDayOfMonth + daysInMonth
  const numRows = (Math.floor(daysToDisplay / 7)) + (daysToDisplay % 7 ? 1 : 0)

  return (
    <div className='flex flex-col gap-4'>
      <div className='grid grid-cols-3 gap-4'>
        <button onClick={()=>{
          handleincrementMonth(-1)
        }}  className='mr-auto  text-indigo-400  text-lg sm:text-xl duration-200 hover:opacity-60'> <i className='fa-solid fa-circle-chevron-left'></i></button>
        <p className={`text-center capitalized  textGradient ${fugaz.className}`}>{seletecMonth}, {selectedYear}</p>
        <button onClick={()=>{
          handleincrementMonth(1)
        }}  className='ml-auto text-indigo-400  text-lg sm:text-xl duration-200 hover:opacity-60'>
          <i className='fa-solid fa-circle-chevron-right'></i>
        </button>
      </div>
      <div className='flex flex-col overflow-hidden gap-1 py-4 sm:y-6 md:py-10'>
        {[...Array(numRows).keys()].map((row, rowIndex) => {
          return (
            <div key={rowIndex} className='grid grid-cols-7 gap-1'>
              {dayList.map((dayOfWeek, dayOfWeekindex) => {
                let dayIndex = (rowIndex * 7) + dayOfWeekindex - firstDayOfMonth + 1
                let dayDisplay = dayIndex >= 1 && dayIndex <= daysInMonth
                let isToday = dayIndex === now.getDate()

                if (!dayDisplay) {
                  return (
                    <div key={dayOfWeekindex} className='bg-white' />
                  )
                }

                let color = demo
                  ? gradients.indigo[baseRating[dayIndex]]
                  : (data && dayIndex in data)
                    ? gradients.indigo[data[dayIndex]]
                    : "white"

                return (
                  <div
                    style={{ background: color }}
                    className={`text-sm border border-solid p-2 flex items-center gap-2 justify-between rounded-lg ${isToday ? 'border-indigo-400' : 'border-indigo-100'} ${color === "white" ? 'text-indigo-400' : 'text-white'}`}
                    key={dayOfWeekindex}
                  >
                    <p>{dayIndex}</p>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>

  )
}
