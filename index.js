
const upChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const specChars = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let pass1El = document.querySelector("#inputBox1")
let pass2El = document.querySelector("#inputBox2")

function getRandomCharacter(){
    let randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]
}


function passGen1(){
    let randomPassword1 = ""
   
    for (let i = 0; i < 16; i++){
        randomPassword1 += getRandomCharacter()
        
    }
    return randomPassword1
}

function passGen2(){
    let randomPassword1 = ""
   
    for (let i = 0; i < 16; i++){
        randomPassword1 += getRandomCharacter()
        
    }
    return randomPassword1
}


function urmom(){
pass1El.textContent = passGen1()
pass2El.textContent = passGen2()
}
    
    
   
// function generate(){
//     pass1El.textContent = randomPassword1
// }





// function passgen(){
    
//     let pass1 = []
//     for (let i = 0; i < 16; i++) {
//         let rand = Math.floor(Math.random() * characters.length)
//         pass1.push(rand)
//         pass1 = characters[rand]
//         return pass1
//     }
    
// }

// console.log(passgen())









// function passgen1(){
//     let rand1 = Math.floor(Math.random() * characters.length)
//     let rand2 = Math.floor(Math.random() * characters.length)
//     let rand3 = Math.floor(Math.random() * characters.length)
//     let rand4 = Math.floor(Math.random() * characters.length)
//     let rand5 = Math.floor(Math.random() * characters.length)
//     let rand6 = Math.floor(Math.random() * characters.length)
//     let rand7 = Math.floor(Math.random() * characters.length)
//     let rand8 = Math.floor(Math.random() * characters.length)
//     let rand9 = Math.floor(Math.random() * characters.length)
//     let rand10 = Math.floor(Math.random() * characters.length)
//     let rand11= Math.floor(Math.random() * characters.length)
//     let rand12 = Math.floor(Math.random() * characters.length)
//     let rand13 = Math.floor(Math.random() * characters.length)
//     let rand14 = Math.floor(Math.random() * characters.length)
//     let rand15 = Math.floor(Math.random() * characters.length)
    
//     return characters[rand1] + characters[rand2]+ characters[rand3] + characters[rand4] + characters[rand5] + characters[rand6] + characters[rand7] + characters[rand8] + characters[rand9] + characters[rand10] + characters[rand11] + characters[rand12] + characters[rand13] + characters[rand14] + characters[rand15] 
//     }
    
//     function passgen2(){
//     let rand1 = Math.floor(Math.random() * characters.length)
//     let rand2 = Math.floor(Math.random() * characters.length)
//     let rand3 = Math.floor(Math.random() * characters.length)
//     let rand4 = Math.floor(Math.random() * characters.length)
//     let rand5 = Math.floor(Math.random() * characters.length)
//     let rand6 = Math.floor(Math.random() * characters.length)
//     let rand7 = Math.floor(Math.random() * characters.length)
//     let rand8 = Math.floor(Math.random() * characters.length)
//     let rand9 = Math.floor(Math.random() * characters.length)
//     let rand10 = Math.floor(Math.random() * characters.length)
//     let rand11= Math.floor(Math.random() * characters.length)
//     let rand12 = Math.floor(Math.random() * characters.length)
//     let rand13 = Math.floor(Math.random() * characters.length)
//     let rand14 = Math.floor(Math.random() * characters.length)
//     let rand15 = Math.floor(Math.random() * characters.length)
    
//     return characters[rand1] + characters[rand2]+ characters[rand3] + characters[rand4] + characters[rand5] + characters[rand6] + characters[rand7] + characters[rand8] + characters[rand9] + characters[rand10] + characters[rand11] + characters[rand12] + characters[rand13] + characters[rand14] + characters[rand15] 
//     }


