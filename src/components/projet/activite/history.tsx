import { graphql } from "gatsby";
import React from "react";
import Section from "../../section";
import { decimaBold, titleMargin } from "../../../styles/theme";
import { Timeline, TimelineItemProps } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/fr";

dayjs.locale("fr");

const History: React.FC<Queries.HistoryFragment> = ({ allTimelineYaml }) => {
  const sorted = [...allTimelineYaml.nodes].sort(
    (t1, t2) => new Date(t1.date!).getTime() - new Date(t2.date!).getTime()
  );

  const timelineItems: TimelineItemProps[] = sorted.map((timelineItem) => ({
    label: (
      <div className="text-lg relative -top-1" style={decimaBold}>
        {dayjs(timelineItem.date).format("MMMM YYYY")}
      </div>
    ),
    children: (
      <div className="text-lg relative -top-1">{timelineItem.event}</div>
    ),
  }));

  return (
    <Section>
      <h1 style={titleMargin} className="uppercase text-center">
        Notre histoire
      </h1>
      <div className="flex justify-start">
        <Timeline mode="left" items={timelineItems} className="w-4/5" />
      </div>
    </Section>
  );
};

export default History;

export const query = graphql`
  fragment History on Query {
    allTimelineYaml {
      nodes {
        date
        event
      }
    }
  }
`;
