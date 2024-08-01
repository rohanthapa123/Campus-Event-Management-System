import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Event {
  id: string;
  "event-name": string;
  "event-task": string;
  "start-date": string;
  "dead-line": string;
  priority: string;
  status: boolean;
}

export interface EventsState {
  events: Event[];
}

const initialState: EventsState = {
  events: [],
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent(state, action: PayloadAction<Event>) {
      state.events.push(action.payload);
    },
    setEvents(state, action: PayloadAction<Event[]>) {
      state.events = action.payload;
    },
  },
});

export const { addEvent, setEvents } = eventsSlice.actions;
export default eventsSlice.reducer;
