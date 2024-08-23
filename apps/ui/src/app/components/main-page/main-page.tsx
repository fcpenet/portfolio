import styles from './main-page.module.scss';
import Highcharts from 'highcharts';
import variablePie from 'highcharts/modules/variable-pie';
import HighchartsReactWrapper from '../highcharts-react-wrapper/highcharts-react-wrapper';

variablePie(Highcharts);

export function MainPage() {
  const colors = [
    '#FFC5C5',
    '#FF8A8A',
    '#FF5050',
    '#FF1616',
    '#DB0000',
    '#A00000',
    '#660000'
  ];
  const options: Highcharts.Options = {
    chart: {
      type: 'variablepie',
      height: '55%',
      backgroundColor: 'transparent'
    },
    title: {
      text: 'Kiko as a Full-stack Developer',
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
      innerSize: '50%',
      name: 'traits',
      dataLabels: {
        distance: -40,
        formatter: function() {
          return '';
        }
      },
      borderColor: 'black',
      borderRadius: 10,
      borderWidth: 20,
      depth: 3,
      data: [{
        name: undefined,
        y: 50,
        z: 1000,
        color: 'transparent',
        borderColor: 'transparent',

      }, {
        name: 'Version Control (Git)',
        y: 110,
        z: 110,
        color: colors[0],
        events: {
          click: (event) => {
            console.log(event)
  }
        }
      },
        {
          name: 'Sql',
          y: 120,
          z: 130,
          color: colors[1]
        }, {
          name: 'Cloud Computing (GCP/AWS)',
          y: 130,
          z: 150,
          color: colors[2]
        }, {
          name: 'CSS',
          y: 140,
          z: 170,
          color: colors[3]
        }, {
          name: 'Nodejs',
          y: 150,
          z: 180,
          color: colors[4]
        }, {
          name: 'Reactjs',
          y: 160,
          z: 200,
          color: colors[5]
        }, {
          name: 'TDD',
          y: 170,
          z: 220,
          color: colors[6]
        }]
    }]
  };

  return (
    <div className={styles['chart-container']}>
      <HighchartsReactWrapper options={options} />
    </div>
  );
}

export default MainPage;
