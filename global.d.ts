import { type Action } from 'easy-peasy'
import type { Event } from 'react-big-calendar'

declare global {
  interface IEvent extends Event {
    id: number
  }

  interface IStore {
    events: IEvent[]
    addEvent: Action<IStore, IEvent>
    clearEvents: Action<IStore>
    deleteEvent: Action<IStore, number>
  }

  interface IModal {
    show: boolean
    title?: string
    message?: string
    onDelete?: () => void
  }
}

export {}
