angular.module('myModule',[]).
  controller('myController',function ($scope) {
    Highcharts.chart('container',{
      xAxis: {
        categories:['Jan','Feb','Mar']
      },
      series:[{
        data:[12,13,24]
      }]
    });
  })
  .controller('mySecondController',function($scope){
    Highcharts.chart('secondContainer', {
      xAxis: {
        categories:['June','July','Aug']
      },
      series:[{
        data: [1,2,3]
      }]
    });
  })
  .controller('myThirdController',function($scope){
    Highcharts.chart('thirdController', {

      title: {
        text: 'Solar Employment Growth by Sector, 2010-2016'
      },

      subtitle: {
        text: 'Source: thesolarfoundation.com'
      },

      yAxis: {
        title: {
          text: 'Number of Employees'
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          pointStart: 2010
        }
      },

      series: [{
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
      }, {
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
      }, {
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
      }, {
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
      }, {
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
      }],

      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      }

    });
  })
  .directive('chartDirective',chartDirective);

function chartDirective() {
  return {
    restrict: 'A',
    template: '<div> </div>',
    scope: {
      options: '='
    },
    link: function (scope , element, attribute) {
      Highcharts.chart('chart', {
        chartOptions: {
          type: 'line'
        },

        title: {
          text: 'Temperature data'
        },
        series: [{
          data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
      });
    }
  }
}
