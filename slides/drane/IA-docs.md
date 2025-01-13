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

<span data-marpit-fragment="1">I - Quelques repères fondamentaux</span>

<span data-marpit-fragment="2">II - Côté profs</span>

<span data-marpit-fragment="3">III - Côté élèves</span>


---
<!-- _class: partie -->
# I - <br>Quelques repères <br>fondamentaux <!-- fit -->
Première partie


---
<!-- _class: souspartie -->
## A. <br>Une question philosophique :<br> l'IA remet-elle en question <br>la singularité de l'intelligence<br> humaine ? <!-- fit -->


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
## B. Une question <br> technique et scientifique : <br>comment ça marche ?<!-- fit -->


---
<!-- _class: etape -->
### 2/ Deux types d'IA


---
<!-- _class:  -->
### a) L'IA classique : une IA symbolique <!-- fit -->

= une modélisation du raisonnement par la manipulation de symboles et de règles explicites.

On a ici **une intelligence qui existe avant** : on a d'abord modélisé la résolution du problème sous la forme d'un algorithme.

<!-- avant le système artificiel qui l'implémente -->

---
<!-- _class: i1t1 vertical  -->
#### Algorithme de Dijkstra

![](https://minio.apps.education.fr/codimd-prod/uploads/upload_543c0e31721514114c32309f2d601db1.png)


---
<!-- _class:  -->

Une IA classique

= un système **logico-déductif** qui applique des règles générales à des cas particuliers.

Il faut d'abord avoir l'intelligence du problème avant de trouver la solution.


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

<span class="beforebox">Carte, point de <br>départ, point <br>d'arrivée</span> &rarr; <span class="box">Algorithme</span> &rarr;  <span class="afterbox">Trajet</span>

<span class="beforebox">Contraintes des professeurs, des élèves et des salles</span> &rarr; <span class="box">Algorithme</span> &rarr;  <span class="afterbox">Emploi du temps</span>


<!-- 
Cours de [Chloé-Agathe Azencott](https://cazencott.info/dotclear/public/lectures/2021-05-cours-Azencott.pdf)
 -->

<!-- grâce à un algorithme, on peut à partir d'une carte, d'un point de départ et d'un point d'arrivée, calculer le meilleur trajet possible

grâce à un algorithme, on peut à partir des contraintes des profs, des élèves et des salles, produire le meilleur emploi du temps possible (ou pas … ;)  -->

---
<!-- _class:  -->
### b) L'apprentissage automatique

= la capacité d'un système à apprendre à partir des données, plutôt que d'être explicitement programmé au préalable avec des règles fixes.

On a ici **une intelligence qui existe après l'entraînement**, à travers l'expérience acquise par le système.


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

<span class="beforebox">(Visages <br>souriants … <br>ou pas)_* n_</span> &rarr; <span class="box">Apprentissage</span> &rarr;  <span class="afterbox">Reconnaissance de visages</span>

<span class="beforebox">(Données statistiques)<br>_* n_</span> &rarr; <span class="box">Apprentissage</span> &rarr;  <span class="afterbox">Prédiction d'événements</span>


<!-- 
Cours de [Chloé-Agathe Azencott](https://cazencott.info/dotclear/public/lectures/2021-05-cours-Azencott.pdf)
 -->

---
<!-- _class: fpppppp -->

L'apprentissage automatique

= un système **inductif** qui part de données pour produire un modèle de classification ou de prédiction.

Cela nécessite un grand nombre de données.

L'apprentissage automatique classique repose essentiellement sur des méthodes statistiques qui en fin de compte produisent un algorithme interprétable.

<!-- on dit plutôt modèle qu'algorithme
Pas vraiment une recette -->
---
<!-- _class: pp fppppp-->
<style scoped>
p {position:absolute; top:10px}
ol {list-style-type:none!important; margin-left:80px}
ol li {
  width: 500px;
  height: 500px;
  line-height: 120px;
  border-radius: 50%;
  font-size: 50px;
  color: white;
  font-weight: bold;
  text-align: center;
}
ol li {position:absolute; top:180px; left:260px}
ol li:nth-of-type(1) {background-color: #020024}
ol li:nth-of-type(2) {background-color: #14145e; width:330px; height:330px; margin:130px; line-height: 150px; font-size:0.6em}
ol li:nth-of-type(3) {background-color: #8786c6; width:180px; height:180px; margin:245px; line-height: 210px; font-size:0.5em}
</style>

Une évolution de l'apprentissage automatique (_machine learning_) : l'apprentissage profond (_deep learning_).

1. IA
2. Machine learning
3. Deep learning


---
<!-- _class: fpp -->
<style scoped>
img {height:500px; display: block; margin:auto}
</style>
On utilise des réseaux de neurones, avec plusieurs couches et un très grand nombre de paramètres.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/FeedForwardNN.png/800px-FeedForwardNN.png?20170428065552)


---
<!-- _class: i1t1 vertical -->
<style scoped>
p{text-align:left!important; padding-left:60px}
</style>

Un neurone formel

[![](https://upload.wikimedia.org/wikipedia/commons/b/b7/Sch%C3%A9ma_d%27un_neurone_artificiel.JPG?20121216211045)](https://upload.wikimedia.org/wikipedia/commons/b/b7/Sch%C3%A9ma_d%27un_neurone_artificiel.JPG?20121216211045)


---
<!-- _class: fmm -->
<style scoped>
img {height:500px; display: block; margin:auto}
</style>
![](https://upload.wikimedia.org/wikipedia/commons/2/2f/Example_of_a_deep_neural_network.png)


Ce type d'apprentissage réclame encore plus de données et de paramètres. Il produit un résultat qui n'est pas interprétable.

<!-- boîte noire -->

---
<!-- _class: etape -->
### 3/ Les IA génératives


---
<!-- _class:  -->

1) Premier principe : les _embeddings_ ou vecteurs de mots
2) Deuxième principe : la prédiction de _tokens_
3) _Prompts_ / _RAG_ / _Fine-tuning_



<!-- 

IA générative
prédiction / vérité
prompt


IA symbolique / fonctionnalisme /représentationalisme
connexionisme ; réseaux de neurones




Deep Learning
empirisme pur
contredit à une exigence du rationalisme : exigence d'explicabilité

déduction / induction

prompt / RAG / fine-tuning

-->


---
<!-- _class: souspartie -->
## C. Des questions <br>éthiques, sociales,<br>juridiques et politiques <!-- fit -->


---
<!-- _class: i1t1 vertical -->
Lignes directrices éthiques sur l’utilisation de l’intelligence artificielle [:link:](https://drane.ac-lyon.fr/spip/Lignes-directrices-ethiques-utilisation-IA)

[![](https://i.ibb.co/SvH1Y99/lignes-directrices-IA-considerations-ethiques.png)](https://mymarkmap.netlify.app/#https://raw.githubusercontent.com/eyssette/mindmap/main/lignes-directrices-IA-considerations-ethiques.md)

---
<!-- _class:  -->

Une thèse très contestable : la neutralité de la technique.

<span data-marpit-fragment="1">Trois objections possibles :</span>

1) L'autonomie de la technique
2) Le déterminisme technique
3) La normativité de la technique

<!-- 



changements :
structure du travail

sexisme / racisme
droit d'auteur / normes écologiques
-->

---
<!-- _class: partie -->
# II - <br>Côté profs <br>[:link:](https://eyssette.forge.aeif.fr/markpage/#https://github.com/eyssette/minisite-markpage/blob/main/concevoir-ressources-avec-IA.md)
<!-- fit -->
Deuxième partie

---
<!-- _class: i1t1 vertical -->
Trois gestes professionnels

![](https://raw.githubusercontent.com/eyssette/minisite-markpage/main/img/trois-gestes-professionnels.png)

---
<!-- _class: i1t1 vertical -->
Trois usages possibles

![](https://raw.githubusercontent.com/eyssette/minisite-markpage/main/img/trois-usages-IA.png)

---
<!-- _class: souspartie -->
## A. <br>Créer une ressource <!-- fit -->

---
<!-- _class: i1t1 vertical -->
[![](https://raw.githubusercontent.com/eyssette/minisite-markpage/main/img/creer-ressource-avec-IAG.png)](https://eyssette.forge.aeif.fr/markpage/?sec=1&subsec=1#https://github.com/eyssette/minisite-markpage/blob/main/concevoir-ressources-avec-IA.md)


---
<!-- _class: souspartie -->
## B. <br>Adapter / changer le <br>format d'une ressource <!-- fit -->


---
<!-- _class: i1t1 vertical -->
[![](https://raw.githubusercontent.com/eyssette/minisite-markpage/main/img/adapter-changer-format-ressource-avec-IAG.png)](https://eyssette.forge.aeif.fr/markpage/?sec=2&subsec=1#https://github.com/eyssette/minisite-markpage/blob/main/concevoir-ressources-avec-IA.md)

---
<!-- _class: souspartie -->
## C. <br>Évaluer / améliorer<br> une ressource <!-- fit -->


---
<!-- _class: i1t1 vertical -->
[![](https://raw.githubusercontent.com/eyssette/minisite-markpage/main/img/evaluer-ameliorer-ressource-avec-IA.png)](https://eyssette.forge.aeif.fr/markpage/?sec=3&subsec=1#https://github.com/eyssette/minisite-markpage/blob/main/concevoir-ressources-avec-IA.md)


---
<!-- _class: partie -->
# III - <br>Côté élèves <!-- fit -->
Troisième partie

---
<!-- _class: souspartie -->
## A.  L'IA comme outil


---
<!-- _class:  -->
- Un outil d'aide pour apprendre et réviser
- Un tuteur personnel
- Les _learning analytics_

<span data-marpit-fragment="1">Exemples : [MIA Seconde](https://www.ac-paris.fr/mia-seconde-un-service-numerique-de-remediation-en-francais-et-en-mathematiques-131013)</span><span data-marpit-fragment="2">, PhiloGPT</span>

<span data-marpit-fragment="3">Un outil pour créer son propre chatbot (sans les hallucinations possibles d'une IA générative) : [ChatMD](https://eyssette.github.io/chatMD)</span>

<!-- 
PhiloGPT : vidéo
MIA seconde : Projet gouvernemental (Modules Interactifs Adaptatifs)
répétition espacée : Anki
-->

---
<!-- _class: souspartie -->
## B. L'IA comme objet de réflexion


---
<!-- _class:  -->
1) Approche EMI & EMC
2) Approche philosophique et littéraire


---
<!-- _class: fppppppp -->
### Pour approfondir

Un parcours de formation sur Magistère :

["Trajectoires IA" en AURA : accompagner l'intégration des IA en éducation](https://magistere.education.fr/ac-clermont/course/view.php?id=4683&section=1)

N'hésitez pas à me contacter pour toute question ou précision !