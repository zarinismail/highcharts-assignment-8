// code for a basic bar chart
// see https://www.highcharts.com/demo/bar-basic 

Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Kiwis', 'Apples', 'Bananas', 'Oranges', 'Mangoes']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Mahi and Shivani\'s house'
      }
    },
    series: [{
      name: 'Mahi',
      data: [6, 1, 0, 4]
    }, {
      name: 'Shivani',
      data: [6, 5, 7, 3]
    }]
  });
