---
marp: true
theme: teaching
paginate: true
size: 4:3
---


<!-- _class: titre -->

# Formation au<br> Markdown <!-- fit -->
Cédric Eyssette & Jean-Luc Martinez
Drane Lyon / 2024-2025


---
<!-- _class: pp -->
### Utiliser le Markdown : un exemple

<iframe src="https://markdownlivepreview.com/" width="100%" height="80%" frameborder=0></iframe>

<!-- 
# Formation sur le Markdown

_Date_ : 28 janvier 2025


## Introduction

Bonjour et bienvenue à la formation sur le **Markdown**

Aujourd'hui, nous allons voir les bases du Markdown.



=> qu'est-ce que c'est :
1. du texte brut
2. avec une mise en forme possible
3. simple

un langage de balisage
plus simple que le HTML
-->


---
<!-- _class: pp -->
<iframe src="https://mymarkmap.forge.apps.education.fr/#https://eyssette.forge.apps.education.fr/mindmap/markdown-interet.md" width="100%" height="100%" frameborder=0></iframe>

<!-- 
Faire en direct plutôt ?
Faire le lien avec les communs et la forge
-->


---
<!-- _class:  -->
<style scoped>
h3{margin-bottom:1em}
</style>
### TP1 : les bases du Markdown

_Objectif_ : faire une liste des IAN pour notre usage et pour publication sur le site de la DRANE

---
<!-- _class: fp -->
**Consignes**

1) Faire un titre de niveau 2 avec “IAN Discipline”
2) Faire une liste à puces avec "Nom :" en gras, suivi de votre prénom et nom, puis "Mail :" en gras, suivi de votre mail fonctionnel
3) Un retour à la ligne puis "Établissement :" en souligné, suivi du nom et de l'adresse de votre établissement

<span data-marpit-fragment="1">Document de travail : <a href="https://codimd.apps.education.fr/C1P_0wsJSt2uZfB_fyuegQ?both" target="_blank">https://codimd.apps.education.fr/C1P_0wsJSt2uZfB_fyuegQ?both</a></span>



---
<!-- _class: fmm -->
<style scoped>
ol{padding-top:0em; margin-left:0.75em; padding-right:0.25em}
ol > li{margin-top:0.75em}
ol ul{margin-left:-2em; font-size:0.9em}
ol ul li{margin-top:0.15em}
ul strong{color:darkred; font-weight:normal}
u{text-decoration: underline #999;}
</style>
### TP2 : utiliser le Markdown pour une publication <!-- fit -->

Contenu à utiliser : les <a href="https://codimd.apps.education.fr/C1P_0wsJSt2uZfB_fyuegQ?both" target="_blank">infos IAN du TP1</a>

1) **Pour un mail (newsletter …)** :
	* Sélectionner le rendu (à <u>droite</u> dans CodiMD)
	* Copier-coller ce contenu dans un mail à dane.ian@ac-lyon.fr
	* **Intérêt : le style d'affichage est conservé**
2) **Pour une publication web ou imprimée** :
	* Utiliser l'application A4 : <a href="https://a4.forge.apps.education.fr/" target="_blank">https://a4.forge.apps.education.fr/</a>
	* **Intérêt : la mise en page est automatique et optimisée**
	* Sélectionner votre contenu en Markdown (à <u>gauche</u> dans CodiMD)
	* Configurer l'en-tête dans A4 pour créer 4 rangées de vignettes, copier votre contenu Markdown en dessous, puis cliquer sur "Convertir"

<!--
---
pages: 1
colonnes: 4
espacementColonnes: 30px
copies: 24
paysage: true
margesX: 10px
margesY: 10px
maths: false
---

## IAN Philosophie
- **Nom** : Cédric Eyssette
- **Mail** : ian.philosophie@ac-lyon.fr

++Lieu++ : Lycée Aiguerande, 2, place Georges Dutrève – BP 50211 69823 Belleville Cedex

 -->


