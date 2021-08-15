const list =  document.querySelector("#gamesList");
const submitBtn = document.querySelector("#submitBtn");
const input = document.querySelector("#input");
const gameList = [];

//Called on submit button click from UI
const addGame = ()=>{
  if(!input.value || input.value.trim() === "") return;
  gameList.push(input.value);
  addNamesToList();
}

//add input to list in dom
const addNamesToList = (value)=>{
 gameList.forEach(game=>{
   const li = document.createElement("li");
   li.innerText = game;
   list.appendChild(li);
 })
}

// after making change in DOM, observer is called and will show Alert
const handleMutation = (mutations) =>{
  console.log(mutations)
  mutations.forEach(mutation =>{
    if(mutation.type=="childList"){
      console.log(mutation)
        alert("Added a game in list :: "+input.value)
    }
  });
  input.value ="";
}

// Adding mutation observer
const mutationObserver =  new MutationObserver(handleMutation);
mutationObserver.observe(list,{
  childList: true
});
