---
marp: true
theme: teaching
paginate: true
size: 4:3
---

<script src="https://cdnjs.cloudflare.com/ajax/libs/leader-line/1.0.3/leader-line.min.js" integrity="sha512-aFBNsI3+D6ObLLtyKwdZPZzDbcCC6+Bh+2UNV8HC0R95BpcBT+dmmZ5NMpJi/Ic8uO0W7FGcg33IfuHg+7Ryew==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script>
const lastPage=4
let currentSlide = 1;
let slideHandlers = [];
function updateCurrentSlide() {
    currentSlide = Number(window.location.hash.substring(1));
    slideHandlers[currentSlide]();
}
document.addEventListener("DOMContentLoaded", updateCurrentSlide)
function handleKeydown(event) {
    if (event.key === "ArrowRight") {
            currentSlide = currentSlide==lastPage ? currentSlide : currentSlide + 1;
        } else if (event.key === "ArrowLeft") {
            currentSlide = currentSlide == 1 ? 1 : currentSlide-1;
        }

    if (slideHandlers[currentSlide]) {
            slideHandlers[currentSlide]();
        }
}
document.addEventListener("keydown", handleKeydown);
</script>



<!-- _class: titre -->
# Chapitre 4 :<br>Le libre arbitre <!-- fit -->
Cédric Eyssette (2024-2025)
https://eyssette.forge.apps.education.fr/



