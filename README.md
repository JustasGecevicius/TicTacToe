# Tic-Tac-Toe

## Description

This is a game of Tic-Tac-Toe. It allows for either single-player against a computer or co-op against another player. It has a game start screen, game type screen and player name screens.

## Technologies Used

### `HTML/CSS`

This project uses basic HTML and CSS. The divs are arranged into a 3x3 grid to resemble a game board. Later a few styles are applied to the board and the icons on the board.

### `Javascript`

This project focuses a lot on Javascript. Mainly for checking winning conditions and tracking the current state of the game. The player moves are tracked through an array. There are certain loops that check for move patterns in an array and if certain patterns are found, then a winner is declared.

## Problems encountered

### Checking for winning conditions

Winning conditions have to be checked after each player's move. Both horrizontal and vertical lines have to be checked with diagnal lines being checked the last. The current solutions involves a variable for each type of possible win (horizotal, vertical and 2 for diagnal) and for each player. Which means there are 8 variables for checking winnning conditions. This is not an optimal way of checking for winning conditions in this case. 

### Modals

The modals had to be customisable since the user could either choose to play against a computer or another human. The challenge was updating the modals based on user choices and inputs (Like type of game or user name).

## Final Remarks

This project was a good introduction into condition verifying and content customisation. Although the current solution is not particularly optimal and rather manual it pushes me to search for other more optimal (prettier) solutions.

