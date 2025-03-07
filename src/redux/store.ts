import { action, createStore, createTransform, persist } from 'easy-peasy'
import moment from 'moment'
import type { Event } from 'react-big-calendar'

export const store = createStore<IStore>(
  persist(
    {
      events: [],
      addEvent: action((state, event) => {
        state.events.push(event)
      }),
      clearEvents: action((state) => {
        state.events = []
      }),
      deleteEvent: action((state, id) => {
        state.events = state.events.filter((event) => event.id !== id)
      }),
    },
    {
      storage: 'localStorage',
      transformers: [
        createTransform(
          (inboundState) => inboundState,
          (outboundState, key) => {
            if (key === 'events') {
              return outboundState.map((event: Event) => ({
                ...event,
                start: moment(event.start).toDate(),
                end: moment(event.end).toDate(),
              }))
            }
            return outboundState
          }
        ),
      ],
    }
  )
)
