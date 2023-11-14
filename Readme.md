# Message Queue

## Setup Instructions

1. Install RabbitMQ

best way is to pull the docket image and run it

```
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.12-management
```

2. Install packages

```
npm install
```

or

```
yarn install
```

3. Start the reciever server

```
npm start
```

or

```
yarn start
```

4. In a new terminal, send a meassage

```
npm run send "<your message in double quotes>"
```

or

```
npm send "<your message in double quotes>"
```

5. Check it in the reciecver terminal
