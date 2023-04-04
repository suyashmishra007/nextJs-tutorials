import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
const EventDetailPage = () => {
  const router = useRouter();
  const id = router.query.eventId;
  const event = getEventById(id);

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found !!</p>;
      </ErrorAlert>
    );
  }
  return (
    <div>
      <Fragment>
        <EventSummary title={event.title} />
        <EventLogistics
          date={event.date}
          address={event.location}
          image={event.image}
          imageAlt={event.title}
        />
        <EventContent>{event.description}</EventContent>
      </Fragment>
    </div>
  );
};

export default EventDetailPage;
