/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

var contact = {
    
    creer: function(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },

    afficher: function() {
        var msg = "nom: "+this.nom+", prénom: "+this.prenom+".";
        return msg;
    }
};

console.log("Bienvenue dans le gestionnaire des contacts !");

var choix = 0;
var contacts = [];

var carole = Object.create(contact);
carole.creer("Carole", "Lévisse");
contacts.push(carole);

var melodie = Object.create(contact);
melodie.creer("Melodie", "Nelsonne");
contacts.push(melodie);

while(choix !== 3){
    console.log("1. Lister les contacts.\n2. Ajouter un contact.\n3. Quitter");
    
    choix = Number(prompt("Faire votre choix"));
    
    if(choix == 1) {
        contacts.forEach(function(c) {
            console.log(c.afficher());
        });
    }
    if(choix == 2) {
        var nouveau = Object.create(contact);
        
        var nom = prompt("Entrer le nom :");
        var prenom = prompt("Entrer le prénom :");
        
        nouveau.creer(nom, prenom);
        contacts.push(nouveau);
        
        console.log("Contact créer avec succès !");
    }
}