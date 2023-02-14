import React from 'react'

const RED = 'red'
const GREEN = 'green'
const YELLOW = 'yellow'

export default function TrafficLight() {
  const [color, setColor] = React.useState(GREEN)

  const isRedLight = color === RED
  const isGreenLight = color === GREEN
  const isYellowLight = color === YELLOW
  
  React.useEffect(() => {
    if (!isYellowLight) return

    const redTimer = setTimeout(() => {
      setColor(RED)
    }, 500)

    return() => {
      clearTimeout(redTimer)
    }
  }, [isYellowLight])

  React.useEffect(() => {
    if (!isGreenLight) return

    const yellowTimer = setTimeout(() => {
      setColor(YELLOW)
    }, 3000)

    return() => {
      clearTimeout(yellowTimer)
    }
  }, [isGreenLight])

  React.useEffect(() => {
    if (!isRedLight) return
    
    const greenTimer = setTimeout(() => {
      setColor(GREEN)
    }, 4000)

    return() => {
      clearTimeout(greenTimer)
    }
  }, [isRedLight])

  return (
    <div>
      <div className="red" style={{
         backgroundColor: isRedLight ? 'red' : 'rgb(193, 197, 199)'
         }}> 
      </div>
      <div className="yellow" style={{
        backgroundColor: isYellowLight ? 'yellow' : 'rgb(193, 197, 199)'
        }}> 
      </div>
      <div className="green" style={{
        backgroundColor: isGreenLight ? 'green' : 'rgb(193, 197, 199)'
        }}> 
      </div>
    </div>
  )
}
