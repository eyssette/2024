---
marp: true
theme: teaching
paginate: true
size: 4:3
---

<!-- _class: titre -->
<style scoped>
h1{padding:0 80px}
</style>
# LaForgeÉdu <br>Marklab<br>ChatMD <!-- fit -->

Cédric Eyssette (2024-2025)
https://eyssette.forge.apps.education.fr/

---
<!-- _class: partie -->

# I – <br>LaForgeÉdu <!-- fit -->
Première partie


---
<!-- _class:  -->
<style scoped>
p{color:black; position:absolute; top:30px; left:8px}
a{color:black}
</style>

![bg](https://forge.apps.education.fr/docs/communication/visuels/-/raw/main/brigit-et-komit/Brigit_et_Komit_avec_fond_forge_sans_logo.png?ref_type=heads)

https://docs.forge.apps.education.fr/


---
<!-- _class: i1t1 horizontal  -->
<style scoped>
p {font-size:1.3em; text-align:left!important;}
p:nth-of-type(1){width:400px; margin-left:20px!important; padding:0}
p:nth-of-type(2){margin-left:10px!important; width:410px}
</style>

![](https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Alexis_Kauffmann_-_Taipei_European_School_-_2017.jpg/800px-Alexis_Kauffmann_-_Taipei_European_School_-_2017.jpg)

Un projet initié en 2022 par **Alexis Kauffmann**, chef de projet logiciels et ressources éducatives libres à la _Direction du Numérique pour l'Éducation_ (DNE)


---
<!-- _class: fppppppppp -->
<style scoped>
ol {margin-left:2em!important; margin-top:0.5em}
</style>
LaForgeÉdu s'inscrit dans la **dynamique des communs numériques**.

1) Des ressources partagées
2) Une communauté
3) Une gouvernance partagée


---
<!-- _class: fpppppp -->
### Des valeurs inhérentes à LaForgeÉdu :<!-- fit -->

1) Développement du libre éducatif et des communs numériques
2) Valorisation des pratiques collaboratives : « l'union fait la forge ! »
3) Montée en compétences numériques pour tous les collègues et soutien institutionnel pour les projets sur la Forge


---
<!-- _class:  -->
Une forge ressemble à première vue à un **espace de  stockage en ligne** de fichiers que l'on peut synchroniser avec son propre ordinateur pour garantir la pérennité des données.

* Quelle est la différence avec un cloud comme Nuage sur le portail Apps ?


---
<!-- _class: souspartie-->
<style scoped>
p{padding:0px 30px; text-align:left; margin-left:60px}
</style>

## A. Un outil conçu au départ <br>pour le développement logiciel<!-- fit -->

… qu'on va pouvoir détourner pour en faire un outil pour tout le monde (ou presque…) !

---
<!-- _class:  -->
Une forge vise au départ à **héberger du code informatique**.

<span data-marpit-fragment="1">Elle n'est **pas faite pour héberger des fichiers lourds** (vidéo, audio, …)</span><span data-marpit-fragment="2"> : on y trouve surtout des fichiers au format texte.</span>

<span data-marpit-fragment="3">Une forge propose **un ensemble d'outils** pour répondre aux besoins des personnes qui **développent un logiciel**.</span>

<!-- Pas faite pour héberger des fichiers lourds :
exceptions possibles
Git LFS -->

---
<!-- _class: fmmmmmmmm -->
<style scoped>
h4 {margin-bottom:0!important}
ol {margin-top:0;}
</style>

#### Pour développer un logiciel, on a besoin de :
1) pouvoir organiser et répartir les tâches à faire grâce à des outils de **gestion de projet**
1) pouvoir **éditer facilement** le code pour créer de nouvelles fonctionnalités ou corriger des bugs, avec la possibilité d'**expérimenter** sans risques
1) pouvoir **travailler collectivement** sur le même code, avec la possibilité de **discuter** des modifications proposées et de les **intégrer** facilement
1) pouvoir conserver un **historique des modifications** et **revenir en arrière** en cas de problème
1) pouvoir lancer **automatiquement** des **scripts** qui vont **tester** / vérifier le code ou le **compiler**
1) pouvoir facilement **déployer sur le web** son logiciel
1) pouvoir créer de la **documentation** facilement
1) pouvoir récupérer le **feedback des utilisateurs** (“_issues_”) et **collaborer** avec d'autres développeurs pour corriger les bugs et ajouter des fonctionnalités

<!-- évoquer : méthode agile / DevOps -->

---
La _Forge des Communs Numériques Éducatifs_ est une forge fondée sur un logiciel libre : Gitlab, qui propose tous ces outils.

<span data-marpit-fragment="1">La connexion se fait via le portail Apps Education</span><span data-marpit-fragment="2"> (possibilité de comptes externes).</span>

<span data-marpit-fragment="3">Les projets que l'on crée peuvent être publics ou privés.</span>


---
<!-- _class: souspartie-->

## B. Un outil qu'on peut <br>détourner et qui peut <br>servir à tout le monde<!-- fit -->
 

---
<!-- _class: pp i1t0 -->
<style scoped>
img{margin-left:0.85em}
</style>
[![](https://raw.githubusercontent.com/eyssette/mindmap/refs/heads/main/usages-possibles-forge.svg)](https://mymarkmap.forge.apps.education.fr/#https://raw.githubusercontent.com/eyssette/mindmap/refs/heads/main/usages-possibles-forge.md)


---
<!-- _class: partie -->

# II – <br>Marklab <!-- fit -->
Deuxième partie


---
<!-- _class: i2t0 horizontal contain pp-->

[![](https://marklab.forge.apps.education.fr/assets/logo/logo.svg)](https://marklab.forge.apps.education.fr/)

![](qrcodeMarklab.png)


---
<!-- _class: souspartie -->
## A. Le Markdown : <br>qu'est-ce que c'est ? <!-- fit -->

---
<!-- _class: pp -->
<style scoped>
pre {margin-left:60px; margin-right:60px; padding-bottom: 1px}
</style>

### Une syntaxe simple qui permet de structurer ses idées

```markdown
# Un titre de niveau 1

## Un titre de niveau 2

Du contenu **très** _intéressant_ !

- une liste
- d'items
- non ordonnée

1. une liste
2. ordonnée

[mon lien](https://monlien.fr)
![une image](https://site.fr/monimage.png)

```


---
<!-- _class: souspartie -->
## B. Le Markdown : <br>quel est l'intérêt ? <!-- fit -->


---
<!-- _class: fm pp -->

1) **Un format léger**
	* édition rapide
	* sauvegarde et recherche dans ses documents facilitées
2) **Un format ouvert**
	* pas de contrainte de système ou de logiciel
	* collaboration plus facile
	* pérennité assurée
3) **Une syntaxe simple, mais puissante**
	* facile à apprendre
	* extensions possibles
	* document qui reste lisible par un être humain
	* document exploitable par un programme informatique

<!-- carte mentale ? -->

---
<!-- _class: fpppppppp -->
<style scoped>
ol{margin-top:0}
div{columns: 2}
</style>
On peut transformer un contenu Markdown pour faire : 

<div>

1. un PDF
1. un diaporama
1. un site web
1. des pads
1. une carte mentale
1. des cartes à jouer
1. un livre numérique
1. des quiz
1. un chatbot

</div>

--- 
<!-- _class: partie -->

# III – <br>ChatMD <!-- fit -->
Troisième partie


---
<!-- _class: i1t0  pp -->

[![](https://chatmd.forge.apps.education.fr/logo.svg)](https://eyssette.forge.apps.education.fr/2024/slides/drane/chatmd)