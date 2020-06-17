import { fifaData } from './fifa.js'
// console.log(fifaData)

// console.log('its working')
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data
(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
//
// Task 1:A console.log home team name for 2014 world cup final
//

const finalists2014 = fifaData.filter((item) => item.Year === 2014)
console.log(finalists2014)
const homeTeams = finalists2014.map((item) => item["Home Team Name"])
console.log(homeTeams)
const awayTeams = finalists2014.map((item) => item["Away Team Name"])
console.log(awayTeams)
const homeTeamGoals = finalists2014.map((item) => item["Home Team Goals"])
console.log(homeTeamGoals)
const awayTeamGoals = finalists2014.map((item) => item['Away Team Goals'])
console.log(awayTeamGoals)
const finalsTeams = finalists2014.filter((item) => item.Stage === 'Final')
console.log(finalsTeams)
if (finalsTeams['Home Team Goals'] > finalsTeams["Away Team Goals"]) {
  console.log(finalsTeams["Home Team Name"])
} else {
  console.log(finalsTeams["Away Team Name"])
}

 /* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

const finalsData = fifaData.filter((item) => item.Stage === 'Final')

console.log(finalsData)

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

const years = []
finalsData.forEach((callback) => {
  years.push(callback.Year)
})
console.log(years)

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

const winners = []

for (let i = 0; i < finalsData.length; i++) {
  if (finalsData[i]['Home Team Goals'] > finalsData[i]['Away Team Goals']) {
    winners.push(finalsData[i]['Home Team Name'])
  } else {
    winners.push(finalsData[i]['Away Team Name'])
  }
}

console.log(winners)

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear (getWinners, getYears) {
  for (let i = 0; i < getYears.length; i++) {
    console.log(`In ${getYears[i]}, ${getWinners[i]} won the world cup`)
  }
}

getWinnersByYear(winners, years)

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals (data) {
  const totalGoals = data.reduce((acc, data) => acc + data['Home Team Goals'] + data['Away Team Goals'], 0)
  const average = totalGoals / data.length
  return (`The average of ${data.length} games is ${average}`)
}

console.log(getAverageGoals(fifaData))

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
