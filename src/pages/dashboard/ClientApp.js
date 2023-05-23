import { useEffect } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Stack } from '@mui/material';
// hooks
import useAuth from '../../hooks/useAuth';
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
// sections
import {
  AppWidget,
  AppWelcome,
  AppFeatured,
  AppNewInvoice,
  AppTopAuthors,
  AppTopRelated,
  AppAreaInstalled,
  AppWidgetSummary,
  AppCurrentDownload,
  AppTopInstalledCountries,
  AnalyticsOrderTimeline,
} from '../../sections/@dashboard/general/client';
import { BookingBookedRoom } from '../../sections/@dashboard/general/booking';
// ----------------------------------------------------------------------

export default function GeneralApp() {
  const { user } = useAuth();
  const theme = useTheme();
  const { themeStretch } = useSettings();

  return (
    <Page title="General: My Dashboard">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <AppWelcome displayName={user?.username} />
          </Grid>
          {/* <Grid item xs={12} md={6} lg={4}>
            <Stack spacing={3}>
              <AppWidget title="Total Used Hours" total={389} icon={'eva:person-fill'} chartData={48} />
              <AppWidget
                title="Total Remaining Hours"
                total={46}
                icon={'eva:email-fill'}
                color="warning"
                chartData={75}
              />
            </Stack>
          </Grid> */}
          {/* <Grid item xs={12} md={4}>
            <AppFeatured />
          </Grid> */}

          {/* <Grid item xs={12} md={4}>
            <AppWidgetSummary
              title="Total Active Tasks"
              percent={2.6}
              total={18765}
              chartColor={theme.palette.primary.main}
              chartData={[5, 18, 12, 51, 68, 11, 39, 37, 27, 20]}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={5}>
            <AppWidgetSummary
              title="Total Completed Tasks"
              percent={0.2}
              total={4876}
              chartColor={theme.palette.chart.blue[0]}
              chartData={[20, 41, 63, 33, 28, 35, 50, 46, 11, 26]}
            />
          </Grid>

          <Grid item xs={12} md={5}>
            <AppWidgetSummary
              title="Total Pending Tasks"
              percent={-0.1}
              total={678}
              chartColor={theme.palette.chart.red[0]}
              chartData={[8, 9, 31, 8, 16, 37, 8, 33, 46, 31]}
            />
          </Grid> */}
          <Grid item xs={12} md={6} lg={6}>
            <AppAreaInstalled />
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <AppCurrentDownload />
          </Grid>

          <Grid item xs={12} md={6}>
            <BookingBookedRoom />
          </Grid>
          {/* <Grid item xs={12} lg={8}>
            <AppNewInvoice />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTopRelated />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTopInstalledCountries />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTopAuthors />
          </Grid> */}
          {/* <Grid item xs={12} md={6} lg={6}>
            <AnalyticsOrderTimeline />
          </Grid> */}
        </Grid>
      </Container>
    </Page >
  );
}
