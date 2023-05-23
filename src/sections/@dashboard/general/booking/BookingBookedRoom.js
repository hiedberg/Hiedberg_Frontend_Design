// @mui
import { Card, CardHeader, Typography, Stack, LinearProgress, Box } from '@mui/material';
// _mock_
import { _bookingsOverview } from '../../../../_mock';

// ----------------------------------------------------------------------

export default function BookingBookedRoom() {
  return (
    <Card>
      <CardHeader title="Completed Task" subheader='Detail Information about your completed task' />
      <Stack spacing={8} sx={{ px: 3, my: 5 }}>
        {_bookingsOverview.map((progress) => (
          <LinearProgress
            variant="determinate"
            key={progress.status}
            value={progress.value}
            color={
              (progress.status === 'Pending' && 'warning') ||
              (progress.status === 'Cancel' && 'error') ||
              'success'
            }
            sx={{ height: 8, bgcolor: 'grey.50016' }}
          />
        ))}
      </Stack>
    </Card>
  );
}
