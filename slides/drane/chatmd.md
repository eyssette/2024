---
marp: true
theme: uncover
paginate: false
size: 4:3
---

<style>
h2{text-align:center;}
strong{font-weight:400; color:rgb(27 45 87);}
</style>

<!-- _class: invert -->
<style scoped>
section{background: rgb(71,94,149);background: linear-gradient(315deg, rgb(53 89 174 / 89%) 0%, rgb(27 45 87 / 89%) 26%, rgb(10 24 56) 53%, rgba(28, 25, 50, 1) 99%);
color:white}
h1{ margin-bottom:0.75em;}
h1 span{font-size:0.7em; line-height:1em!important; display:block; margin-top:0.25em}
p span {font-size:0.8em; line-height:1em!important;display:block;margin-top:0.25em;}
a {font-size:0.8em; display:block; margin-top:-0.5em; }
</style>

# 🗣️ ChatMD, <span>un outil libre et gratuit <br>pour créer un chatbot</span> <!-- fit -->

Cédric Eyssette
<span>Chargé de projet DRANE Lyon</span>
https://chatmd.forge.apps.education.fr/


---
<!-- _class: invert -->
## I – <br>Présentation <br>générale <!-- fit -->

---
<!-- _class:  -->
<style scoped>
h2{margin-top:-0.5em}
section{text-align:left; padding:40px;}
span {font-size:0.97em}
.but{color:darkred;display:inline-block;width:100%;text-align:center; margin-top:0.25em; margin-bottom:0.75em}
</style>

## Contexte

<span data-marpit-fragment="1">📈 **Avec l'IA** : renouveau de l'intérêt pour les chatbots</span>
<span data-marpit-fragment="2">💬 **Interaction** plus fluide et intuitive</span>
<span data-marpit-fragment="3">⚡ Accès **immédiat**, disponibilité **continue**</span>

<span data-marpit-fragment="4" class="but">Mais</span>
<span data-marpit-fragment="5">🤯 Risque d'**“hallucinations”** et de **biais**</span>
<span data-marpit-fragment="6">⚖️ **Problématiques** économiques, </span><span data-marpit-fragment="7">juridiques, <span data-marpit-fragment="8">sociales, morales et écologiques</span>


---
<!-- _class:  -->
<style scoped>
section {text-align:left; padding:0px 20px 0px 40px;}
h2 {margin-top:-0.45em; margin-bottom:0.45em}
img {width:1em; height:1em; object-fit:cover}
img[src="brigit.avif"], img[src="flagOfEurope.svg"]{border-radius:50%; width:0.75em; height:0.75em;}
span[data-marpit-fragment="3"]{margin-top:0.5em!important; display:block}
p {line-height:1.25em}
a{color:rgb(27 45 87)}
</style>

## La solution [ChatMD](https://chatmd.forge.apps.education.fr)

<span data-marpit-fragment="1">🔨 Un logiciel en ligne, **libre et gratuit**, hébergé sur la ![](brigit.avif) **ForgeEdu**</span>

<span data-marpit-fragment="2">👩‍⚖️ Pas besoin de compte, pas de collecte de données &rArr; **compatible ![](flagOfEurope.svg) RGPD**</span>

<span data-marpit-fragment="3">✨ **Création simpliﬁée** d'un chatbot, à partir d'un ﬁchier texte en Markdown</span>


---
<!-- _class:  -->
<style scoped>
img{height:670px}
</style>
![bg left:50% contain Exemple de contenu en Markdown](chatmd-contenuMarkdown.png)

![Rendu interprété par ChatMD](chatmd-renduDuMarkdown.png)

---
<!-- _class:  -->
<style scoped>
section {text-align:left; padding:0px 30px 0px 50px;font-size:4.2em}
h2 {margin-top:-0.45em; margin-bottom:0.45em}
img {width:1em; height:1em; object-fit:cover}
img[src="brigit.avif"], img[src="flagOfEurope.svg"]{border-radius:50%; width:0.75em; height:0.75em;}
span[data-marpit-fragment="3"]{margin-top:0.5em!important; display:block}
p {line-height:1.25em}
a{color:rgb(27 45 87)}
</style>
## ChatMD et l'IA générative <!-- fit -->

<span data-marpit-fragment="1">⚙️ Algorithme principal **sans IA**</span>

<span data-marpit-fragment="2">🎯 Connexion à une IA de manière **sobre et ciblée**</span>

<!-- 
Décomposition en tokens pondérés
Calcul de similarité cosinus
Prise en compte de la distance de Levenshtein
-->


