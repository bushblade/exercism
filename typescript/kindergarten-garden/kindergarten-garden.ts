const DEFAULT_STUDENTS: Student[] = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eve',
  'Fred',
  'Ginny',
  'Harriet',
  'Ileana',
  'Joseph',
  'Kincaid',
  'Larry',
]

const PLANT_CODES = {
  G: 'grass',
  V: 'violets',
  R: 'radishes',
  C: 'clover',
} as const

type PlantCode = keyof typeof PLANT_CODES

type Student = string
type Plant = (typeof PLANT_CODES)[keyof typeof PLANT_CODES]
type Plants = Plant[]

export class Garden {
  private row1: PlantCode[]
  private row2: PlantCode[]
  private students: string[]

  constructor(diagram: string, students = DEFAULT_STUDENTS) {
    const [row1, row2] = diagram.split('\n')
    this.row1 = row1.split('') as PlantCode[]
    this.row2 = row2.split('') as PlantCode[]
    this.students = students.sort().flatMap((student) => [student, student])
  }

  public plants(student: Student): Plants {
    let output: Plants = []
    const studentIndexes = this.students.reduce<number[]>((acc, s, indx) => {
      if (s === student) acc.push(indx)
      return acc
    }, [])
    this.row1.forEach((plantCode: PlantCode, indx: number) => {
      if (studentIndexes.includes(indx)) output.push(PLANT_CODES[plantCode])
    })
    this.row2.forEach((plantCode: PlantCode, indx: number) => {
      if (studentIndexes.includes(indx)) output.push(PLANT_CODES[plantCode])
    })
    return output
  }
}
