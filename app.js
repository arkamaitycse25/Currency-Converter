const base_url="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1";
const drops=document.querySelectorAll(".drop select");
const btn=document.querySelector("form button");
const fromcurr = document.querySelector(".from select");
const tocurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for(let select of drops){
    for(currC in countryList){
        let newO=document.createElement("option");
        newO.innerText=currC;
        newO.value=currC;
        if(select.name ==="from" && currC==="USD"){
            newO.selected="selected";
        }
        if(select.name ==="to" && currC==="INR"){
            newO.selected="selected";
        }
        select.append(newO);
    }
select.addEventListener("change",(evt)=>{
    updatef(evt.target);
});
}
const updateExchangeRate = async () => {
    let amt=document.querySelector(".amt input");
    let amtVal=amt.value;
    if(amtVal === ""|| amtVal<1){
        amtVal=1;
        amount.value="1";
    }
const URL=`${base_url}/currencies/${fromcurr.value.toLowerCase()}.json`;
let response=await fetch(URL);
let data=await response.json();
let rate=data[fromcurr.value.toLowerCase()][tocurr.value.toLowerCase()];
let finalamt=amtVal*rate;
msg.innerText = `${amtVal} ${fromcurr.value} = ${finalamt} ${tocurr.value}`;
};
const updatef=(element)=>{
  let currC=element.value;
  let ccode=countryList[currC];
  let newSrc=`https://flagsapi.com/${ccode}/flat/64.png`;
  let img=element.parentElement.querySelector("img");
  img.src=newSrc;
};


btn.addEventListener("click", async (evt) =>{
    evt.preventDefault();
    updateExchangeRate();
});
window.addEventListener("load", () => {
    updateExchangeRate();
  });