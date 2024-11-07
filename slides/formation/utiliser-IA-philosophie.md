---
marp: true
theme: teaching
paginate: true
size: 4:3
---

<!-- _class: titre -->
<style scoped>
span {font-size:0.6em; line-height:1em; display:inline-block;font-weight:normal}
</style>
# Utiliser l'IA <br>en philosophie <br><span>Intérêt, limites & perspectives<span> <!-- fit -->

Cédric Eyssette
https://eyssette.forge.apps.education.fr/



---
<!-- _class: partie -->
# I - <br>Quel intérêt ? <!-- fit -->
Première partie


---
<!-- _class: souspartie -->
## A. Typologie des <br>usages pédagogiques <!-- fit -->


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
<!-- _class: i1t1 -->
<style scoped>
p{margin:0.25em auto}
img {height:500px}
</style>

![](image.png)

https://url.forge.apps.education.fr/#7

---
<!-- _class: souspartie -->
## B. Techniques <br>de prompt

---
<!-- _class:  -->
### Une approche simplifiée

1) ✍️ Consignes claires, précises et directes
2) 🪜 Guidage et affinement progressif 
3) 🗄️ Utilisation d'exemples et de données structurées

<!-- TODO: ajouter des exemples pour chaque point : avec prompt de base et amélioration en suivant le conseil -->

<!-- 
évoquer modèles plus compliqués

Parallèle avec l'enseignement avec les élèves !

-->

<!-- itératif

ne pas tout mettre dans le prompt initial, guider pas à pas
découper les tâches complexe,
Chain-of-Thought Prompting
plutôt : prompt chaining
Least to Most Prompting

recommencer un nouveau chat s'il y a accumulation de fausses pistes
recommencer un nouveau chat si l'interaction devient trop longue (fenêtre contextuelle)


Fais plusieurs propositions
Tree of Thoughts

Instruction sur la tâche
Contexte
Données d'entrée 
Indicateur de sortie 

Consignes claires et précises : sur la tâche, le format attendu

Instructions : claires, précises, directes
marche bien : fais une liste des 5 points les plus importants sur ; explique X en 3 étapes simples
Inutile : politesse, svp
éviter phrases négatives, formulations affirmatives

Utiliser des délimiteurs

Directional Stimulus Prompting 
mots clés



Retrieval Augmented Generation -->


---
<!-- _class: souspartie -->
## À vous de tester !

https://duckduckgo.com/chat


---
<!-- _class: fmm -->
### Quelques pistes possibles
1) Trouver des idées pour un nouveau cours sur une notion ou sur un⋅e philosophe
1) Trouver des idées pour faire l'analyse d'un texte
1) Faire une liste de concepts et de définitions sur un thème
1) Faire une liste d'exemples ou de cas concrets
1) Dégager les enjeux ou les implications contemporaines d'une idée
1) Créer un exercice sur un cours ou un texte
1) Adapter, reformuler un passage de son cours
1) Agrémenter un support avec des images ou des emojis (double codage)



---
<!-- _class: partie -->
# II - <br>Problèmes et<br> perspectives <!-- fit -->
Deuxième partie


---
<!-- _class: souspartie -->
## A. Problèmes

---
<!-- _class:  -->
### Problèmes économiques
1) Automatisation du travail
2) Monopole et inégalités
3) Coût des infrastructures


---
<!-- _class:  -->
### Problèmes légaux
1) Droit d'auteur
2) Données personnelles
3) Contrôle des algorithmes
4) Responsabilité


---
<!-- _class: fpppppp -->
### Problèmes sociaux et politiques
1) Reproduction et renforcement des biais et discriminations
2) Surveillance des individus
3) Transformation des relations humaines : déshumanisation
4) Désinformation en masse et effets d'influence
5) Inégalités géopolitiques, domination et dépendances


---
<!-- _class: fppp -->
### Problèmes éthiques et environnementaux
1) Consommation énergétique pour l'entraînement des LLM et pour le maintien des serveurs
2) Course dans l'exploitation des ressources rares, obsolescence programmée du matériel informatique
3) Délégation de la décision et de l'exercice du jugement

<!-- éthique du numérique -->

---
<!-- _class: souspartie -->
## B. Perspectives

---
<!-- _class:  -->
### Quelques pistes actuelles

1) RAG et assistants personnalisés
2) LLM Open source
3) LLM en local
4) SLM
5) Usages ciblés


---
<!-- _class: partie -->
# III - Création d'un chatbot pédagogique
Troisième partie

---
<!-- _class: souspartie -->
## A. ChatMD

---
<!-- _class: i1t1 vertical -->

[![](https://pbs.twimg.com/media/GTHkNToW4AA_LWb.jpg:large)](https://nuage03.apps.education.fr/index.php/s/BEY3BWZMnGsMqGg)

https://chatmd.forge.apps.education.fr/


<!-- Ajouter slide sur "le principe de base" -->

---
<!-- _class: souspartie -->
## B. Des idées <br>de chatbot en<br>philosophie


---
<!-- _class: fp -->
<style scoped>
ol {margin-top:0.05em;}
ul {margin-top:0em;}
ul li {text-align:center}
</style>
### Pistes possibles

1) Discussion avec un⋅e philosophe
2) Rappel de la méthode
3) Guidage dans l'exploration d'un texte ou d'une œuvre, ou dans l'exploration d'une notion
4) Confrontation à un dilemme éthique ou à une expérience de pensée avec des choix à faire et une analyse de ces choix
5) Révision d'un cours

* D'autres idées ?

<!-- possibilité de créer un scénario où on demande aux élèves de créer un chatbot -->

<!-- Idéal à viser : 
un usage ciblé d'un SLM installé en local (ordinateur perso ou serveur local au niveau d'un lycée ou d'une académie), opensource et capable de faire du RAG -->

---
<!-- _class: souspartie -->
## C. Créer votre propre chatbot

---
<!-- _class: fppppppp -->
### Comment faire ?

1) Se connecter au portail Apps Education
https://portail.apps.education.fr/
2) Créer un nouveau fichier sur CodiMD
https://codimd.apps.education.fr/
3) Respecter la syntaxe de ChatMD
4) Copier l'URL du nouveau fichier, aller sur ChatMD, ajouter un # à la fin de l'URL et coller l'adresse du fichier CodiMD
