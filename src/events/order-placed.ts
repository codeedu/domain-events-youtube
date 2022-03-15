import EventInterface from "../event.interface";

export default class OrderPlacedEvent implements EventInterface {
  dateTimeOccured: Date;
  eventData: any;

  constructor(eventData: any) {
    this.dateTimeOccured = new Date();
    this.eventData = eventData;
  }
}
