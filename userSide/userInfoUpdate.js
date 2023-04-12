let currentUser = {
  id: "",
  money: 0,
  strong: 0,
};

const setId = (id) => {
  currentUser.id = id;
};

const setMoney = (money) => {
  currentUser.money = money;
};
const setStrong = (strong) => {
  currentUser.strong = strong;
};

const plusServerMoney = (money) => {
  currentUser.money += money;
  const userMoney = document.getElementById("userMoney");
  userMoney.innerHTML = `Money <br> ${currentUser.money}`;
};

const buyServerTool = (money, strong) => {
  currentUser.money -= money;
  currentUser.strong += strong;
  const userPower = document.getElementById("userPower");
  const userMoney = document.getElementById("userMoney");
  userMoney.innerHTML = `Money <br> ${currentUser.money}`;
  userPower.innerHTML = `Power <br> ${currentUser.strong}`;
};

export { setMoney, setStrong, plusServerMoney, buyServerTool, currentUser, setId };
