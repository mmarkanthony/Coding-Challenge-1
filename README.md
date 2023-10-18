
# Coding Challenge 1

Coding Challenge Description

Problem: Write a code that will accept maximum of 6 digit number and will output the number in words.

## Technical Specifications
-This project is created using HTML. CSS & Javascript.

## How to run
-   Download and export to your local computer the follong files in the same folder:
    -   index.html
    -   main.css
    -   main.js
-   Open index.html using your preffered browser.
## Challenges

The main challenge I encountered in this challenge are the following:
-   How to convert the specified number to words.
-   What approach will I use to convert the number into words.
 
I solve the challenges by:
-   My first approach is to break the number into smaller groups of three digits and create an array variable for each groups of ones, tens and hundreds word numbers seperately.
-   Then I created a function
    
        convertToWord()

    I declared a variable ```var word```. This is where my number words will be assigned.
    I use ```if statement``` to identify the number if it is less than 10. If number is less than 10 the ```words``` variable now will store the number word with the corresponding index in array in ```singleDigit``` array.
    Same things will go with two digit number, if it is less than 20.

    Then it comes to 2 digit number greater than 20 but less than 100.
    In this section I declared a ```tempHolder``` variable. This will hold the value of the remaider of the number divisible by 10 in words. If conditions are met, the ```words``` variable now will store the number word with the corresponding index in array in ```belowHundred``` array and then concat the ```tempHolder```.
    In number less than 1000 and greater than 100, I used ```Math.trunc()``` function to get the number with no fractional digits, then get the the number word with the corresponding index in array in ```singleDigit``` array. Concatenated "Hundred" and the word result of the number that is divisible by 100.
    And in number greater than 1000, same algorithm are used.

    I used ```isNaN()``` to only input valid positive numbers. and using ```if else``` to limit only to input numbers less than 999999. 

    


## Defects
    The only limit to my code is that you can only input number not greater than 999999. And can be extended with some modification in code.