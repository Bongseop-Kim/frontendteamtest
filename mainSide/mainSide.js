import { currentUser, plusServerMoney } from "../userSide/userInfoUpdate.js";

const mainSide = document.querySelector(".mainSide");
const topSection = document.createElement("div");

topSection.classList.add("top-section");

const moneyImg = document.createElement("img");
moneyImg.src = "./assets/money-bag.png";
moneyImg.classList.add("money-img");
topSection.appendChild(moneyImg);

let money = 0;
const moneyText = document.createElement("span");
moneyText.textContent = `0 $`;
moneyText.classList.add("money-text");
topSection.appendChild(moneyText);

const loginCheck = () => {
  fetch("https://port-0-king-of-mine-1093j2alg6lmfjz.sel3.cloudtype.app/api/users", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${Cookies.get().token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        moneyText.textContent = `${data.data.money} $`;
      } else {
        window.location.href = "/teamProject/login_signup/login.html";
      }
    })
    .catch((err) => console.log(err));
};

loginCheck();

mainSide.appendChild(topSection);

// add bottom area
const bottomSection = document.createElement("div");
bottomSection.classList.add("bottom-section");

const logBox = createBox("log.png", "1 sec", "1");
bottomSection.appendChild(logBox);
const diamondBox = createBox("diamond.png", "5 sec", "2");
bottomSection.appendChild(diamondBox);
const stoneBox = createBox("stone.png", "10 sec", "3");
bottomSection.appendChild(stoneBox);

mainSide.appendChild(bottomSection);

function createBox(imageSrc, time, reward) {
  const boxContainer = document.createElement("div");
  boxContainer.classList.add("box-container");

  const box = document.createElement("div");
  box.classList.add("box");

  const image = document.createElement("img");
  image.src = `./assets/${imageSrc}`;
  image.classList.add("resource-img");
  box.appendChild(image);

  const timeText = document.createElement("span");
  timeText.textContent = `time: ${time}`;
  timeText.classList.add("time-text");
  box.appendChild(timeText);

  const rewardText = document.createElement("span");
  rewardText.textContent = `reward: ${reward}`;
  rewardText.classList.add("reward-text");
  box.appendChild(rewardText);

  boxContainer.appendChild(box);

  return boxContainer;
}

const logButton = logBox;
const diamondButton = diamondBox;
const stoneButton = stoneBox;

let isButtonDisabled = false;

logButton.addEventListener("click", () => {
  if (!isButtonDisabled) {
    money = currentUser.money;
    const plusMoney = () => {
      fetch("https://port-0-king-of-mine-1093j2alg6lmfjz.sel3.cloudtype.app/api/users/plusMoney", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: currentUser.id, money: 1 * currentUser.strong }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            plusServerMoney(1 * currentUser.strong);
          }
        })
        .catch((err) => console.log(err));
    };

    plusMoney();

    money += 1 * currentUser.strong;
    moneyText.textContent = `${money} $`;
    disableButton(logButton, 1000);
    disableButton(diamondButton, 1000);
    disableButton(stoneButton, 1000);
  }
});

diamondButton.addEventListener("click", () => {
  if (!isButtonDisabled) {
    money = currentUser.money;
    const plusMoney = () => {
      fetch("https://port-0-king-of-mine-1093j2alg6lmfjz.sel3.cloudtype.app/api/users/plusMoney", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: currentUser.id, money: 2 * currentUser.strong }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            plusServerMoney(2 * currentUser.strong);
          }
        })
        .catch((err) => console.log(err));
    };

    plusMoney();
    money += 2 * currentUser.strong;
    moneyText.textContent = `${money} $`;
    disableButton(diamondButton, 5000);
    disableButton(logButton, 5000);
    disableButton(stoneButton, 5000);
  }
});

stoneButton.addEventListener("click", () => {
  if (!isButtonDisabled) {
    money = currentUser.money;
    const plusMoney = () => {
      fetch("https://port-0-king-of-mine-1093j2alg6lmfjz.sel3.cloudtype.app/api/users/plusMoney", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: currentUser.id, money: 3 * currentUser.strong }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            plusServerMoney(3 * currentUser.strong);
          }
        })
        .catch((err) => console.log(err));
    };

    plusMoney();
    money += 3 * currentUser.strong;
    moneyText.textContent = `${money} $`;
    disableButton(stoneButton, 10000);
    disableButton(logButton, 10000);
    disableButton(diamondButton, 10000);
  }
});

function disableButton(button, duration) {
  isButtonDisabled = true;
  const startTime = Date.now();

  button.classList.add("disabled");
  const timer = setInterval(() => {
    const elapsedTime = Date.now() - startTime;
    const remainingTime = duration - elapsedTime;
    if (remainingTime <= 0) {
      button.classList.remove("disabled");
      button.style.background = "";
      isButtonDisabled = false;
      clearInterval(timer);
    } else {
      const width = ((remainingTime / duration) * 100).toFixed(2);
      button.style.background = `linear-gradient(to right, rgba(255, 0, 0, 0.5) ${width}%, transparent ${width}%)`;
    }
  }, 10);
}
