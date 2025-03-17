window.onload = function() {
    document.getElementById("store").addEventListener("click", function() {
        console.log("Store icon clicked!"); // Debugging log
        openStore();
    });
};

function openStore() {
    document.getElementById("storeScreen").style.display = "block";
}

function closeStore() {
    document.getElementById("storeScreen").style.display = "none";
}
