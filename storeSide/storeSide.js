import { buyServerTool, currentUser } from "../userSide/userInfoUpdate.js";

const powerList = document.getElementById("powerList");
const jacpot = document.getElementById("jacpot");
const imgList = [
  "https://raw.githubusercontent.com/Bongseop-Kim/2023-elice-algorithm-study/main/teamProject/assets/wrench.png",
  "https://raw.githubusercontent.com/Bongseop-Kim/2023-elice-algorithm-study/main/teamProject/assets/pickaxe.png",
  "https://raw.githubusercontent.com/Bongseop-Kim/2023-elice-algorithm-study/main/teamProject/assets/drill.png",
  "https://raw.githubusercontent.com/Bongseop-Kim/2023-elice-algorithm-study/main/teamProject/assets/excavator.png",
  "https://raw.githubusercontent.com/Bongseop-Kim/2023-elice-algorithm-study/main/teamProject/assets/robot.png",
];
let imgCount = 1;
for (let i of imgList) {
  const storeList = document.createElement("div");
  const storeText = document.createElement("div");
  const divImg = document.createElement("div");
  const power = document.createElement("div");
  const price = document.createElement("div");
  storeList.className = "list-group-item";
  storeText.className = "storeText";
  divImg.className = "divImg";
  storeList.id = `powerLevel_${imgCount}`;
  imgCount++;
  power.className = "power_up";
  const img = document.createElement("img");
  img.className = "power_img";
  img.src = i;
  storeList.appendChild(divImg);
  divImg.appendChild(img);
  storeText.appendChild(power);
  storeText.appendChild(price);
  power.innerHTML = `power + ${imgCount - 1} `;
  price.innerHTML = `price : ${100 * (imgCount - 1)}$`;
  storeList.appendChild(storeText);
  powerList.appendChild(storeList);
}

const powerLevel_1 = document.getElementById("powerLevel_1");
const powerLevel_2 = document.getElementById("powerLevel_2");
const powerLevel_3 = document.getElementById("powerLevel_3");
const powerLevel_4 = document.getElementById("powerLevel_4");
const powerLevel_5 = document.getElementById("powerLevel_5");

powerLevel_1.addEventListener("click", () => buyTool(100, 1));
powerLevel_2.addEventListener("click", () => buyTool(200, 2));
powerLevel_3.addEventListener("click", () => buyTool(300, 3));
powerLevel_4.addEventListener("click", () => buyTool(400, 4));
powerLevel_5.addEventListener("click", () => buyTool(500, 5));

function buyTool(money, strong) {
  console.log(currentUser);
  if (currentUser.money < 100) {
    alert("돈이 부족합니다.");
  } else {
    buyServerTool(money, strong);
    axiosPost(strong, money);
  }
}

function axiosPost(strong, money) {
  axios
    .post("https://port-0-king-of-mine-1093j2alg6lmfjz.sel3.cloudtype.app/api/users/buyTool", {
      id: currentUser.id,
      strong: strong,
      money: money,
    })
    .then((response) => {
      const setmainmoney = document.getElementsByClassName("money-text");
      setmainmoney[0].innerHTML = `${response.data.data.money} $`;
    })
    .catch(function (error) {
      console.log(error);
    });
}

jacpot.addEventListener("click", jacpotPlay);

function jacpotPlay(id, money, strong) {
  alert(`jacpotplay`);
}
