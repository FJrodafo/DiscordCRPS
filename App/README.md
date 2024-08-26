## Index

1. [Project Structure](#project-structure)
2. [Run it!](#run-it)
3. [Run with Docker](#run-with-docker)
4. [Build Docker image on your own](#build-docker-image-on-your-own)
5. [Available Scripts](#available-scripts)

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
├── package-lock.json
└── package.json
```
</details>

## Run it!

Open your directory where you save your repositories and clone it with the following command:

```shell
# GitHub
git clone https://github.com/FJrodafo/DiscordCRPS.git
```

```shell
# GitLab
git clone https://gitlab.com/FJrodafo/DiscordCRPS.git
```

```shell
# Bitbucket
git clone https://bitbucket.org/fjrodafo/DiscordCRPS.git
```

This project needs a `config.json` into the `src` directory with your Discord APP Client ID (Make sure you have an APP created in the [Discord Developer Portal](https://discord.com/developers/applications)):

```json
{
    "clientId": ""
}
```

As well, this project must be initialized and the necessary dependencies installed with the following command (Make sure you are in the `App` directory):

```shell
npm install
```

If you have the `config.json` file into the `src` directory correctly configurated and Node v16.11.0 or higher installed on your machine, then you are good to go!

To check if you already have Node installed on your machine, run `node -v` in your terminal. Otherwise, you will need to install Node v16.11.0 or higher or, as a last option, check out the [Docker](#docker) alternative.

Finally, if you have Node installed, run the following command to activate your Discord Custom Rich Presence Status (Make sure you are in the `App` directory):

```shell
npm start
# Press 'Ctrl + C' to exit
```

## Run with Docker

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

## Build Docker image on your own

If you don't have Node v16.11.0 or higher installed on your machine, you can build a Docker image by running the [Dockerfile](./Dockerfile) (Make sure to create and configurate the `config.json` file correctly into the `src` directory before building the docker image).

Open a terminal and run the following command (Make sure you are in the `App` directory):

```shell
docker build -t discord-crps .
```

After the build completes, you can run your container with the following command:

```shell
docker run -dp 127.0.0.1:3000:3000 discord-crps
```

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

<link rel="stylesheet" href="./README.css">
<a class="scrollup" href="#top">&#x1F53C</a>