## Description
**KA-VR** is a virtual assistant that uses natural language processing to listen to a user's voice to execute tasks. Machine learning algorithms are implemented in such a way that **KA-VR** progressively learns a user's choice of words, such as actions, verbs, and context.

## Table of Contents 
- [Technology Stack](#tech-stack)
- [Example / Usage](#example--usage)
- [Getting Started](#getting-started)
- [Architecture](#architecture)
- [Team Members](#team-members)

##Technology Stack
- React.js
- Redux
- Three.js
- Node.js
- Express
- Neo4j
- MySQL
- MongoDB
- Redis
- Docker
- Amazon Web Services

##Example / Usage
Sign up for an account by going through the user flow. Once an account is established, voice commands can be used to search for web images, grab a video, get the weather for a location, or bring up top restaurant recommendations.

*Example Voice Commands:*

- Calculate 32 divided by 4
- Search Yelp for Coffee Shops in San Francisco
- Play Video of Dogs
- Search for news of San Francisco

A helper modal can be brought up by saying "help" after pressing "start".

Additionally, a command text box is available for commands to be entered.

##Getting Started
### Requirements

*Go to the following sites and follow the directions to get API keys:*

- [Open Weather Map](https://openweathermap.org/appid)
- [YouTube](https://developers.google.com/youtube/v3/)
- [Yelp](https://www.yelp.com/developers)

### Installing Dependencies

On every service's root directory where package.json file lies, run:
```
npm install
```

Create a .env file that includes the following API keys (Open Weather Map, YouTube, Yelp) in the apiserver service root directory:
```
APPID=''
```
```
YOUTUBE_API_KEY=''
```
```
YELP_CONSUMER_KEY=''
```
```
YELP_CONSUMER_SECRET=''
```
```
YELP_TOKEN=''
```
```
YELP_TOKEN_SECRET=''
```

On the main start folder, run:

```
bash start.sh
```

On separate terminal windows, run:

```
mongod
```
```
redis-server
```
```
mysql.server start
```
```
npm run seed
```

Go to localhost:3000 to see the application.

## Architecture
### High Level Architecture
![Architecture](http://i67.tinypic.com/29ntd2w.png)

# Future Road Map
- Improve machine learning algorithm
- Integrate Google Calendar as a widget on the dashboard
- Gmail notifications
- Additional authentication methods, such as Google
- Soundcloud music
- Spotify music
- Uber estimated times, requests

## Team Members
### Team
Product Owner: [Rodaan Rabang](https://github.com/rodaan) 

Scrum Master: [Victoria Tran](https://github.com/vickeetran)

Development Team: [Alex Lee](https://github.com/digitized), [Kent Lee](https://github.com/kqlee),

"Distributed under the MIT License."
