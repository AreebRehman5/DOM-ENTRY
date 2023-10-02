document.getElementById('changeColorBtn').addEventListener('click',changeColorBtn)

function generateRandomNumber (){
    const number= Math.round(Math.random()*190)
    return number
}

function changeColorBtn(){

    let body= document.getElementsByTagName('body')
    body[0].style.backgroundColor = `rgb(
    ${generateRandomNumber()}
    ${generateRandomNumber()}
    ${generateRandomNumber()}

    )`
    console.log(body[0])
    
}
