import React from 'react'

function curDate() {
  const [date, setDate] = React.useState(new Date())

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setDate(new Date())
    }, 100)

    return () => {
      window.clearInterval(timer)
    }
  }, [])

  return date
}

function defineTwoDigits(number) {
  return number >= 10 ? String(number) : `0${number}`
}

export default function Clock() {
  const date = curDate()

  let hours = date.getHours()  % 12
  hours = hours === 0 ? 12 : hours

  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
  
  return <div>{defineTwoDigits(hours)}:{minutes}:{defineTwoDigits(seconds)}</div>;
}
