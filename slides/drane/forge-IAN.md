---
marp: true
theme: teaching
paginate: true
size: 4:3
---

<!-- _class: titre-->
<style scoped>
img {position:absolute; top:40px; left:30px;z-index:1; height:450px; width:360px; background:transparent!important}
h1 {margin-left:270px; padding-right:30px!important; line-height:1.15; text-align:right;}
</style>


# La Forge des <br>communs <br>numériques<br> éducatifs<!-- fit -->

![](https://docs.forge.apps.education.fr/assets/images/brigit_et_komit_transparent.svg)

Drane Site de Lyon – Formation IAN
13 mars 2025

---

<!-- _class: pp  -->
<style scoped>
*{font-size:0.9525em}
section{padding:0px}
p {font-size:0.3em;opacity:0.75;margin-top:0.75em}
td,th{border:none!important}
td:nth-of-type(2){padding-left:40px; line-height:1.25em; padding-right:0px}
img{width:240px}
</style>

|||
|:-:|:-|
|![Panda](https://drane-lyon.forge.apps.education.fr/diaporama/img/panda.svg)|<span data-marpit-fragment="1">- Je ne sais pas ce que c'est !</span><br><span data-marpit-fragment="2">- Je n'ai pas envie ou ça me semble trop compliqué</span><br><span data-marpit-fragment="3">- Je suis sceptique, voire très critique</span>|
|![Chat](https://drane-lyon.forge.apps.education.fr/diaporama/img/chat.svg)|<span data-marpit-fragment="1">- Je veux bien tester, voire j'ai testé</span><br><span data-marpit-fragment="2">- Je ne vois pas bien ce que ça peut m'apporter dans ma pratique</span>|
|![Corneille](https://drane-lyon.forge.apps.education.fr/diaporama/img/corneille.svg)|<span data-marpit-fragment="1">- J'ai testé et j'ai repéré des usages intéressants</span><br><span data-marpit-fragment="2">- Je souhaite les intégrer dans ma pratique, voire je l'ai déjà fait</span>|


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
<!-- _class: -->
<style scoped>
h2 {background:rgba(0,0,0,0.9); color:white; padding:60px 130px;}
</style>
## I - Qu'est-ce <br>qu'une forge ?<br> À quoi ça sert ? <!-- fit -->

![bg](https://forge.apps.education.fr/docs/communication/visuels/-/raw/main/brigit-et-komit/Brigit_et_Komit_avec_fond_forge_sans_logo.png?ref_type=heads)



---
<!-- _class:  -->
Une forge ressemble à première vue à un **espace de  stockage en ligne** de fichiers que l'on peut synchroniser avec son propre ordinateur pour garantir la pérennité des données.

* Quelle est la différence avec NextCloud ?

---
<!-- _class: pp -->
<style scoped>
section {display:flex; flex-direction:column; align-items:center;}
p {margin:0;}
img {height:100px; background:transparent!important; float:left; margin-right:30px; margin-left:0px}
h3 {width:90%; background:rgba(0,0,0,0.1); padding-top:50px;  padding-bottom:50px; padding-right:40px}
</style>


### ![](https://forge.apps.education.fr/docs/communication/visuels/-/raw/main/avatars/avatar_Komit_face_cercle.png?ref_type=heads) A. Un outil conçu <br>au départ pour le <br>développement logiciel<!-- fit -->

<span data-marpit-fragment="1">… qu'on va pouvoir détourner pour en faire un outil pour tout le monde</span> <span data-marpit-fragment="2">(ou presque…) !</span>

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
<!-- _class: pp -->
<style scoped>
section {display:flex; flex-direction:column; align-items:center;}
p {margin:0; }
img {height:150px; background:transparent!important; float:left; margin-right:30px; margin-left:0px}
h3 {width:95%; background:rgba(0,0,0,0.1); padding-top:50px;  padding-bottom:50px; padding-right:60px}
</style>


### ![](https://forge.apps.education.fr/docs/communication/visuels/-/raw/main/avatars/avatar_Komit_face_cercle.png?ref_type=heads) B. Un outil qu'on peut <br>détourner et qui peut <br>servir à tout le monde<!-- fit -->


---
<!-- _class: pp i1t0 -->
<style scoped>
img{margin-left:0.85em}
</style>
![https://mymarkmap.forge.apps.education.fr/#https://raw.githubusercontent.com/eyssette/mindmap/refs/heads/main/usages-possibles-forge.md](https://raw.githubusercontent.com/eyssette/mindmap/refs/heads/main/usages-possibles-forge.svg)


---
<!-- _class:  -->
<style scoped>
h2 {background:rgba(0,0,0,0.9); color:white; padding:90px 130px;}
</style>
## II - Première <br>entrée concrète <br>dans la Forge <!-- fit -->

![bg](https://forge.apps.education.fr/docs/communication/visuels/-/raw/main/brigit-et-komit/Brigit_et_Komit_avec_fond_forge_sans_logo.png?ref_type=heads)



---
<!-- _class: pp fpppppp-->
<style scoped>
section {display:flex; flex-direction:column; align-items:center;}
p {margin:0; }
img {height:120px; background:transparent!important; float:left; margin-right:30px; margin-left:0px}
h3 {width:95%; background:rgba(0,0,0,0.1); padding-top:50px;  padding-bottom:50px; padding-right:60px}
</style>


### ![](https://forge.apps.education.fr/docs/communication/visuels/-/raw/main/avatars/avatar_Komit_face_cercle.png?ref_type=heads) A. Explorer les logiciels et <br>ressources de la Forge <!-- fit -->


Niveau 1


---
<!-- _class: fm -->

1) Utiliser la cartographie
	- https://docs.forge.apps.education.fr/cartographie/
2) Utiliser un portail spécifique :<br>
	- https://primaire.forge.apps.education.fr/
	- https://marklab.forge.apps.education.fr/
3) Utiliser l'explorateur Gitlab
	- https://forge.apps.education.fr/explore/projects

<!-- 
Montrer les éléments clés d'un projet :
descriptif, README, licence …
-->


---
<!-- _class: i1t1 pp-->
<style scoped>
h3{text-align:center}
img{margin:auto;display:block;height:600px}
</style>

### La boîte à rêves

[![](boiteareves.png)](https://laboiteareves.forge.apps.education.fr/)

---
<!-- _class: pp -->
<style scoped>
section {display:flex; flex-direction:column; align-items:center;}
p {margin:0; }
img {height:150px; background:transparent!important; float:left; margin-right:30px; margin-left:0px}
h3 {width:95%; background:rgba(0,0,0,0.1); padding-top:50px;  padding-bottom:50px; padding-right:60px}
</style>


### ![](https://forge.apps.education.fr/docs/communication/visuels/-/raw/main/avatars/avatar_Komit_face_cercle.png?ref_type=heads) B. S'inscrire dans <br>la communauté <br> de la Forge <!-- fit -->


Niveau 2


---
<!-- _class: f -->

1) S'inscrire sur la plateforme
	- https://docs.forge.apps.education.fr/
2) S'inscrire dans les groupes Tchap de la communauté de la forge
	- Salon principal : [LaForgeÉdu](https://tchap.gouv.fr/#/room/!fnVhKrpqraWfsSirBK:agent.education.tchap.gouv.fr?via=agent.education.tchap.gouv.fr&via=agent.collectivites.tchap.gouv.fr)
	- [TEST LaForgeÉdu](https://tchap.gouv.fr/#/room/!FMbqDmwePWphQDroBV:agent.education.tchap.gouv.fr?via=agent.education.tchap.gouv.fr&via=agent.diplomatie.tchap.gouv.fr&via=agent.dinum.tchap.gouv.fr)
	- [DEV LaForgeÉdu](https://tchap.gouv.fr/#/room/!BXZZsyWklktciNEDbM:agent.education.tchap.gouv.fr?via=agent.education.tchap.gouv.fr)
	- [IA LaForgeÉdu](https://tchap.gouv.fr/#/room/!IpZpqVTFcNrhUNUAJc:agent.education.tchap.gouv.fr?via=agent.education.tchap.gouv.fr)
3) Créer un ticket pour faire un rapport de bug ou une suggestion d’amélioration pour un projet
	- [Bac à sable](https://forge.apps.education.fr/drane-lyon/ian/sandbox/test)


<!-- 
Montrer un exemple de projet avec des tickets traités pour faire évoluer l'application
-->

---
<!-- _class:  -->
<style scoped>
h2 {background:rgba(0,0,0,0.9); color:white; padding:90px 130px;}
</style>
## II - Créer et participer <br>à un projet collaboratif <!-- fit -->

![bg](https://forge.apps.education.fr/docs/communication/visuels/-/raw/main/brigit-et-komit/Brigit_et_Komit_avec_fond_forge_sans_logo.png?ref_type=heads)


---
<!-- _class: fpppppppp -->

1) Choix du projet et répartition dans les groupes de travail : [s'inscrire dans ce pad](https://lightpad.forge.apps.education.fr/#https://codimd.apps.education.fr/kMUkZK9HTIyhzj_mrR_TYA)
2) Utilisation de l'éditeur en ligne (WebIDE) pour faire des modifications
3) Organisation du travail collaboratif sur la Forge