# QUIZ

-[Live Site](https://lauriefish22.github.io/password-generator/)
-[Github](https://github.com/lauriefish22/password-generator)
## TECHNOLOGY USED

-[JAVASCRIPT](https://www.w3schools.com/jsref/met_win_prompt.asp) 

![assets](./Assets/Screenshot%202023-03-29%20at%207.41.58%20PM.png)
## CONTACT
Laurie Fish
iamlauriefish@gmail.com

## DESCRIPTION

This project generates a password for a user while requiring certain conditions such as number of characters, use of upper and lower case characters, numbers and special characters.  The user may choose from these options and if the mentioned criteria are not met, the user will be notified and allowed to try again.  Once all criteria are met, the user will be shown a password. 

## INTENTION OF PROJECT

The goal is ensure the user is given a unique password while following certain criteria for security.  This generator should make it clear to the user what is needed to create this password in regard to number of characters, etc... 
## LEARNING POINTS

This was a great opportunity to combine my knowledge of functions, arrays and if/else statements as the "coming together" part is the most challenging yet the most rewarding.  

## A FEW DETAILS 

This project uses JavaScript to combine arrays, functions, event listeners and loops to be able to create a password that follows the above restrictions.  An example of this combination is below.  

```for (let i = 0; i < charLength; i++) {
      
      let randomChar = Math.floor(Math.random() * availableCharLength);
      console.log(randomChar);
      console.log(availableCharArr[randomChar-1]);
      newPassword += availableCharArr[randomChar-1];
    }
    return newPassword;
  
  return "Password conditions not met";```




