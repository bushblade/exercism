import { Robot } from './robot-simulator.ts'
const robot = new Robot()

robot.place({ x: 7, y: 3, direction: 'north' })

robot.evaluate('RAALAL')

console.log(robot.direction, robot.coordinates)
