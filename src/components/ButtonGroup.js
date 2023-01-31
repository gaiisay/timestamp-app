import { Clear, FreeBreakfast, Work } from "@mui/icons-material";

import { Button } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import { getDayString, getTimeString } from "../utils/helpers";
import useLocalStorage from "../utils/hooks";

export function ButtonGroup({ setDates }) {
  const [workText, setWorkText] = useLocalStorage("workButton", "Start");
  const [breakText, setBreakText] = useLocalStorage("breakButton", "Start");

  return (
    <Grid2 container spacing={1} margin="1rem" justifyContent="space-around">
      <Grid2 xs="auto">
        <Button
          variant="contained"
          color="warning"
          startIcon={<Clear />}
          onClick={() => {
            setDates([{ day: getDayString() }]);
            setWorkText("Start");
            setBreakText("Start");
          }}
        >
          Clear
        </Button>
      </Grid2>

      <Grid2 xs="auto">
        <Button
          variant="contained"
          color={workText === "Start" ? "primary" : "secondary"}
          startIcon={<Work />}
          onClick={() => {
            setDates((oldDate) => {
              const lastPos = oldDate.length - 1;
              const today = getDayString();
              let newDate;
              if (workText === "Start") {
                if (oldDate[lastPos].day === today) {
                  oldDate[lastPos] = {
                    ...oldDate[lastPos],
                    work: { startTime: getTimeString() },
                  };
                  newDate = [...oldDate];
                } else {
                  newDate = [
                    ...oldDate,
                    {
                      day: getDayString(),
                      work: {
                        startTime: getTimeString(),
                      },
                    },
                  ];
                }
              } else {
                oldDate[lastPos] = {
                  ...oldDate[lastPos],
                  work: {
                    startTime: oldDate[lastPos].work.startTime,
                    endTime: getTimeString(),
                  },
                };
                newDate = [...oldDate];
              }
              return newDate;
            });
            setWorkText(workText === "Start" ? "Stop" : "Start");
          }}
        >
          {workText}
        </Button>
      </Grid2>

      <Grid2 xs="auto">
        <Button
          variant="contained"
          color={breakText === "Start" ? "primary" : "secondary"}
          startIcon={<FreeBreakfast />}
          onClick={() => {
            setDates((oldDate) => {
              const lastPos = oldDate.length - 1;

              let newDate;
              if (breakText === "Start") {
                oldDate[lastPos] = {
                  ...oldDate[lastPos],
                  break: {
                    startTime: getTimeString(),
                  },
                };
                newDate = [...oldDate];
              } else {
                oldDate[lastPos] = {
                  ...oldDate[lastPos],
                  break: {
                    startTime: oldDate[lastPos].break.startTime,
                    endTime: getTimeString(),
                  },
                };
                newDate = [...oldDate];
              }
              return newDate;
            });
            setBreakText(breakText === "Start" ? "Stop" : "Start");
          }}
        >
          {breakText}
        </Button>
      </Grid2>
    </Grid2>
  );
}
