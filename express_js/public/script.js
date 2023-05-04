const adviceContainer = document.querySelector('.advice')
const btn  =  document.querySelector('.dice-img')

const API_LINK = 'https://api.adviceslip.com/advice'

window.addEventListener('DOMContentLoaded', () => {
getRandomAdvice()
})

const getRandomAdvice = async() => {
    const data = await fetch(API_LINK)
    const response = await data.json()
    getText(response)
    // adviceContainer.innerHTML = response.slip.advice
}


const getText =  (data) => {
    const {slip:{id, advice}} = data
    adviceContainer.innerHTML = advice
}

btn.addEventListener('click', async() => {
    await getRandomAdvice()
})

