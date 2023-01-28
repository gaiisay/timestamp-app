import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  timelineItemClasses,
  TimelineSeparator,
} from "@mui/lab";

export function MyTimeline({ startTime, endTime }) {
  return (
    <Timeline
      sx={{
        margin: 0,
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>{startTime}</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" variant="outlined" />
        </TimelineSeparator>
        <TimelineContent>{endTime}</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
