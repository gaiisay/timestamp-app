import { Clear, FreeBreakfast, Work } from "@mui/icons-material";

import { Button } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
import { getDayString, getTimeString } from "../utils/helpers";

export function ButtonGroup({ setDates }) {
  const [workText, setWorkText] = useState("Start");
  const [breakText, setBreakText] = useState("Start");

  return (
    <Grid2 container spacing={1} margin="1rem" justifyContent="space-around">
      <Grid2 xs="auto">
        <Button
          variant="contained"
          color="warning"
          startIcon={<Clear />}
          onClick={() => {
            setDates([{ day: getDayString() }]);
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
            setWorkText(workText === "Start" ? "Stop" : "Start");
            setDates((oldDate) => {
              const day = getDayString();
              let newDate = oldDate.map((date) => {
                if (date && date.day === day) {
                  if (!date.work?.startTime) {
                    return {
                      ...date,
                      work: {
                        startTime: getTimeString(),
                      },
                    };
                  } else {
                    return {
                      ...date,
                      work: {
                        startTime: date.work.startTime,
                        endTime: getTimeString(),
                      },
                    };
                  }
                } else {
                  return {
                    day: getDayString(),
                    work: {
                      startTime: getTimeString(),
                    },
                  };
                }
              });
              return newDate;
            });
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
            setBreakText(breakText === "Start" ? "Stop" : "Start");
            setDates((oldDate) => {
              const day = getDayString();
              let newDate = oldDate.map((date) => {
                if (date.day === day) {
                  if (!date.break?.startTime) {
                    return {
                      ...date,
                      break: {
                        startTime: getTimeString(),
                      },
                    };
                  } else {
                    return {
                      ...date,
                      break: {
                        startTime: date.break.startTime,
                        endTime: getTimeString(),
                      },
                    };
                  }
                } else {
                  return {
                    day: getDayString(),
                    break: {
                      startTime: getTimeString(),
                    },
                  };
                }
              });
              return newDate;
            });
          }}
        >
          {breakText}
        </Button>
      </Grid2>
    </Grid2>
  );
}
