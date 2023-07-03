import Motherclass from "./Motherclass";

export default class YBarChart extends Motherclass {
  // Bar sınıfının tanımı
  protected data2: number[];

  constructor(data: number[], data2: number[], categories: string[]) {
    super(data, categories); // Super anahtar kelimesiyle üst sınıfın yapıcı yöntemini çağırarak değerleri aktarıyoruz
    this.data2 = data2;
  }

  getOptions(): any {
    return {
      title: {
        text: "World Population",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {},
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "value",
        boundaryGap: [0, 0.01],
      },
      yAxis: {
        type: "category",
        data: this.categories,
      },
      series: [
        {
          name: "2022",
          type: "bar",
          data: this.data,
        },
        {
          name: "2023",
          type: "bar",
          data:this.data2,
        },
      ],
    };
  }
}
