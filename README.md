# YNAB-clone
A [Nuxt]() and [Adonis]() JS clone of the popular [YNAB](https://www.youneedabudget.com/) application.

# Getting Started
## Introduction
The app is deployed in distributed parts:

* **Application** - This is the frontend of the app and is written in [Nuxt](https://nuxtjs.org/)
* **Backend** - A standalone API written in [Adonis](https://adonisjs.com/)
* **Database** - Classic MySQL
* **CSS Framework** - Utility-based using [Tailwind CSS](https://tailwindcss.com/)

## Spinning it up
This is using [docker-compose](https://docs.docker.com/compose/), so this should be a breeze (🤞)!

1. Install Docker CLI or Docker Hub and ensure you can run `docker-compose`
    * If you run into issues, ensure you have virtualization setup correctly depending on your system:
        * [Windows](https://docs.docker.com/docker-for-windows/install/)
            * Also ensure you setup the [WSL 2 backend](https://docs.docker.com/docker-for-windows/wsl/)
        * [Mac](https://docs.docker.com/docker-for-mac/install/)
1. Clone the repository
1. Navigate to your local repository locally
1. Run `docker-compose up`
1. Check in browser:
    * **App** - [localhost:3000](http://localhost:3000/)
    * **API** - [localhost:4000](http://localhost:4000/)
    * **Database** - [localhost:5000](http://localhost:5000/)