---
<!-- _class: fpppppp -->
### TP3 : création d'un minisite

_Objectif_ : créer un minisite pour une mise à disposition de ressources à destination des collègues sur l'IA dans votre discipline.

<span data-marpit-fragment="1">_Outil utilisé_ : <a href="https://markpage.forge.apps.education.fr/" target="_blank">Markpage</a></span>

<span data-marpit-fragment="2">Syntaxe Markdown à utiliser (<a href="https://codimd.apps.education.fr/s/BMbN6dQMt" target="_blank">fiche de synthèse</a>) :</span>

1) Liens<span data-marpit-fragment="1">, images</span><span data-marpit-fragment="2">, iframe (vidéo ou H5P)</span>
1) Encadrés<span data-marpit-fragment="1">, bloc déroulant</span><span data-marpit-fragment="2">, citations</span>

---
<!-- _class: fpp -->

#### Structure proposée
Créer un nouveau document CodiMD et reprendre ce modèle : <a href="https://codimd.apps.education.fr/bo0T4bmqR7qElr0Fhg7GSw?both" target="_blank">https://codimd.apps.education.fr/bo0T4bmqR7qElr0Fhg7GSw?both</a>

<div data-marpit-fragment="1">

#### Ressources pour le site
1. <a href="https://tube-numerique-educatif.apps.education.fr/w/7aDZmhULa2ifek8N91KEzr" target="_blank">Vidéo : les enjeux de l'IA</a>
1. <a href="https://nuage03.apps.education.fr/index.php/s/rfjp74txKaLyXxp/preview" target="_blank">Infographie : la méthode CAFÉ</a>
1. <a href="https://drane.ac-lyon.fr/spip/IMG/IA-perdir/exemple1.pdf?nolightbox" target="_blank">PDF : S'inspirer, trouver des idées</a>
1. <a href="https://drane.ac-lyon.fr/spip/IMG/IA-perdir/exemple7.pdf?nolightbox" target="_blank">PDF : Synthétiser un document</a>
1. <a href="https://drane.ac-lyon.fr/spip/IMG/IA-perdir/exemple2.pdf?nolightbox" target="_blank">PDF : Rédiger un courriel </a>

</div>


---
<!-- _class: fmm -->
### TP4 : encore plus loin !

#### Transformer du Markdown en autre chose
– Cartes mentales avec <a href="https://mymarkmap.forge.apps.education.fr/" target="_blank">myMarkmap</a>
– Cartes à jouer avec <a href="https://cartesmd.forge.apps.education.fr/" target="_blank">CartesMD</a>
– Livre numérique avec <a href="https://flipbook.forge.apps.education.fr/" target="_blank">Flipbook</a>
– Diaporama avec <a href="https://marp.app/" target="_blank">Marp</a>
– Chatbot avec <a href="https://chatmd.forge.apps.education.fr/" target="_blank">ChatMD</a>

#### Personnaliser l'affichage

– <a href="https://www.cssdebutant.com/" target="_blank">Apprendre le CSS</a>

#### Utiliser l'IA pour générer du Markdown avec une syntaxe particulière
– <a href="https://poe.com/s/FyaIzLDaBhBXOU4UvL2X" target="_blank">Exemple : générer le code d'une carte mentale</a>


---
<!-- _class: fpppppp -->

## Quel logiciel utiliser ?

### En ligne
– <a href="https://codimd.apps.education.fr/" target="_blank">CodiMD</a> pour nous
– <a href="https://digipage.app/" target="_blank">Digipage</a> pour les élèves

### En local
– Un éditeur spécialisé Markdown : <a href="https://www.marktext.cc/" target="_blank">Marktext</a>
– <a href="https://f-droid.org/packages/net.gsantner.markor/" target="_blank">Markor</a> sur Android
– Le plus complet : <a href="https://vscodium.com/" target="_blank">VSCodium</a> avec des plugins pour le Markdown
