const days=document.querySelector("#days")
const hours=document.querySelector("#hours")
const minutes=document.querySelector("#minutes")
const seconds=document.querySelector("#second")



function countdown()
{
const currentyear= new Date().getFullYear()
const newyear=new Date(`january 1 ${currentyear+1} 00:00:00`)
const currentdate= new Date()
const diff=newyear-currentdate
const day=Math.floor(diff/1000/60/60/24)
const hrs=Math.floor((diff/1000/60/60)%24)
const mins=Math.floor((diff/1000/60)%60)
const sec=Math.floor((diff/1000)%60)
days.innerHTML=day
hours.innerHTML=hrs
minutes.innerHTML=mins
seconds.innerHTML=sec
}
setInterval(countdown,1000)