---
<!-- _class: pp -->
<style scoped>
section section{display:flex;}
section section div{margin-top:0.4em
}
section section div:nth-of-type(1) {width:110%;}
section section div p {margin-top:1em; font-size:0.8em;color:#4a47b1}
p strong{color:black}
</style>

<script>
    function drawLinesSlide2() {
    new LeaderLine(
  document.getElementById('a1e1'),
  document.getElementById('a1e2'));
    }
    slideHandlers[2] = drawLinesSlide2
</script>

La liberté = <span id="a1e1">pouvoir faire</span> ce que je veux

<section>

<div>

**<span id="a1e2">liberté d'action</span>**

pouvoir agir dans <br>le monde extérieur <br>sans obstacles
</div>

<div>

**liberté de la volonté**

pouvoir prendre intérieurement des décisions de manière autonome
</div>

</section>



---
<!-- _class: i1t0 pp -->
![](https://minio.apps.education.fr/codimd-prod/uploads/upload_7be33ea9fbf119c5333a7b9035f37298.png)

---
<!-- _class: -->
<style scoped>
section {font-size:4.5em; padding:0.4em}
ol {list-style-type:none}
ol li {margin-left:-0.7em!important}
</style>
Au sens commun, être libre, c'est …

1) pouvoir faire ce que je veux

---
<!-- _class: -->
<style scoped>
img {position:absolute!important; top:0; left:0; width:90%!important; display:block; height:640px; margin: 40px 50px; }
ol {list-style-type: none}
</style>

1. ![](https://raw.githubusercontent.com/eyssette/graphviz-examples/master/diagram/liberte-action-liberte-volonte.dot-part1.svg)
1) ![](https://raw.githubusercontent.com/eyssette/graphviz-examples/master/diagram/liberte-action-liberte-volonte.dot-part2.svg)
1) ![](https://raw.githubusercontent.com/eyssette/graphviz-examples/master/diagram/liberte-action-liberte-volonte.dot-part3.svg)
1) ![](https://raw.githubusercontent.com/eyssette/graphviz-examples/master/diagram/liberte-action-liberte-volonte.dot-part4.svg)
1) ![](https://raw.githubusercontent.com/eyssette/graphviz-examples/master/diagram/liberte-action-liberte-volonte.dot-part5.svg)
1) ![](https://raw.githubusercontent.com/eyssette/graphviz-examples/master/diagram/liberte-action-liberte-volonte.dot-part6.svg)
1) ![](https://raw.githubusercontent.com/eyssette/graphviz-examples/master/diagram/liberte-action-liberte-volonte.dot.svg)

<!-- 
« Pouvoir faire … » : Liberté d'action : pouvoir d'agir => ne pas être empêché de faire ce qu'on a choisi de faire (liberté extérieure : focalisation sur la réalisation, dans le monde extérieur, de ses choix)
« … Ce que je veux » : Liberté de la volonté (libre arbitre) : pouvoir de choisir et de décider par soi-même => être maître de ses actes (liberté intérieure : focalisation sur la capacité intérieure de contrôler ce que l'on fait)
– Condition des alternatives : plusieurs choix sont possibles, il y a plusieurs possibilités alternatives parmi lesquelles je peux choisir ; avoir réellement le choix entre plusieurs possibilités alternatives
– Condition de la source : je suis vraiment la source de mes propres actes, par les choix que je fais ; être véritablement la source de ses actes
 -->

---
<!-- _class: colonnes -->
<style scoped>
h4{margin-bottom:10px; margin-top:30px!important;}
ul {
    font-size:54.8%;
    display:flex;
    flex-direction:column;
    flex-wrap: wrap;
    margin-left:0px;
    padding:0;
    height:590px!important;
    max-width:448px;
}
ul li {
    margin:0;
    margin-left:30px;
    padding-right:20px;
    text-align:left;
}
section.pm:before{top:640px}
span {font-size:0.90em}
h4 {font-size:0.58em!important;text-align:center; margin-bottom:10px}
</style>

#### Dans quelle mesure sommes-nous libres ?<!-- fit -->

<div class="puces">

- Vouloir partir en vacances
- Faire de l'humour
- Une personne en prison
- Un⋅e artiste qui crée une œuvre choquante
- Un enfant qui porte un uniforme scolaire
- Une personne qui a un handicap
- Retirer sa main au contact d'un objet brûlant
- Un adulte par rapport à un enfant
- Un riche par rapport à un pauvre
- Un esclave
- Penser par soi-même et faire preuve d’esprit critique
- Être menacé par quelqu'un
- Une personne raciste
- Désirer arrêter de fumer, mais continuer à le faire
- Agir de manière impulsive, 
- Avoir une addiction
- Être sans cesse distrait par les réseaux sociaux
- Avoir une phobie
- Se comporter conformément <br>aux stéréotypes masculins ou féminins
- Être endoctriné
- Être sous l’emprise d’une maladie mentale
- Acheter quelque chose
- Vouloir faire médecine comme ses parents
- Croire en Dieu
</div>


---
<!-- _class: fm -->
<style scoped>
h3{text-align:center; margin-bottom:0.5em}
table td {width:400px; padding:30px}
hr{padding:1px!important; background-color:#777!important}
</style>

### Exemples typiques

<div data-marpit-fragment>

|Liberté d'action|Libre arbitre|
|:-:|:-:|
|<span data-marpit-fragment="1">La liberté de circulation<br>La liberté d'expression<br>Les droits civils et politiques</span><hr><span data-marpit-fragment="2">≠ La prison, <br>la dictature, <br>la censure</span>|<span data-marpit-fragment="3">Penser par soi-même<br>Être capable de maîtriser ses<br> impulsions</span><hr><span data-marpit-fragment="4">≠ Être endoctriné, être sous l'emprise d'un trouble psychique</span>|

</div>


---
<!-- _class: i1t0 -->

[![](https://upload.wikimedia.org/wikipedia/commons/6/65/Trial_of_a_sow_and_pigs_at_Lavegny.png)](https://eyssette.github.io/ancien-blog/assets/pdf/ancien_blog/1_ethique_et_philosophie_morale/2007_2008_proces_animaux.pdf)

---
<!-- _class:  -->
### Un enjeu important
<span data-marpit-fragment="1">Derrière la question du libre arbitre, il y a l'enjeu de la responsabilité morale.</span>

<span data-marpit-fragment="2">Sans libre arbitre, il ne semble pas y avoir de responsabilité morale.</span>

<span data-marpit-fragment="3">C'est la raison pour laquelle les procès d'animaux aux Moyen Âge nous semblent absurdes.</span>


---
<!-- _class:  -->
<style scoped>
ol {list-style-type:none}
ol li {margin-left:-1em!important}
</style>
À première vue, nous avons un libre arbitre et nous sommes responsables moralement de nos actes.

1) Mais est-ce vraiment le cas ?