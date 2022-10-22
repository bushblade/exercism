type Grade = string[]

interface School {
  [key: number]: Grade
}

export class GradeSchool {
  private school: School = {}

  roster(): School {
    const clone: School = {}
    for (const grade in this.school) {
      clone[grade] = [...this.school[grade]]
    }
    return clone
  }

  private removeFromGrade(name: string): void {
    for (const grade in this.school) {
      if (this.school[grade].includes(name))
        this.school[grade] = this.school[grade].filter(
          (student) => student !== name
        )
    }
  }

  add(name: string, grade: number): void {
    this.removeFromGrade(name)
    if (this.school[grade]) {
      this.school[grade] = [...this.school[grade], name].sort((a, b) =>
        a.localeCompare(b)
      )
      return
    }
    this.school[grade] = [name]
  }

  grade(grade: number): string[] {
    return this.school[grade] ? [...this.school[grade]] : []
  }
}
