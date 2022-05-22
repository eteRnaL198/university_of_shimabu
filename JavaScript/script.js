//DOM
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

//関数（メソッド）
async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return users;
}

async function listUsers () {
    const users = await getUsers();
    users.forEach(addList);
    // users.forEach(user => addList(user));
    //forで書く
    // for (let index = 0; index < users.length; index++) {
    //     const user = users[index];
    //     const list = document.createElement("li");
    //     list.innerText = user.address.zipcode;
    //     lists.appendChild(list);
    // }
};

function addList(user) {
    const list = document.createElement("li");
    list.innerText = user.name;
    lists.appendChild(list);
};

//イベント
window.addEventListener("load", listUsers);
button.addEventListener("click", listUsers);

