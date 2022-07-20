# Morse Code Translator

A project to create a translator, using HTML, CSS, and JavaScript, between Morse code and English.

## Planning and Logic

Upon starting this project, I decided to set up the overall design of the page first just to remove a process from my thoughts. I then hand-wrote a few drafts of the logic I would need to achieve to make this work.

The abstraction looked like:

-   From the alphabet object:
    -   Create an array with the object keys (i.e., English)
    -   Create an array with the key values (i.e., Morse)
-   In the translation function:
    -   Split the string argument into an array
    -   Loop/iterate the array and compare each character with one of the object arrays
    -   Return the opposite character, using the index

## Coding

I created three scripts to keep my code modular and further separate the roles of the functions. Whilst working on my translation script, I made frequent use of console.log to make sure I was getting the correct result from my expressions.

This project was helpful in consolidating my knowledge and skills using Objects and iterators within JavaScript.

## Refactor

Upon having a code review, it was suggested to refactor my JavaScript and further break down the functions. This was a good challenge for me, especially to think about how I could use one function to translate both ways. I decided to use ternary operators to achieve this goal. I also included unit testing for my functions to make sure that it executed the way it was supposed to. However I do think that if I did Test-Driven Development and started with writing tests, the tests would be less biased.
