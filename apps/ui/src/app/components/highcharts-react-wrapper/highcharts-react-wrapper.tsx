import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export interface HighchartsReactWrapperProps {
  options: Highcharts.Options
}
export function HighchartsReactWrapper({options}: HighchartsReactWrapperProps) {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={{...options, credits: {
          enabled: false
        },}} />
    </div>
  );
}

export default HighchartsReactWrapper;
