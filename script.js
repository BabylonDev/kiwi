document.addEventListener("DOMContentLoaded", function () {
    // Edit Profile Button
    document.getElementById("edit-profile").addEventListener("click", function () {
        let newName = prompt("Enter your new name:");
        if (newName) {
            document.querySelector("#profile h2").textContent = newName;
        }
    });

    // Add Friend Button
    document.getElementById("add-friend").addEventListener("click", function () {
        let newFriend = prompt("Enter your friend's name:");
        if (newFriend) {
            let friendList = document.getElementById("friend-list");
            let newFriendItem = document.createElement("li");
            newFriendItem.innerHTML = `${newFriend} <button class='message-btn'>Message</button>`;
            friendList.appendChild(newFriendItem);

            // Add event listener to new message button
            newFriendItem.querySelector(".message-btn").addEventListener("click", function () {
                alert(`Messaging ${newFriend}...`);
            });
        }
    });

    // Message Button Functionality
    document.querySelectorAll(".message-btn").forEach(button => {
        button.addEventListener("click", function () {
            alert(`Messaging ${this.parentElement.textContent.trim()}...`);
        });
    });
});