## Index

1. [Project Structure](#project-structure)
2. [Download the code](#download-the-code)
3. [Set up the project](#set-up-the-project)
4. [Install dependencies](#install-dependencies)
5. [Final steps](#final-steps)
6. [Using Docker](#using-docker)
7. [Available Scripts](#available-scripts)
8. [Resources](#resources)

## Project Structure

<details>
<summary>Click me</summary>

```
App/
├── node_modules/
│   └── ...
├── src/
│   ├── config.json
│   └── index.js
├── docker-compose.yaml
├── Dockerfile
├── eslint.config.js
├── package-lock.json
└── package.json
```
</details>

## Download the code

Open your directory where you save your repositories and clone it with the following command:

```shell
# From GitHub
git clone https://github.com/FJrodafo/DiscordCRPS.git
```

## Set up the project

This project needs a `config.json` into the `src` directory with your Discord APP Client ID (Make sure you have an APP created in the [Discord Developer Portal](https://discord.com/developers/applications)):

```json
{
    "clientId": ""
}
```

## Install dependencies

As well, this project must be initialized and the necessary dependencies installed with the following command (Make sure you are in the `App` directory):

```shell
npm install
```

## Final steps

If you have the `config.json` file into the `src` directory correctly configurated and Node v22.14.0 installed on your machine, then you are good to go!

To check if you already have Node installed on your machine, run `node -v` in your terminal. Otherwise, you will need to install Node v22.14.0 or, as a last option, check out the [Docker](#using-docker) alternative.

Finally, if you have Node installed, run the following command to activate your Discord Custom Rich Presence Status (Make sure you are in the `App` directory):

```shell
npm start
# Press 'Ctrl + C' to exit
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Using Docker

### Run with Docker Compose

Make sure to create and configurate the `config.json` file correctly into the `src` directory before running Docker commands...

Build the container:

```shell
docker compose build
```

Run the container:

```shell
docker compose up -d
```

Stop the Container:

```shell
docker compose down
```

### Build Docker image on your own

If you don't have Node v22.14.0 installed on your machine, you can build a Docker image by running the [Dockerfile](./Dockerfile) (Make sure to create and configurate the `config.json` file correctly into the `src` directory before building the docker image).

Open a terminal and run the following command (Make sure you are in the `App` directory):

```shell
docker build -t discord-crps .
```

After the build completes, you can run your container with the following command:

```shell
docker run -dp 127.0.0.1:3000:3000 discord-crps
```

> [!IMPORTANT]
> 
> Please note that when using Docker, port 3000 on localhost will be occupied by the Discord application for its proper functioning.
> 
> If you already have applications that use port 3000, you will need to adjust certain parameters before creating the Docker container so that it can run correctly on a free port.

## Available Scripts

In the project directory, you can run:

### `npm start`

Once configured, run the CRPS.

### `npm run canary`

Once configured, run a Canary version of the CRPS. It works exactly the same as the main CRPS. This version is intended to test new features and experimental implementations to ensure they work before publishing changes, preventing any bugs that may cause malfunctions.

### `npm run eslint`

Runs the eslint to find possible formatting errors in the code.

### `npm run eslintfix`

Automatically fixes all errors caught by eslint.

### `npm test`

There are currently no tests configured.

## Resources

For more information about the discord-rpc library, see the following link: https://github.com/discord/discord-rpc

Discord has documentation on its official developer website where you can learn more about how the discord-rpc library works at the following link: https://discord.com/developers/docs/topics/rpc