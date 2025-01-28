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

1) Faire un titre de niveau 2 avec “IAN Discipline”
2) Faire une liste à puces avec "Nom :" en gras, suivi de votre prénom et nom, puis "Mail :" en gras, suivi de votre mail fonctionnel
3) Un retour à la ligne puis "Établissement :" en souligné, suivi du nom et de l'adresse de votre établissement

<span data-marpit-fragment="1">Document de travail : https://codimd.apps.education.fr/C1P_0wsJSt2uZfB_fyuegQ?both</span>

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

Contenu à utiliser : les [infos IAN du TP1](https://codimd.apps.education.fr/C1P_0wsJSt2uZfB_fyuegQ?both)

1) **Pour un mail (newsletter …)** :
	* Sélectionner le rendu (à <u>droite</u> dans CodiMD)
	* Copier-coller ce contenu dans un mail à drane.ian@ac-lyon.fr
	* **Intérêt : le style d'affichage est conservé**
2) **Pour une publication web ou imprimée** :
	* Utiliser l'application A4 : https://a4.forge.apps.education.fr/
	* **Intérêt : la mise en page est automatique et optimisée**
	* Sélectionner le contenu en Markdown (à <u>gauche</u> dans CodiMD)
	* Configurer l'en-tête dans A4 (p.ex. : 14 colonnes, 24 copies), copier votre contenu Markdown en dessous, puis cliquer sur "Convertir"

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
<!-- _class:  -->
### TP3 : création d'un ministe

_Objectif_ : créer un minisite pour une mise à disposition de ressources à destination des collègues sur l'IA dans votre discipline.

_Outil utilisé_ : [Markpage](https://markpage.forge.apps.education.fr/)

Syntaxe Markdown à utiliser :
1) Liens<span data-marpit-fragment="1">, images</span><span data-marpit-fragment="2">, iframe (vidéo ou H5P)</span>
1) Encadrés<span data-marpit-fragment="1">, bloc déroulant</span><span data-marpit-fragment="2">, citations</span>

<!-- 1) évocation des autres possibilités : tableaux, blocs de code, Latex -->

---
<!-- _class: fpp -->

#### Structure proposée
– I. Fonctionnement d'une IA générative
– II. Cadre juridique et enjeux
– III. Usages de l'IA dans mon cadre professionnel

#### Ressources pour le site
1. [Vidéo : les enjeux de l'IA](https://tube-numerique-educatif.apps.education.fr/w/7aDZmhULa2ifek8N91KEzr)
1. [Infographie : la méthode CAFÉ](https://nuage03.apps.education.fr/index.php/s/rfjp74txKaLyXxp/preview)
1. [PDF : S'inspirer, trouver des idées](https://drane.ac-lyon.fr/spip/IMG/IA-perdir/exemple1.pdf?nolightbox)
1. [PDF : Synthétiser un document](https://drane.ac-lyon.fr/spip/IMG/IA-perdir/exemple7.pdf?nolightbox)
1. [PDF : Rédiger un courriel ](https://drane.ac-lyon.fr/spip/IMG/IA-perdir/exemple2.pdf?nolightbox)



---
<!-- _class: fmm -->
### TP4 : encore plus loin !

#### Transformer du Markdown en autre chose
– Cartes mentales avec [myMarkmap](https://mymarkmap.forge.apps.education.fr/)
– Cartes à jouer avec [CartesMD](https://cartesmd.forge.apps.education.fr/)
– Livre numérique avec [Flipbook](https://flipbook.forge.apps.education.fr/)
– Diaporama avec [Marp](https://marp.app/)
– Chatbot avec [ChatMD](https://chatmd.forge.apps.education.fr/)

#### Personnaliser l'affichage

– [Apprendre le CSS](https://www.cssdebutant.com/)

#### Utiliser l'IA pour générer du Markdown avec une syntaxe particulière
– [Exemple : générer le code d'une carte mentale](https://poe.com/s/FyaIzLDaBhBXOU4UvL2X)


---
<!-- _class: fpppppp -->

## Quel logiciel utiliser ?

### En ligne
– [CodiMD](https://codimd.apps.education.fr/) pour nous
– [Digipad](https://digipad.app/) pour les élèves

### En local
– Un éditeur spécialisé Markdown : [Marktext](https://www.marktext.cc/)
– [Markor](https://f-droid.org/packages/net.gsantner.markor/) sur Android
– Le plus complet : [VSCodium](https://vscodium.com/) avec des plugins pour le Markdown
