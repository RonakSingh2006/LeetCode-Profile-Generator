let input = document.querySelector(".username");

let btn = document.querySelector(".btn");

let genDiv = document.querySelector(".generate");

btn.addEventListener('click',()=>{
  let username = input.value;
  if(username === ''){
    username = "Empty";
  }
  let link = `https://leetcode.com/u/${username}/`;

  genDiv.innerHTML = `
    <div class = "op">
      <h2>Click On The Link Below</h2>
      <a class = "anchor" href="${link}" target = "_blank">⚡${username}⚡</a>
    </div>
  `;
})