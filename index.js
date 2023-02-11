let isDOBOpen = false;
let dateOfBirth;
const settingCog = document.getElementById("settingIcon")
const settingCont = document.getElementById("settingContent")
const initialTxtEle = document.getElementById("initialText");
const afterDOBTxtEle = document.getElementById("afterDOBBtnTxt")
const dobButtonEle = document.getElementById("dobButton")
const dobInputEle = document.getElementById("dobInput")


const yearEle = document.getElementById("year")
const monthEle = document.getElementById("months")
const daysEle = document.getElementById("days")
const hoursEle = document.getElementById("hours")
const minutesEle = document.getElementById("minutes")
const secondsEle = document.getElementById("seconds")

const makeTwoDigitNumber = (number)=>{
return number > 9 ? number : `0${number}`
}


const toggleDateOfBirthSelector = ()=>{
    if(isDOBOpen){
        settingCont.classList.add("hide");
    }else{
        settingCont.classList.remove("hide");
    }
    isDOBOpen = !isDOBOpen;

    console.log("Toggle",isDOBOpen);
};


const updateAge = ()=>{
        const currentDate = new Date();
        const dateDiff = currentDate- dateOfBirth;
        const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
        const month = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365) % 12);
        const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24 )) % 30;
        const hour = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;
        const minute = Math.floor(dateDiff / (1000 * 60)) % 60;
        const second = Math.floor(dateDiff / 1000) % 60;
        
        yearEle.innerHTML = makeTwoDigitNumber(year);
        monthEle.innerHTML = makeTwoDigitNumber(month);
        daysEle.innerHTML = makeTwoDigitNumber(day);
        hoursEle.innerHTML = makeTwoDigitNumber(hour);
        minutesEle.innerHTML = makeTwoDigitNumber(minute);
        secondsEle.innerHTML = makeTwoDigitNumber(second);
        
 }

const setDOBHandler = ()=>{
 const dateString = dobInputEle.value;

 dateOfBirth = dateString ? new Date(dateString) : null;

const year = localStorage.getItem("year")
const month = localStorage.getItem("month")
const date = localStorage.getItem("date")
if(year && month && day){
    console.log({
        year,month,day,
    })
}

 if(dateOfBirth){

    localStorage.setItem("year",dateOfBirth.getFullYear())
    localStorage.setItem("month",dateOfBirth.getMonth())
    localStorage.setItem("date",dateOfBirth.getDay())
    initialTxtEle.classList.add("hide");
    afterDOBTxtEle.classList.remove("hide");
    setInterval(()=>updateAge(),1000)
 }else{
    afterDOBTxtEle.classList.add("hide");
    initialTxtEle.classList.remove("hide");
 }
}
setDOBHandler();





settingCog.addEventListener("click", toggleDateOfBirthSelector)
dobButtonEle.addEventListener("click", setDOBHandler)










