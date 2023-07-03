import Motherclass from './Motherclass';

export default class BarChart extends Motherclass {
  // Bar sınıfının tanımı 
  constructor(data: number[], categories: string[]) {
    super(data, categories); // Super anahtar kelimesiyle üst sınıfın yapıcı yöntemini çağırarak değerleri aktarıyoruz
  
  }
    getOptions(): any {
      return {
        xAxis: {
          type: 'category',
          data: this.categories
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: this.data,
            type: 'bar'
          }
        ]
      };
    
  }
  
}
