// TITLE ---------------------------------------------------------------

let h1 = document.querySelector('h1')
let h1ColorTable = ['red','orange','yellow','green','blue','purple']
const spans = document.querySelectorAll('span')

spans.forEach((el,ind)=>{
    el.style.color = h1ColorTable[ind % h1ColorTable.length]
})

// CAROUSEL ---------------------------------------------------------------

let slideIndex = 0 
let positionValue = 0 

const imgWidth = 400
const btns = document.querySelectorAll('.btn')
const prevBtn = btns[0]
const nextBtn = btns[1]
const images = document.querySelector('.images')

init()

function prev(){
    if(slideIndex > 0){
        prevBtn.src = 'img/arrow.png'
        prevBtn.style.cursor = 'pointer'
        nextBtn.src = 'img/right.png'
        nextBtn.style.cursor = 'pointer'

        positionValue += imgWidth
        images.style.transform = `translateX(${positionValue}px)`
        slideIndex --
    }
    if(slideIndex == 0){
        prevBtn.src = 'img/arrowDis.png' 
        prevBtn.style.cursor = 'default'
    }
    return positionValue
}

function next(){
    if(slideIndex < 4){
        prevBtn.src = 'img/arrow.png'
        prevBtn.style.cursor = 'pointer'
        nextBtn.src = 'img/right.png'
        nextBtn.style.cursor = 'pointer'

        positionValue -= imgWidth
        images.style.transform = `translateX(${positionValue}px)`
        slideIndex ++
    }
    if(slideIndex == 4){
        nextBtn.style.cursor = 'default'
        nextBtn.src = 'img/leftDis.png' 
    }
    return positionValue
}

function init(){
    prevBtn.src = './img/arrowDis.png'
    btns[0].style.cursor = 'default'
    nextBtn.addEventListener('click', next)
    prevBtn.addEventListener('click', prev)
}

// SCRIPTBOX ---------------------------------------------------------------

const ponyScript = [
    {
        name : "Pinky Pie",
        description : "Tout au long de la journee Pinkie Pie fait rire et sourire ses amis! Elle saute sur n'importe quel pretexte pour faire la fete et rendre ses amis heureux!", 
        Vitesse : 7, 
        Force : 5,
        Charisme : 9
    },
    {
        name : "Twilight Sparkle",
        description : "Twilight Sparkle est devenue une princesse! Les poneys de Ponyville la respecte beaucoup pour son iteligence. C'est aussi une meneuse qqui sait utiliser les capacites et les talents de ses amis pour accomplir leurs missons.", 
        Vitesse : 7, 
        Force : 7,
        Charisme : 9
    },
    {
        name : "Rainbow Dash",
        description : "Ce qui passionne Raibow Dash plus que tout au monde, c'est voler et voler vite! Sportive et pleine de ressources, elle vit pour l'aventure!", 
        Vitesse : 4, 
        Force : 9,
        Charisme : 8
    },
    {
        name : "Rarity",
        description : "La belle et artiste Rarity est une artiste talentuese! Elle trouve toujours le tmeps d'aider ses amies en leur donnant des conseils concernant la monde!", 
        Vitesse : 5, 
        Force : 3,
        Charisme : 9
    },
    {
        name : "Fluttershy",
        description : "Fluttershy adore toutes les creatures d'Equestria qu'elles soient grandes ou petites. Meme si elle est timide, elle a toujours une place dans sa petite maison a l'ecart pour tous ses amis animaux!", 
        Vitesse : 6, 
        Force : 6,
        Charisme : 3
    }
]

const ponyImgs = document.querySelectorAll('.ponyImg')
const descriptionBlock = document.querySelectorAll('.description-style')

ponyImgs.forEach((el,ind)=>{
    el.addEventListener('click', ()=>{
        descriptionBlock[ind].classList.add('description-style-add')
        descriptionBlock[ind].addEventListener('click', ()=>{
            descriptionBlock[ind].classList.remove('description-style-add')
        }) 
    })
})

descriptionBlock.forEach((el,ind)=>{
    el.addEventListener('click', ()=>{
        descriptionBlock[ind].classList.remove('description-style-add')
    })
})

for (let i = 0; i < 5; i++) {
    let h3 = document.createElement('h3')
    let p = document.createElement('p')
    descriptionBlock[i].appendChild(h3)
    descriptionBlock[i].appendChild(p)
    
    for (let j = 0; j < 3; j++) {
        let puissance = document.createElement('div')
        let h4 = document.createElement('h4')
        let bgbar = document.createElement('div')
        let bar = document.createElement('div')
        puissance.appendChild(h4)
        puissance.appendChild(bgbar)
        bgbar.appendChild(bar)
        puissance.classList.add('puissance')
        bgbar.classList.add('bgbar')
        bar.classList.add('bar')
        descriptionBlock[i].appendChild(puissance)
        if(j==0){
            h4.textContent = 'Vitesse  :'
            bar.style.width = `${ponyScript[i].Vitesse * 10}%`
        } else if(j==1){
            h4.textContent = 'Force  :'
            bar.style.width = `${ponyScript[i].Force * 10}%`
        } else {
            h4.textContent = 'Charisme  : '
            bar.style.width = `${ponyScript[i].Charisme * 10}%`
        }
    }
    h3.textContent = ponyScript[i].name
    p. textContent = ponyScript[i].description   
}