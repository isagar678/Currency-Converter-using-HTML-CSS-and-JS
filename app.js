const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
  const fromCurr=document.querySelector(".from select");
  const toCurr=document.querySelector(".to select");
  const dropdowns=document.querySelectorAll(".dropdown select");
  const btn=document.querySelector("button");
  for (let select of dropdowns){
    for(i in countryList){
      let newOption=document.createElement("option");
      newOption.innerText=i;
      newOption.value=i;
      select.append(newOption);
      if ((select.name=='from')&&(i=='USD')) {
        newOption.selected="selected";
      }
      if ((select.name=='to')&&(i=='INR')) {
        newOption.selected="selected";
      }
    }
    select.addEventListener(("change"),(event)=>{
        updateFlag(event.target);
    });
  }
const updateFlag=(element)=>{
  let code=element.value;
  let newsrc=`https://flagsapi.com/${countryList[code]}/flat/64.png`;
  parentImg=element.parentElement.querySelector("img");
  parentImg.src=newsrc;

}
btn.addEventListener("click",async (evt)=>{
  let amnt=document.querySelector(".amount input");
  amntValue=amnt.value;
  if (amntValue<=0) {
    amntValue=1;
  }
  const newURL=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  let response=await fetch(newURL);
  response=await response.json;
  console.log(response);
})

