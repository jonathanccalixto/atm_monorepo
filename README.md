# ATM - Monorepo

A simple ATM sistem to pratice new features

This application is a monorepo, where I keep in a folder only the entire ecosystem of my application.
This application has simple features, which tends to simulate a real ATM, it may contain some problems today, but you are free to create a Pull Request at any time with suggestions, I will learn a lot from that.

## Dependency

This application is using the docker, that is, just install it, you be able to use it.

For those who are not a docker lover or do not know how to use it, you can handle the application in the traditional way, using ruby version 3.1 (it has `ruby-version`), and node 14.17.0 (it has `.nvmrc`) with yarn na version 1.22.10

I'm also using postgresql in version 13.3

## Structure

As I said above, I'm using a monorepo, the intention is not to publish this application in production, to use it, but to practice programming and best practices, so a possible publication is simply for learning.
So far there are two folders:

- Api: It was developed with Ruby on Rails to serve as an API
- Web: It was developed with React JS to visualize the screens

In the not too distant future (hopefully) we will have a mobile folder here too.

## Functionalities

- Login and registration
- Cash withdrawal
- Account deposit
- Transfer between accounts
- Balance inquiry

I plan to implement automated tests in all the environment, but it's good to get started. :)
