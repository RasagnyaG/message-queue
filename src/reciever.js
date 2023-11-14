import { connect } from "amqplib";

async function receive() {
  const connection = await connect("amqp://localhost");
  const channel = await connection.createChannel();
  const queue = "hello";

  await channel.assertQueue(queue, { durable: false });

  console.log("Waiting for messages");

  channel.consume(
    queue,
    (message) => {
      if (message) {
        const messageContent = message.content.toString();

        console.log(`Message Received: ${messageContent}`);
      }
    },
    { noAck: false }
  );
}
receive().catch((error) => console.error(error));
