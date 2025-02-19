function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
}

document.getElementById("revealButton").addEventListener("click", function() {
    document.getElementById("finalMessage").classList.remove("hidden");
    this.style.display = "none";
});

document.getElementById("yesButton").addEventListener("click", function() {
    document.body.style.background = "linear-gradient(135deg, #b4d3b2, #6b8f71)";
    alert("YAY! 🎉 I can't wait for all the amazing moments ahead!");
});

document.getElementById("noButton").addEventListener("mouseover", function() {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    this.style.left = x + "px";
    this.style.top = y + "px";
});

