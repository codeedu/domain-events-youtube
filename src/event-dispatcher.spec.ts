import EventDispatcher from "./event-dispatcher";
import SendMessageToRabbitMQHandler from "./events/handlers/send-message-to-rabbitmq-handler";
import OrderPlacedEvent from "./events/order-placed";

describe("Domain events tests", () => {
  it("should register and event", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendMessageToRabbitMQHandler();

    eventDispatcher.register("OrderPlaced", eventHandler);

    expect(eventDispatcher.getEventHandlers["OrderPlaced"]).toBeDefined();
    expect(eventDispatcher.getEventHandlers["OrderPlaced"].length).toBe(1);
  });

  it("should notify when an event occured", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendMessageToRabbitMQHandler();
    const spyEventHandler = jest.spyOn(eventHandler, "handle");
    eventDispatcher.register("OrderPlacedEvent", eventHandler);
    const event = new OrderPlacedEvent({
      orderId: "123",
      customerId: "123",
      productId: "123",
      quantity: 1,
      total: 100,
    });

    eventDispatcher.notify(event);

    expect(spyEventHandler).toHaveBeenCalled();
  });
});
