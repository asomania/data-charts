export default class Motherclass {
  protected data: number[];
  protected categories: string[];

  constructor(data: number[], categories: string[]) {
    this.data = data;
    this.categories = categories;
  }
}
