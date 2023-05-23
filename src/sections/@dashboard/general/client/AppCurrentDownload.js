import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Card, CardHeader, Grid } from '@mui/material';
// utils
import { fNumber } from '../../../../utils/formatNumber';
//
import { BaseOptionChart } from '../../../../components/chart';

// ----------------------------------------------------------------------

const CHART_HEIGHT = 392;
const LEGEND_HEIGHT = 72;

const ChartWrapperStyle = styled('div')(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(5),
  '& .apexcharts-canvas svg': { height: CHART_HEIGHT },
  '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
    overflow: 'visible',
  },
  '& .apexcharts-legend': {
    height: LEGEND_HEIGHT,
    alignContent: 'center',
    position: 'relative !important',
    borderTop: `solid 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
  },
}));

// ----------------------------------------------------------------------

const CHART_DATA = [10, 15, 20, 50];

export default function AppCurrentDownload() {
  const theme = useTheme();

  const chartOptions = merge(BaseOptionChart(), {
    colors: [
      theme.palette.primary.lighter,
      theme.palette.primary.light,
      theme.palette.primary.main,
      theme.palette.primary.dark,
    ],
    stroke: { colors: [theme.palette.background.paper] },
    legend: { floating: true, horizontalAlign: 'center' },
    plotOptions: {
      radialBar: {
        dataLabels: {
          value: {
            formatter: (val) => fNumber(val),
          },
          total: {
            formatter: (w) => {
              const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
              return fNumber(sum);
            },
          },
        }
      }
    },
  });

  return (
    <Card>
      <CardHeader title="Pending Tasks" subheader='Detail Information about your activities' />
      <ChartWrapperStyle dir="ltr">
        <Grid container spacing={3}>
          <Grid>
            <ReactApexChart options={chartOptions} series={CHART_DATA} type="radialBar" height={280} />
          </Grid>
        </Grid>
      </ChartWrapperStyle>
    </Card>
  );
}
