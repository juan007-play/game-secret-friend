// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const friendsList = [];

const friendsName = () => {
    const addFriends = document.getElementById("amigo").value;
    const list = document.getElementById("listaAmigos");

    const normalizedName = addFriends.trim().toLowerCase();

    if (normalizedName.trim() === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    const isNameRepeated = friendsList.some(name => name.toLowerCase() === normalizedName);

    if (isNameRepeated) {
        alert(`El nombre "${addFriends}" ya ha sido agregado.`);
    } else {
        const upperName = addFriends.charAt(0).toUpperCase() + addFriends.slice(1);
        
        friendsList.push(upperName);

        const nameList = document.createElement("li");
        nameList.textContent = upperName;
        list.appendChild(nameList);
    }
    clearBox();
    
}

const clearBox = () => {
    document.getElementById("amigo").value = '';
}

const drawFriend = () => {
    if (friendsList.length < 1) {
        alert("Necesitas al menos dos amigos para sortear.");
        return;
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    let indexFriends = Math.floor(Math.random() * friendsList.length);

    let secretFriend = friendsList[indexFriends];

    resultado.innerHTML = `<li>Tu amigo secreto es: <strong>${secretFriend}</strong></li>`;

}

const resetAll = () => {
    let friendsList = [];
    console.log(friendsList);

    let friendsListHTML = document.getElementById("listaAmigos");
    friendsListHTML.innerHTML = "";

    let resultHTML = document.getElementById("resultado")
    resultHTML.innerHTML = "";
}
