import React, { useState } from 'react'
import './App.css'
import butcherPigImage from './assets/butcherPig.jpeg'

const App = () => {

  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState("")
  const [inputTranslated, setInputTranslated] = useState("")

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {

    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map(eachWord => {
      console.log("eachWord:", eachWord)

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.split("").filter(vowel => {
        return (
          vowel === "a" || 
          vowel === "e" || 
          vowel === "i" || 
          vowel === "o" || 
          vowel === "u"
        )
      })
      console.log("vowelsArray:", vowelsArray)

      // ACTION ITEM: your Pig Latin logic goes here!
      //In order to see English words converted to Pig Latin, as the user of the application, I need to see words beginning with a vowel translated to add "way" the end.**
      // - Can type any word that begins with a vowel in the text input (e.g. apple)
      // - Can hit the submit button
      // - Can see the words that begin with a vowel translated to Pig Latin and rendered to the page (e.g. appleway)
    //Psued code:
    // Create a function called translator. 
    // Create a variable that takes eachWord and turns it into lowercase
    // Create a variable called firstLetter that gives us index of 0 for any given word.
    // Create another variable called vowel that if the first index of a word is a vowel using .includes.
    //Create conditional statment that says if variable vowel = true then return string with way to the end.
    //Create else statment tht states if untrue return string that changes index of the first value to the end and adds "ay".
    //Create new variable called vowelIndex that defines the first vowel in a string 
    // Create variable called constonant that slices index 0 to the index of the first vowel value.
    //Last but not least bring in return pigLatin.
    //It should return a string that changes index of the first value to the end and adds "ay".


// If that first position is greater  than the index of 0 ,we will return that string 
// ACTION ITEM: this return will be the output of your Pig Latin'd code
   
      const translator = () => {
        let pigLatin = eachWord.toLowerCase()
        const firstLetter = pigLatin[0]
        const vowels = ['a', 'e', 'i', 'o', 'u'].includes(firstLetter)
  
        if(vowels) {
          return pigLatin + 'way'
        } else {
          const vowelIndex = pigLatin.indexOf(pigLatin.match(/[aeiou]/))
          const consonant = pigLatin.slice(0, vowelIndex)
          pigLatin = pigLatin.slice(vowelIndex) + consonant + 'ay'
          return pigLatin
        }
      }

    const pigLatinTranslation = translator()
    return pigLatinTranslation

      // ACTION ITEM: this return will be the output of your Pig Latin'd code
      return translatedWordsArray
    })
    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords)
  }

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("")
    setInputTranslated("")
  }

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPigImage}
          alt="pig with butcher cut names in pig latin"
          className="butcher-pig-image"
        />

        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; 2022 | Coded by: Your Names Here!</footer>
    </div>
  )
}

export default App