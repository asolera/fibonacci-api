# Node Fibonacci API

Node.js API that calculates the *nth* digit of the Fibonacci Sequence for CPU stress test purpose.

## Getting started

Clone this repo and run `npm start` command. It will serve the API on port 3000 (use `/fibo` endpoint).

Pass in the *nth* digit of the Fibonacci Sequence that you want to test.

Example: http://localhost:3000/fibo?n=30

Response:

```json
{
    "hostname": "server_hostname",
    "requestNumber": "30",
    "result": 1346269,
    "elapsedSeconds": "0.035"
}
```

## Docker

Run the container by using the following command:

```sh
docker run -d -p 3000:3000 --name fibo-api asolera/fibonacci-api:latest
```

You can also build your own custom image, by changing the `app.js` file and running this command:

```sh
docker build -t your_name/fibonacci-api:latest .
docker run -d -p 3000:3000 --name fibo-api your_name/fibonacci-api:latest
```

## Contributing

1. Fork it
1. Download your fork to your PC (`git clone https://github.com/asolera/fibonacci-api && cd fibonacci-api`)
1. Create your feature branch (git checkout -b my-new-feature)
1. Make changes and add them (git add .)
1. Commit your changes (git commit -m 'Add some feature')
1. Push to the branch (git push origin my-new-feature)
1. Create new pull request

## Author

Andrew Solera - andrewsolera@gmail.com