---
<!-- _class:  -->
<style scoped>
section{background:#222}
</style>
![bg contain](chatmd-exemple-VITA.png)


---
<!-- _class: invert -->
## II – <br>Usages <br>possibles<!-- fit -->

---
<!-- _class:  -->
<style scoped>
section{text-align:left; padding:40px}
h2{margin-bottom:1em}
h2 span {display:block; font-size:0.7em}
img {display:block!important; width:100%}
aside {font-size:0.5em; position:absolute; bottom:0; left:20px;color:lightgrey}
aside a{color:lightgrey}
</style>
## Usages possibles <span>d’un point de vue institutionnel, ou dans le cadre d’une formation</span>

![Carte mentale des usages institutionnels ou dans le cadre d'une formation, de ChatMD : faciliter la recherche d'informations institutionnelles / créer un tutoriel / transformer une FAQ austère en un chatbot plus agréable](chatmd-usages-institutionnels-formation.png)

<aside>

[1/Assistance](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/KgiRUrr8Ttq9-CxZGmxmmg), [2/IGN](https://ignf-ma-carte.github.io/chatbot/)
[3/ Accessibilité](https://chatmd.forge.apps.education.fr/#https://horvathjulie.forge.apps.education.fr/bot/comprehension.md)
</aside>

---
<!-- _class:  -->
<style scoped>
section{text-align:left; padding:40px}
h2{margin-bottom:1em}
h2 span {display:block; font-size:0.7em}
img {display:block!important; width:100%}
aside {font-size:0.5em; position:absolute; bottom:0; left:20px;color:lightgrey}
aside a{color:lightgrey}
</style>
## Usages possibles <span>dans un cadre pédagogique</span>

![Carte mentale des usages pédagogiques de ChatMD : créer des guides méthodologiques / concevoir des outils de révision / répondre à des questions des élèves et des parents sur l'établissement, l'orientation / inventer des dispositifs créatifs et engageants : discussion avec un personnage historique, histoires interactives](chatmd-usages-pedagogiques.png)

<aside>

[1/Philosophie](https://chatmd.forge.apps.education.fr/#dissertation-philo), 
[2/ Microscope](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/xGNHIJSeTVCk6FHas-_71g)
[3/Maths](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/89_9jQXNRga1mbGgXOUuJw)
[4/ Orientation](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/UB1xium-TSqpdHEqdxipTw)
[5/ Sartre](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/39v880G4Siu9Xw93UOTF0g)
</aside>

---
<!-- _class: invert -->
## III – <br>Fonctionnalités <br>avancées<!-- fit -->


---
<!-- _class: -->
<style scoped>
section{padding:10px 50px}
img{height:570px;}
p:nth-of-type(1){text-align:left;}
</style>

On utilise un _en-tête YAML_ pour ajouter certaines fonctionnalités plus avancées

![](chatmd-fonctionnalites-yaml.png)


---
<!-- _class:  -->
<style scoped>
section{padding:10px 20px}
img{height:520px;}
p:nth-of-type(1){font-size:0.95em;margin-bottom:1em}
</style>

Ou alors on utilise une syntaxe particulière

![](chatmd-exemple-VITA.png)


---
<!-- _class:  -->
<style scoped>
section{padding:40px}
p, li{text-align:left; font-size:0.8em; line-height:1.25em}
li{margin-bottom:0.5em;}
</style>
## Gestion de l'affichage et du contenu <!-- fit -->

**Avec ChatMD, on peut :**

* Personnaliser l’apparence de son chatbot : avatar, styles CSS, activation/désactivation du clavier
* Détecter automatiquement les gros mots et des insultes
* Gérer des contenus particuliers : formules mathématiques, blocs encadrés, sons, schémas et graphiques, iframes
* Gérer un chatbot plus important : variables, source répartie entre plusieurs fichiers, structuration du document

---
<!-- _class:  -->
<style scoped>
section{padding:40px; font-size:2.6em}
p, li{text-align:left; font-size:0.8em; line-height:1.25em}
li{margin-bottom:0.5em;}
</style>
## Interactions avec l'utilisateur plus avancées <!-- fit -->

**Avec ChatMD, on peut :**

* Affiner l'algorithme de sélection de la réponse la plus pertinente : mots clés, mots clés négatifs …
* Faire un quiz pour poser des questions et vérifier la réponse de l’utilisateur
* Introduire de l'aléatoire dans les réponses ou dans les questions du chatbot
* Utiliser des variables dynamiques et du conditionnement en fonction de ces variables 
* Avoir plusieurs bots qui répondent



---
<!-- _class:  -->
<style scoped>
section{padding:40px; font-size:2.75em}
p, li{text-align:left; font-size:0.8em; line-height:1.25em}
li{margin-bottom:0.5em;}
</style>
## Utilisation d'une IA générative <!-- fit -->

**Avec ChatMD, on peut :**

* Connecter son chatbot à une IA générative (sur internet ou en local) 
* Faire du RAG de manière simplifiée en indiquant les sources d'informations, qui seront utilisées par le LLM pour produire sa réponse.

<span data-marpit-fragment="1">On peut aussi utiliser une IAG pour produire un chatbot avec la syntaxe de ChatMD</span>


---
<!-- _class: invert -->
## IV – <br>Création d'un<br> chatbot !<!-- fit -->


---
<!-- _class:  -->
<style scoped>
section{font-size:4em;}
h3{font-size:1.75em}
li{text-align:left;}
</style>
### Prérequis

1) Connexion au portail Apps Éducation
2) Connexion à CodiMD



---
<!-- _class:  -->
<style scoped>
section{padding:0 30px; font-size: 2.8em}
h3{font-size:2em}
p, li{text-align:left; font-size:0.9em}
p strong{font-weight:bold}
</style>

### Proposition

**Objectif :** créer un chatbot pour accompagner les élèves dans la compréhension de la méthode ou d'un point de cours particulier

* **1er niveau** : mettre en place la structure de base
* **2e niveau** : personnaliser l'affichage et mettre en forme le contenu
* **3e niveau** : questionner les élèves et évaluer leurs réponses

<!--
se rappeler
=> se tester, se questionner

** Gestion contenus particuliers :
insertion image avec Codi
encadrés
maths: true

Personnalisation :
clavier: false
avatar
avatarCercle: true
footer


** Utiliser ChatMD pour évaluer :
- Clic sur un bouton :
1) [intitulé]​(lien) au lieu de 1. [intitulé]​(lien)
obfuscate: true
utiliser ---
ou une variable
- Réponse simple (détection de mots clés):
!​Next: Titreréponse
- Evaluation par un LLM
-->