import React from 'react'
import { Calendar as ReactBigCalendar, Views, momentLocalizer, type SlotInfo } from 'react-big-calendar'
import moment from 'moment'
import { useStoreActions, useStoreState } from '~/hooks/store'
import { Button, Modal } from 'react-bootstrap'

moment.locale('en')
moment.updateLocale('en', {
  week: {
    dow: 1, // Monday is the first day of the week
  },
})

const Calendar: React.FC = () => {
  const [modal, setModal] = React.useState<IModal>({ show: false })
  const localizer = momentLocalizer(moment)
  const events = useStoreState((state) => state.events)
  const { addEvent, clearEvents, deleteEvent } = useStoreActions((actions) => actions)

  const handleSelectSlot = ({ start, end }: SlotInfo) => {
    const hasConflict = events.some(
      (event) =>
        (start >= (event?.start ?? 0) && start < (event?.end ?? 0)) ||
        (end > (event?.start ?? 0) && end <= (event?.end ?? 0)) ||
        (start <= (event?.start ?? 0) && end >= (event?.end ?? 0))
    )

    if (hasConflict) {
      setModal({ show: true, title: 'Error', message: 'There is already an event in this time slot.' })
      return
    }

    addEvent({
      id: events.length + 1,
      start: moment(start).toDate(),
      end: moment(end).toDate(),
    })
  }

  const onSelectEvent = (event: IEvent) => {
    setModal({
      show: true,
      title: 'Delete confirmation',
      message: `Event from ${moment(event.start).format('LT')} to ${moment(event.end).format('LT')}`,
      onDelete: () => {
        deleteEvent(event.id)
        setModal({ show: false })
      },
    })
  }

  const handleClearEvents = () => {
    setModal({
      show: true,
      title: 'Clear events',
      message: 'Are you sure you want to delete all events?',
      onDelete: () => {
        clearEvents()
        setModal({ show: false })
      },
    })
  }

  const getTotalEventTime = () => {
    return events.reduce((total, event) => {
      const start = moment(event.start)
      const end = moment(event.end)
      const duration = moment.duration(end.diff(start))
      return total + duration.asHours()
    }, 0)
  }

  const handleCloseModal = () => {
    setModal({ show: false })
  }

  return (
    <>
      <Modal show={modal.show} onHide={handleCloseModal} variant="danger">
        <Modal.Header closeButton>
          <Modal.Title>{modal.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modal.message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          {modal.onDelete && (
            <Button variant="danger" onClick={modal.onDelete}>
              Delete
            </Button>
          )}
        </Modal.Footer>
      </Modal>
      <div className="calendar-container">
        <ReactBigCalendar
          views={[Views.WEEK]}
          selectable
          localizer={localizer}
          defaultView={Views.WEEK}
          events={events}
          onSelectEvent={onSelectEvent}
          onSelectSlot={handleSelectSlot}
          toolbar={false}
          scrollToTime={new Date(1970, 1, 1, 6, 0, 0)} // Scroll to 6 AM
        />
      </div>
      <div id="menu">
        <div>
          <Button variant="light" className="clear" onClick={handleClearEvents} disabled={!events.length}>
            <i className="bi bi-calendar2-x-fill text-primary" />
          </Button>
        </div>
        <div>Total: {getTotalEventTime()}h</div>
      </div>
    </>
  )
}

export default Calendar
