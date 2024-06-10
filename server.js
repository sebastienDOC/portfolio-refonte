const express = require("express");
const path = require("path");

const app = express();

// Middleware Prerender placé en premier
app.use(
	require("prerender-node").set("prerenderToken", "dJikYHFpALHboFOuRcep")
);

// Définir le répertoire racine pour les fichiers statiques de l'application React
app.use(express.static(path.join(__dirname, "build")));

// Définir une route pour servir l'application React
app.get("*", (req, res) => {
	try {
		res.sendFile(path.join(__dirname, "build", "index.html"));
	} catch (error) {
		console.error(
			"Une erreur est survenue lors de l'envoi du fichier index.html :",
			error
		);
		res.status(500).send("Erreur interne du serveur");
	}
});

// Port d'écoute du serveur
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
	console.log(`Serveur Express en cours d'exécution sur le port ${PORT}`);
});
