const acButton = document.querySelectorAll(".button")
const result = document.querySelector(".result")
let buttonPressed = ""
let firstNumber =""
let islem = ""
let islemIzın = ""
let secondNumber = ""
let ikinciSayiIzın = 0
let sonuc = 0


acButton.forEach(element => {
    element.addEventListener("click",() => {
        buttonPressed = element.id
        
        checkButton()
        
    })
    
})

function checkButton(){
    if(buttonPressed === "toplama" || buttonPressed === "cikarma" || buttonPressed ==="yuzde" ||  buttonPressed ==="bolme" || buttonPressed === "carpim" )
        {
            
            islemSec()
            console.log("islem secildi")
            
        }

        else if (buttonPressed === "isaret")
        {
            result.textContent = -result.textContent
        }
        else if(buttonPressed === "sonuc"){
            if(sonuc > 1000000)
            {
                result.textContent = "NaN"
            }
            else{
                hesapla()
                result.textContent = sonuc
            }
           

            
        }
        else if(ikinciSayiIzın === 1){
            
                console.log("ikinci sayi secildi")
                ikinciSayi()
            
            
        }
        else{
            console.log("ilk sayi secildi")
            ilkSayi()
            
        } 

}


function hesapla(){
    if (islem === "top")
    {
        console.log(firstNumber)
        console.log(secondNumber)
        sonuc = sonuc + Number(firstNumber) + Number(secondNumber)
        firstNumber = ""
        secondNumber = ""
        
        return(sonuc)
    }
    else if (islem === "cik")
    {
        console.log(firstNumber)
        console.log(secondNumber)
        sonuc = sonuc + Number(firstNumber) - Number(secondNumber)
        firstNumber = ""
        secondNumber = ""
        
        return(sonuc)

    }
    else if (islem === "carp")
        {
            console.log(firstNumber)
            console.log(secondNumber)
            sonuc = (sonuc * secondNumber) + (Number(firstNumber) * Number(secondNumber))
            firstNumber = ""
            secondNumber = ""
            
            return(sonuc)
    
        }
    else if (islem === "bol")
        {
            console.log(firstNumber)
            console.log(secondNumber)
            sonuc = (sonuc / secondNumber) + (Number(firstNumber) / Number(secondNumber))
            firstNumber = ""
            secondNumber = ""
            
            return(sonuc)
    
        }
    else if (islem === "yuz")
        {
            console.log(firstNumber)
            console.log(secondNumber)
            sonuc = ((sonuc / 100) * secondNumber) + (firstNumber / 100) * secondNumber
            firstNumber = ""
            secondNumber = ""
            
            return(sonuc)
    
        }
    else if (islem === "isa")
        {
            
            return(sonuc)
    
        }
        
    
    

}

function islemSec(){

    if( islemIzın === 1) {
        if(buttonPressed === "sonuc"){
            islem = "son"
            ikinciSayiIzın = 1
        }
        else if (buttonPressed === "toplama")
        {
            islem = "top"
            ikinciSayiIzın = 1
        }
        else if (buttonPressed === "cikarma")
        {
            islem = "cik"
            ikinciSayiIzın = 1
        }
        else if (buttonPressed === "carpim")
        {
            islem = "carp"
            ikinciSayiIzın = 1
        }
        else if (buttonPressed === "yuzde")
        {
            islem = "yuz"
            ikinciSayiIzın = 1
        }
        else if (buttonPressed === "bolme")
        {
            islem = "bol"
            ikinciSayiIzın = 1
        }
        else if (buttonPressed === "isaret")
        {
            islem = "isa"
            ikinciSayiIzın = 1
            firstNumber = -firstNumber
            sonuc = -sonuc
            result.textContent = sonuc
            console.log("test")
        }
        else{
            ikinciSayiIzın = 0
        }
    }
    else{

        console.log("ane")
    }

    
}


function ilkSayi(){
    
    if (buttonPressed === "AC")
    {
        islem = ""
        firstNumber = ""
        secondNumber = ""
        result.textContent = 0
        ikinciSayiIzın = 0
        sonuc = 0
    }

    else{
    
            firstNumber = firstNumber + buttonPressed
            result.textContent = firstNumber
            islemIzın = 1
            return(buttonPressed)
        }
        
        
    }


function ikinciSayi(){
        if (buttonPressed === "AC")
            {
                islem = ""
                firstNumber = ""
                secondNumber = ""
                result.textContent = 0
                ikinciSayiIzın = 0
                sonuc = 0
                islemIzın = 0
            }
            else{
                    secondNumber = secondNumber + buttonPressed
                    result.textContent = secondNumber
                    return(buttonPressed)
                }
                
            }
    



