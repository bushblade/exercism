export class LinkedList<TElement> extends Array {
  public delete(element: TElement): void {
    if (this.includes(element)) this.splice(this.indexOf(element), 1)
  }

  public count(): number {
    return this.length
  }
}
