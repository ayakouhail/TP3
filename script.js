// Attendre que la page soit bien chargée
window.onload = function() {
    console.log("Bienvenue chez Caftan by Aya !");
    
    // 1. Un petit message de bienvenue (Optionnel, tu peux l'enlever après test)
    alert("Bienvenue dans l'univers de Caftan by Aya ! ✨");
};

// 2. Changer le style du menu quand on défile (Scroll)
window.onscroll = function() {
    let header = document.querySelector('header');
    
    if (window.scrollY > 50) {
        // Si on descend de plus de 50px, on change la couleur de fond
        header.style.backgroundColor = "#FFDBE9"; // Rose bébé
        header.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.1)"; // Ombre légère
        header.style.transition = "0.5s"; // Animation douce
    } else {
        // Sinon on remet le blanc d'origine
        header.style.backgroundColor = "#FFFFFF";
        header.style.boxShadow = "none";
    }
};