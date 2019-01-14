
# Movie Q's Trivia Game
------
Movie Q's has access to a database of nearly 500k+ movie titles all sourced from [OMDB](http://omdbapi.com/). The purpose of this game is purely recreational and should be treated as such. Movie API requests are currently limited to 1000 queries per day which is more than adequate for beta purposes. 
  
## Technologies / Sources 
------
  * jQuery utilized to access API and handle event listeners
  *  HTML/CSS to frame backbone of the site
    - [CSS-tricks](https://css-tricks.com/) was referenced
  * Incorporated modal into index.html for visual overlay of rules
  * index2.html redirect page incorporates live webcam via raspberryPi 
  * Site hosted via Github but redirects to Google Domain, www.pepperfredginger.com
  
## Approach
------
Having always been a fan of hours long sessions of "What movies has _____ been in?", I decided to stick with OMDB's API. 
I wanted to frame a game that could reference any category of the JSON data returned without the need for recoding, keeping it DRY. My main concern was keeping each aspect of the game simple enough to maintain a limited amount of bugs/errors.

## Installation Instructions
------
1. Open your terminal and *`cd`* into the *`directory`* of your choice (Note: do not clone a repo inside another)
2. Go to my [GitHub](https://github.com/christopher-cook/pfg-omdb) repository
3. In the top-right corner choose **`Clone or Download`**
  - via **SSH**
    -- in terminal, type `git remote set-url <remote name> <ssh url>` ... remote name is typically origin
  - via **HTTPS**
    -- in terminal, type `git clone <https url>`
  
### Link to Site
------
Live game site hosted at [www.pepperfredginger.com](https://www.pepperfredginger.com)

## Problems to be addressed
------
- Adding to the *dummy* pool of 'wrong' actors
- Populating alternate movie categories
- Randomizing button choice order
- Adding additional redirect pages vs simple alerts




