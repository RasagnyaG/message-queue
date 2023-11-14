import { connect } from "amqplib";

async function send() {
  const connection = await connect("amqp://localhost");
  const channel = await connection.createChannel();
  const queue = "hello";

  await channel.assertQueue(queue, { durable: false });
  const message = process.argv[2];

  channel.sendToQueue(queue, Buffer.from(message));

  setTimeout(() => {
    connection.close();
    console.log("exited");
    process.exit(0);
  }, 500);
  return message;
}

send()
  .then((message) => console.log(`Message Sent : ${message}`))
  .catch((error) => console.log(error));
