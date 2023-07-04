import Motherclass from './Motherclass';

export default class PieChart extends Motherclass {
  constructor(data: number[], categories: string[]) {
    super(data, categories);
  }

  getOptions(): any {
    return {
      title: {
        text: 'Referer of a Website',
        subtext: 'Fake Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: this.getDataSeries(),
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  }

  public getDataSeries(): { value: number; name: string }[] {
    return this.categories.map((category, index) => ({
      value: this.data[index],
      name: category
    }));
  }
}

