import styles from './main-page.module.scss';
import Highcharts from 'highcharts';
import variablePie from "highcharts/modules/variable-pie";
import HighchartsReactWrapper from '../highcharts-react-wrapper/highcharts-react-wrapper';

variablePie(Highcharts);

export function MainPage() {
  const options: Highcharts.Options = {
      chart: {
        type: 'variablepie'
      },
      title: {
        text: 'Kiko as a Software Developer',
        verticalAlign: 'middle'
      },
      tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> ' +
          '{point.name}</b><br/>' +
          'Area (square km): <b>{point.y}</b><br/>' +
          'Population density (people per square km): <b>{point.z}</b><br/>'
      },
      series: [{
        type: 'variablepie',
        minPointSize: 10,
        innerSize: '20%',
        zMin: 0,
        size: 1000,
        name: 'countries',
        borderRadius: 5,
        data: [{
          name: 'Spain',
          y: 505992,
          z: 92
        }, {
          name: 'France',
          y: 551695,
          z: 119
        }, {
          name: 'Poland',
          y: 312679,
          z: 121
        }, {
          name: 'Czech Republic',
          y: 78865,
          z: 136
        }, {
          name: 'Italy',
          y: 301336,
          z: 200
        }, {
          name: 'Switzerland',
          y: 41284,
          z: 213
        }, {
          name: 'Germany',
          y: 357114,
          z: 235
        }],
      }]
    };

  return (
    <div className={styles['container']}>
      <HighchartsReactWrapper options={options}/>
    </div>
  );
}

export default MainPage;
