import React from "react"

export default function Generator(){
const normChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const specChars = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
const [useSC, setUseSC] = React.useState(false)
const [useNum, setUseNum] = React.useState(false)
const [length, setLength] = React.useState(6)
const [generatedPassword, setGeneratedPassword] = React.useState("")




const activeStyles = 
{
    backgroundColor: "#d88912",   
}
console.log(useSC)
console.log(useNum)
    
   
function getPasswordChars(){
    let newPassChars = normChars
    
    if (useSC) newPassChars = [...newPassChars, ...specChars];
    if (useNum) newPassChars = [...newPassChars, ...numbers];
    
    
    let newPass = []
    for (let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * newPassChars.length); 
        newPass.push(newPassChars[randomIndex])
    }
    
    setGeneratedPassword(newPass.join(""))
}   
    
    function copyPass() {
        navigator.clipboard.writeText(generatedPassword).then(()=>{
            alert(`Copied ${generatedPassword} to clipboard!`)
        }).catch((err) => {
            console.error("Failed to Copy Text")
        })
    }
    
    return (
        <div>
        <div className="hero">
            <div className="main">
                <h1>Generate a</h1>
                <h1 id="rp">random password</h1>
                <p>Never use an insecure password again.</p>  
                <input 
                className="lengthSelect"
                type="number" 
                placeholder="how many characters long?" 
                min="6" 
                max="20"
                value={length} 
                onChange={(e) => setLength(Number(e.target.value))}
                 />
                <br/>
                <button 
                    onClick={()=> setUseSC(!useSC)}
                    className="conditionBtns"
                    style={ useSC ? activeStyles : null}
                    >
                    Include Special Characters?</button>
                <button 
                    onClick={()=> setUseNum(!useNum)}
                    className="conditionBtns"
                    style={ useNum ? activeStyles : null}
                    >
                    Include Numbers?</button>
                <button className="burntOrange"onClick={getPasswordChars}>Generate password</button>
              </div>
        </div>
        <h3 id="line"></h3>
            <div onClick={copyPass}id="passes">
                <h3 id="inputBox1">{generatedPassword}</h3>
            </div>
            </div>
    )
    
}