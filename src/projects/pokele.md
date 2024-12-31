# Overview

Inspired by [Wordle](https://www.nytimes.com/games/wordle/index.html), Pokéle is a Pokémon guessing game which refreshes daily and allows players to compete with one another in guessing the correct Pokémon in the least amount of guesses.

Whenever a player guesses a pokemon, the backend server retrieves a the *intersection* of the information with the daily solution. The information includes name, id, types, abilities, image and colors.

# Try Me

Try guessing "1" or "bulbasaur" (or any other pokemon) in the game window below! 

The solution at the top will appear different from day-to-day.

<div>
<embed src="https://pokele.artyomg.com" width="1140" height="698" scrolling='yes'></embed>
</div>

# Backend

Pokéle is a web-based game with a backend server hosted with Python Flask and Postgres database. 

The backend can be accessed through the following domain:

 [https://pokele.onrender.com](https://pokele.onrender.com/api/v1/bulbasaur)

It supports the following endpoints: 

- [/api/v1/<id|name>](https://pokele.onrender.com/api/v1/bulbasaur) will give all the information on a given pokemon
- [/api/v1/guess/<id|name>](https://pokele.onrender.com/api/v1/guess/bulbasaur) will give the *intersection* of the given pokemon and the daily solution pokemon
- [/api/v1/ping](https://pokele.onrender.com/api/v1/ping) retrieves "pong" for testing purposes

# Technologies Used

**Flask**: The backend server is written in Flask with Python and uses SQLAlchemy as an ORM with Postgres.

**React**: The frontend server is written with React.js in addition with Vite for instant refreshes.

# Project Highlights

**Backend Development**: The main aim of the project was to highlight my backend development skills while also providing a fun little project for my portfolio

**Daily Refreshes**: The backend server refreshes the daily pokemon picks daily by using the current date as a seed for random generation.

**Object Relational Mapping**: The backend databases uses SQLAlchemy which is a Python ORM for working with Postgres. This both showcases my abilities in Object Oriented Development and work with databases.

