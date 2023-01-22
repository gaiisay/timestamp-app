import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { MyTimeline } from "./Timeline";

export function Day({ dates }) {
  return dates.map((date) => {
    return (
      <Grid2 key={date.day} container margin="1rem">
        <Grid2 xs={12}>
          <Typography variant="h5" gutterBottom>
            {date.day}
          </Typography>
        </Grid2>
        <Grid2 container width="100%">
          <Grid2 xs={6}>
            <Typography variant="caption">Arbeit</Typography>
            <MyTimeline
              startTime={date.work?.startTime}
              endTime={date.work?.endTime}
            />
          </Grid2>
          <Grid2 xs={6}>
            <Typography variant="caption">Pause</Typography>
            <MyTimeline
              startTime={date.break?.startTime}
              endTime={date.break?.endTime}
            />
          </Grid2>
        </Grid2>
      </Grid2>
    );
  });
}
