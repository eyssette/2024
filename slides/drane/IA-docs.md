---
marp: true
theme: teaching
paginate: true
size: 4:3
---

<!-- _class: titre -->
<style scoped>
span {font-size:0.7em; display:block; margin-top:-10px}
</style>
# L'intelligence <br>artificielle :<br> <span>définitions et défis</span> <!-- fit -->

Cédric Eyssette - chargé de projet
DRANE site de Lyon


---
<!-- _class: pp-->
<style scoped>
*{font-size:0.9525em}
section{padding:0px}
p {font-size:0.3em;opacity:0.75;margin-top:0.75em; text-align:center;}
td,th{border:none!important;}
td:nth-of-type(2){padding-left:30px; line-height:1.25em; padding-right:0px;width:600px;}
img{display:block;margin-left:-20px}
</style>

|||
|:-:|:-|
|![Panda](https://drane-lyon.forge.apps.education.fr/diaporama/img/panda.svg)|<span data-marpit-fragment="1">- Je n'ai pas envie ou ça me semble <br>trop compliqué</span><br><span data-marpit-fragment="2">- Je suis sceptique, voire très critique</span><br><span data-marpit-fragment="3">- On peut, voire on doit s'en passer !</span>|
|![Chat](https://drane-lyon.forge.apps.education.fr/diaporama/img/chat.svg)|<span data-marpit-fragment="1">- Je veux bien tester, voire j'ai testé</span><br><span data-marpit-fragment="2">- Je ne vois pas bien ce que ça peut m'apporter dans ma pratique</span>|
|![Corneille](https://drane-lyon.forge.apps.education.fr/diaporama/img/corneille.svg)|<span data-marpit-fragment="1">- J'ai testé et j'ai repéré des usages intéressants</span><br><span data-marpit-fragment="2">- Je souhaite les intégrer dans ma pratique, voire je l'ai déjà fait</span>|

Source : [Guide sur les IA génératives de l'UNIGE](https://www.unige.ch/numerique/files/8317/2587/9842/Rapport_IA_Generatives_-_UNIGE_-_SEPTEMBRE_2024_15.556_x_22_cm.pdf) (sous licence CC-BY-NC-SA)


---
<!-- _class:  -->
<style scoped>
section {font-size:4em;}
</style>

### Plan

<span data-marpit-fragment="1">**I** - Quelques repères fondamentaux</span>

<span data-marpit-fragment="2">**II** - Côté profs</span>

<span data-marpit-fragment="3">**III** - Côté élèves</span>


---
<!-- _class: partie -->
# I - <br>Quelques repères <br>fondamentaux <!-- fit -->
Première partie


---
<!-- _class: souspartie -->
<style scoped>
span{font-weight:normal;display:block; margin-top:0.5em; text-align:center}
</style>
## A. <br>Une question philosophique :<br> <span>L'IA remet-elle en question <br>la singularité de l'intelligence<br> humaine ?</span> <!-- fit -->


---
<!-- _class: i1t1 vertical -->

La philosophie classique : l'intelligence comme propre de l'homme

![](https://www.musee-rodin.fr/sites/default/files/styles/scale_w1000_h500/public/2020-12/2017_05_23_penseur_jm016_1.jpg?itok=QxHLnDgd)

<!-- 
Question sur soi, sur sa propre pensée
remise en question

intelligence => Logos
Noûs
(matière / esprit ; ce qui nous rapproche de la divinité)

propre de l'être humain

raisonner (rapport à soi)
juger, décider (rapport au monde)
discuter (rapport aux autres)


dualisme

-->

---
<!-- _class: i1t1 vertical-->
Le canard de Vaucanson (XVIII<sup>e</sup>)

![](https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Ure%27s_rendering_of_Maillard%27s_automaton.jpg/800px-Ure%27s_rendering_of_Maillard%27s_automaton.jpg)


<!-- 
Question de la mécanisation de l'intelligence
 -->

---
<!-- _class: i2t0 -->

![](https://upload.wikimedia.org/wikipedia/commons/a/a3/Julien_Offray_de_La_Mettrie.jpg?uselang=fr)

![](https://www.edition-originale.com/media/h-3000-la-mettrie_lhomme-machine_1948_tirage-de-tete_0_24935.JPG)

<!-- automate spirituel
Homme-machine -->

---
<!-- _class: i1t1 vertical -->

L'automate joueur d'échecs (XVIII<sup>e</sup>)

![](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Racknitz_-_The_Turk_3.jpg/800px-Racknitz_-_The_Turk_3.jpg)

<!-- 
Le Turc mécanique ou l’automate joueur d'échecs est une célèbre mystification construite à la fin du xviiie siècle : il s’agissait d'un prétendu automate doté de la faculté de jouer aux échecs. I

Construit et dévoilé pour la première fois en 1770 par Johann Wolfgang von Kempelen, le mécanisme semblait capable de jouer contre un adversaire humain, ainsi que de résoudre le problème du cavalier, un casse-tête qui exige de déplacer un cavalier afin d'occuper une seule fois chaque case de l'échiquier
 -->


---
<!-- _class: i1t1 vertical -->
La machine de Turing

![](https://openclipart.org/image/800px/339637)

---
<!-- _class: i1t1 vertical -->
Le test de Turing

![](https://upload.wikimedia.org/wikipedia/commons/5/55/Turing_test_diagram.png)


---
<!-- _class: i1t1 vertical -->

Une expérience de pensée de Searle :<br> la chambre chinoise

[![](https://i.ibb.co/Njjxs77/chambre-Chinoise.png)](https://ladigitale.dev/digiview/#/v/65e952a4e0607)


---
<!-- _class: citationC fmmmmmmm-->
<style scoped>
figure {margin-right:-220px!important}
</style>

![bg left:20% ](https://web.static-rmg.be/if/c_fit,w_1200,h_1200/0d5ae89fcb900dc10d0d6a4fe76f6a07.jpg)

> « Même privée de compréhension, l’intelligence artificielle peut encore viser à reproduire la structure de l’intelligence humaine […] Non seulement elle le peut mais elle le doit — telle est du moins l’opinion de Simon et Newell et de bien d’autres chercheurs en IA de la première époque, pour qui, dans les termes de l’un d’eux, Roger Schank, « l’étude de l’intelligence artificielle n’est rien d’autre que l’étude de l’intelligence humaine ». […] Cette perspective est très tôt contestée par Minsky. Il veut affranchir l’IA de la contrainte de ce qu’il appelle l’équivalence forte — cet isomorphisme entre le chemin suivi par l’intelligence artificielle et l’intelligence humaine accomplissant la même tâche. Il estime qu’en l’état présent des sciences cognitives se jumeler avec elles ralentit l’IA dans sa progression. Elle a donc tout avantage à se limiter à une équivalence faible, qui se borne à imposer que l’intelligence artificielle aboutisse aux mêmes résultats que l’intelligence humaine attelée à la même tâche […] McCarthy est plus radical encore, et préconise d’oublier l’intelligence humaine et de ne s’occuper que de faire résoudre certains problèmes automatiquement par les ordinateurs. »
>> Daniel **Andler**, _Intelligence artificielle, intelligence humaine : la double énigme_

<!-- 
Intelligence :
capacité à résoudre des problèmes

IA étroite / IA générale
IA faible / IA forte

rapport au corps : cognition incarnée
-->



---
<!-- _class: souspartie -->
<style scoped>
span{font-weight:normal;display:block; text-align:center; margin-top:0.5em}
</style>
## B. Une question <br> technique et scientifique : <br><span>Comment ça marche ?</span><!-- fit -->


---
<!-- _class: etape -->
### 1/ Deux types d'IA


---
<!-- _class:  -->
### a) L'IA classique : une IA symbolique <!-- fit -->

<span data-marpit-fragment="1">= une modélisation du raisonnement par la manipulation de symboles et de règles explicites.</span>

<span data-marpit-fragment="2">On a ici **une intelligence qui existe avant** </span><span data-marpit-fragment="3">: on a d'abord modélisé la résolution du problème sous la forme d'un algorithme.</span>

<!-- avant le système artificiel qui l'implémente -->

---
<!-- _class: i1t1 vertical  -->
#### Algorithme de Dijkstra

![](https://minio.apps.education.fr/codimd-prod/uploads/upload_543c0e31721514114c32309f2d601db1.png)


---
<!-- _class:  -->

Une IA classique

= un système **logico-déductif** qui applique des règles générales à des cas particuliers.

<span data-marpit-fragment="1">Il faut d'abord avoir l'intelligence du problème avant de trouver la solution.</span>


---
<!-- _class: fmm -->
<style scoped>
h3{text-align:center;margin-bottom:1.5em; font-size:1.5em}
p{margin:auto; margin-top:1.5em; text-align:center}
.beforebox{width:280px;display:inline-block;vertical-align:middle;text-align:right; padding-right:0.75em}
.box{border:1px solid black; padding:20px 30px;vertical-align:middle; margin-left:0.75em;margin-right:0.75em; display:inline-block;width:150px}
.afterbox{width:130px;display:inline-block;vertical-align:middle; padding-left:0.5em}
.metaphor{font-weight:bold}
.metaphor .box {border-width:3px}
</style>
### Une métaphore

<span class="metaphor"><span class="beforebox">Ingrédients</span> &rarr; <span class="box">Recette</span> &rarr; <span class="afterbox">Gâteau</span></span>

<span data-marpit-fragment="1"><span class="beforebox">Carte, point de <br>départ, point <br>d'arrivée</span> &rarr; <span class="box">Algorithme</span> &rarr;  <span class="afterbox">Trajet</span></span>

<span data-marpit-fragment="2"><span class="beforebox">Contraintes des professeurs, des élèves et des salles</span> &rarr; <span class="box">Algorithme</span> &rarr;  <span class="afterbox">Emploi du temps</span></span>


<!-- 
Cours de [Chloé-Agathe Azencott](https://cazencott.info/dotclear/public/lectures/2021-05-cours-Azencott.pdf)
 -->

<!-- grâce à un algorithme, on peut à partir d'une carte, d'un point de départ et d'un point d'arrivée, calculer le meilleur trajet possible

grâce à un algorithme, on peut à partir des contraintes des profs, des élèves et des salles, produire le meilleur emploi du temps possible (ou pas … ;)  -->

---
<!-- _class:  -->
### b) L'apprentissage automatique

<span data-marpit-fragment="1">= la capacité d'un système à apprendre à partir des données, plutôt que d'être explicitement programmé au préalable avec des règles fixes.</span>

<span data-marpit-fragment="2">On a ici **une intelligence qui existe après l'entraînement**</span><span data-marpit-fragment="3">, à travers l'expérience acquise par le système.</span>


---
<!-- _class: fmmm -->
<style scoped>
h3{text-align:center;margin-bottom:1.5em; font-size:1.5em}
p{margin:auto; margin-top:2em; text-align:center}
.beforebox{width:200px;display:inline-block;vertical-align:middle;text-align:right; padding-right:0.75em}
.box{border:1px solid black; padding:20px 30px;vertical-align:middle; margin-left:0.75em;margin-right:0.5em; display:inline-block;width:190px; font-size:0.9em}
.afterbox{width:230px;display:inline-block;vertical-align:middle; padding-left:0.5em}
.metaphor{font-weight:bold}
.metaphor .box {border-width:3px}
</style>
### Une métaphore

<span class="metaphor"><span class="beforebox">(Ingrédients, <br>gâteau,<br> goût)_* n_</span> &rarr; <span class="box">Apprentissage</span> &rarr; <span class="afterbox">Recette</span></span>

<span data-marpit-fragment="1"><span class="beforebox">(Visages <br>souriants … <br>ou pas)_* n_</span> &rarr; <span class="box">Apprentissage</span> &rarr;  <span class="afterbox">Reconnaissance de visages</span></span>

<span data-marpit-fragment="2"><span class="beforebox">(Données statistiques)<br>_* n_</span> &rarr; <span class="box">Apprentissage</span> &rarr;  <span class="afterbox">Prédiction d'événements</span></span>


<!-- 
Cours de [Chloé-Agathe Azencott](https://cazencott.info/dotclear/public/lectures/2021-05-cours-Azencott.pdf)
 -->

---
<!-- _class: fpppppp -->

L'apprentissage automatique

= un système **inductif** qui part de données pour produire un modèle de classification ou de prédiction.

<span data-marpit-fragment="1">Cela nécessite un grand nombre de données.</span>

<span data-marpit-fragment="2">L'apprentissage se fait soit de manière supervisée (avec des données d'observation et des évaluations de ces données), soit de manière non-supervisée (avec seulement des données d'observation).</span>

---
<!-- _class: etape -->
### 2/ Du _machine learning_ <br>au _deep learning_

Une évolution de l'apprentissage automatique (_machine learning_) : l'apprentissage profond (_deep learning_).

---
<!-- _class:  -->

L'apprentissage automatique classique repose essentiellement sur des méthodes statistiques qui en fin de compte produisent un algorithme interprétable.

---
<!-- _class:  -->
<style scoped>
img {height:450px; display: block; margin:auto}
</style>
On utilise des réseaux de neurones, avec plusieurs couches et un très grand nombre de paramètres.

![](https://minio.apps.education.fr/codimd-prod/uploads/upload_ddfe210ef28456a68f3a5c391ff2ccfb.png)

<!-- 
Source : 
https://upload.wikimedia.org/wikipedia/commons/9/9c/Discriminative_vs_Generative_Neural_Networks.png
 -->


---
<!-- _class: i1t1 vertical -->
<style scoped>
p{text-align:left!important; padding-left:60px}
</style>

Un neurone formel

[![](https://upload.wikimedia.org/wikipedia/commons/b/b7/Sch%C3%A9ma_d%27un_neurone_artificiel.JPG?20121216211045)](https://upload.wikimedia.org/wikipedia/commons/b/b7/Sch%C3%A9ma_d%27un_neurone_artificiel.JPG?20121216211045)


---
<!-- _class:  -->
<style scoped>
img {height:300px; display: block; margin:auto}
</style>

Ce type d'apprentissage réclame encore plus de données et de paramètres.

<span data-marpit-fragment="1">Il produit un résultat qui est difficilement, voire pas du tout interprétable.</span>

![](https://upload.wikimedia.org/wikipedia/commons/2/2f/Example_of_a_deep_neural_network.png)

<!-- boîte noire -->

<!-- 
Deep Learning
empirisme pur
contredit à une exigence du rationalisme : exigence d'explicabilité
pose un problème éthique
 -->

---
<!-- _class: etape -->
### 3/ Les IA génératives

= Une évolution du _deep learning_

---
<!-- _class: fppppp -->
<style scoped>
span {font-weight:normal}
</style>
### Principes <span>(cas d'une IAG de textes)</span> <!-- fit -->

1) Que fait une IAG ? De la prédiction de mots, ou plus précisément de _tokens_ [:link:](https://fr.vittascience.com/ia/text.php) <span data-marpit-fragment="1">**&rArr; problématique des “hallucinations”**</span>
2) Comment est-ce possible ? Entraînement sur une quantité immense de textes (_LLM_) + ajustements et rétroaction humaine <span data-marpit-fragment="2">**&rArr; problématique des “biais”**</span>


<!-- 
D'où hallucinations
D'où biais dans les données

Idem pour une image : bruit, prédiction de pixels

1) Premier principe : la prédiction de _tokens_
2) Deuxième principe : les _embeddings_
3) Troisième principe : le _prompt_ -->




---
<!-- _class: souspartie -->
## C. Des questions <br>juridiques, sociales, <br>politiques, éthiques<br> et environnementales <!-- fit -->


---
<!-- _class: fpppppppp-->
<style scoped>
.small {font-size:0.9em}
</style>

Une thèse très contestable : la neutralité de la technique <span class="small">(« Ce n'est qu'un outil », « Tout dépend de l'usage »)</span>

<span data-marpit-fragment="1">&rarr; Trois objections possibles :</span>

1) L'autonomie de la technique
2) Le déterminisme technique
3) La normativité de la technique


---
<!-- _class: pp f -->

![](https://minio.apps.education.fr/codimd-prod/uploads/upload_8544ce52088f662e1214f0d371bd6b12.png)

1) **Droit d'auteur :** Les IA ont été entraînées sur des corpus de données qui peuvent intégrer des œuvres protégées par le droit d'auteur
2) **Données personnelles :** il est important de ne pas communiquer de données sensibles aux IA, car les IA s'entraînent avec les données qu'on leur fournit
3) **Contrôle des algorithmes :** le fonctionnement des IA génératives est opaque, ce qui pose le problème du contrôle de ces algorithmes


---
<!-- _class: pp fmmmmmm -->


![](https://minio.apps.education.fr/codimd-prod/uploads/upload_7cb8062e94144f37fa5d66f067d2a780.png)

1) **Reproduction et renforcement des biais et discriminations :** les IA ont été entraînées sur des données qui contiennent des biais et peuvent produire des contenus très stéréotypés
2) **Désinformation en masse et effets d'influence :** les IA peuvent être utilisées pour propager des informations fausses et manipuler l'opinion publique
3) **Inégalités géopolitiques et perte de souveraineté :** l'IA repose sur de gros investissement par des entreprises qui dominent le marché, créant un monopole qui renforce les inégalités géopolitiques et réduit la souveraineté des autres nations


---
<!-- _class: pp fppp -->


![](https://minio.apps.education.fr/codimd-prod/uploads/upload_c35d53214f3a1d945769e3f4ebd53361.png)


1) **Délégation de la décision :** il faut savoir adopter une posture réflexive pour évaluer le type de tâche qu'on peut déléguer à une IA
2) **Consommation énergétique massive :** l'entraînement des LLM & le maintien des serveurs consomme énormément d'énergie et d'eau



<!-- 



changements :
structure du travail

sexisme / racisme
droit d'auteur / normes écologiques
-->

---
<!-- _class: partie -->
# II - <br>Côté profs <br>[:link:](https://markpage.forge.apps.education.fr/#https://github.com/eyssette/minisite-markpage/blob/main/concevoir-ressources-avec-IA.md)
<!-- fit -->
Deuxième partie

---
<!-- _class:  -->
<style scoped>
li {padding-left:0.3em; margin-left:0.25em}
</style>

### Trois gestes professionnels

1) 📅 Planifier un cours, programmer une séquence, concevoir une fiche d'objectifs
2) ✏️ Concevoir des activités et des documents pédagogiques
3) 🎯 Préparer et corriger des évaluations
 

---
<!-- _class:  -->
<style scoped>
li {padding-left:0.3em; margin-left:0.25em}
</style>

### Trois types d'usages de l'IAG

1) 🛠️ Pour créer une ressource
2) ♻️ Pour adapter le contenu ou changer le format d'une ressource déjà existante
3) 📈 Pour évaluer et améliorer une ressource déjà existante



---
<!-- _class: i2t0 vertical contain pp -->

[![](https://raw.githubusercontent.com/eyssette/mindmap/refs/heads/main/trois-gestes-professionnels.svg)](https://markpage.forge.apps.education.fr/#https://eyssette.forge.apps.education.fr/module/concevoir-ressources-avec-IA.md)


[![](https://raw.githubusercontent.com/eyssette/mindmap/refs/heads/main/trois-usages-IA.svg)](https://markpage.forge.apps.education.fr/#https://eyssette.forge.apps.education.fr/module/concevoir-ressources-avec-IA.md)



---
<!-- _class: i1t1 vertical-->
<style scoped>
p:nth-of-type(2){margin-top:1em!important}
img {height:500px; display:block; margin:auto}
</style>

![](qrCode-IA-concevoirRessource.png)

https://url.forge.apps.education.fr/#7


---
<!-- _class: partie -->
# III - <br>Côté élèves <!-- fit -->
Troisième partie

---
<!-- _class: souspartie -->
## A. L'IA comme objet de réflexion


---
<!-- _class:  -->
1) Approche institutionnelle : IA et évaluation
2) Approche EMI & EMC
3) Approche philosophique et littéraire

---
<!-- _class: souspartie -->
## B.  L'IA comme outil


---
<!-- _class:  -->
- Un outil d'aide pour apprendre et réviser
- Un tuteur personnel
- Les _learning analytics_

<span data-marpit-fragment="1">Exemples : [MIA Seconde](https://www.ac-paris.fr/mia-seconde-un-service-numerique-de-remediation-en-francais-et-en-mathematiques-131013)</span>

<span data-marpit-fragment="2">Un outil pour créer son propre chatbot (sans les hallucinations possibles d'une IA générative) : [ChatMD](https://chatmd.forge.apps.education.fr)</span>

<!-- 
PhiloGPT : vidéo
MIA seconde : Projet gouvernemental (Modules Interactifs Adaptatifs)
répétition espacée : Anki
-->



---
<!-- _class: fppppppp -->
### Pour approfondir

Un parcours de formation sur Magistère :

["Trajectoires IA" en AURA : accompagner l'intégration des IA en éducation](https://drane.ac-lyon.fr/spip/Parcours-en-auto-inscription)

N'hésitez pas à me contacter pour toute question ou précision !