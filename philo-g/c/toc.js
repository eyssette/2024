// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="index.html">Accueil</a></li><li class="chapter-item expanded "><a href="intro.html">Introduction</a></li><li class="chapter-item expanded "><a href="s1.html">Séquence 1 : Éthique et philosophie morale</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="s1-ch1.html">Chapitre 1 : Le bonheur</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="s1-ch1-q1.html">Q1 – Peut-on parvenir au bonheur ?</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="s1-ch1-q1a.html">Q1a – Peut-on savoir ce qu&#39;est le bonheur ?</a></li><li class="chapter-item expanded "><a href="s1-ch1-q1b.html">Q1b – Nos désirs nous condamnent-ils à être toujours insatisfaits ?</a></li><li class="chapter-item expanded "><a href="s1-ch1-q1c.html">Q1c – Pouvons-nous faire face au tragique de l&#39;existence ?</a></li></ol></li><li class="chapter-item expanded "><a href="s1-ch1-q2.html">Q2 – Le bonheur est-il le but de l&#39;existence ?</a></li></ol></li><li class="chapter-item expanded "><a href="s1-ch2.html">Chapitre 2 : La morale</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="s1-ch2-q1.html">Q1 – Y a-t-il une vérité en morale ?</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="s1-ch2-q1a.html">Q1a – La morale est-elle subjective ?</a></li><li class="chapter-item expanded "><a href="s1-ch2-q1b.html">Q1b – La morale est-elle relative à chaque culture ?</a></li></ol></li><li class="chapter-item expanded "><a href="s1-ch2-q2.html">Q2 - Comment peut-on savoir ce qui est bien et ce qui est mal ?</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="s1-ch2-q2a.html">Q2a - La sensibilité est-elle le fondement de la morale ?</a></li><li class="chapter-item expanded "><a href="s1-ch2-q2b.html">Q2b - Comment la réflexion peut-elle nous guider moralement ?</a></li></ol></li></ol></li></ol></li><li class="chapter-item expanded "><a href="s2.html">Séquence 2 : Philosophie de l&#39;esprit</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="s2-ch3.html">Chapitre 3 : Le sujet</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="s2-ch3-q1.html">Q1 - Qu&#39;est-ce que le Moi ?</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="s2-ch3-q1a.html">Q1a – Peut-on saisir ce qu&#39;est le Moi ?</a></li><li class="chapter-item expanded "><a href="s2-ch3-q1b.html">Q1b – L&#39;identité personnelle repose-t-elle sur la mémoire ?</a></li></ol></li><li class="chapter-item expanded "><a href="s2-ch3-q2.html">Q2 – Puis-je choisir qui je suis ?</a></li></ol></li><li class="chapter-item expanded "><a href="s2-ch4.html">Chapitre 4 : Le libre arbitre</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="s2-ch4-q1.html">Q1 – Peut-on prouver l&#39;existence du libre arbitre ?</a></li><li class="chapter-item expanded "><a href="s2-ch4-q2.html">Q2 – Peut-on prouver l&#39;inexistence du libre arbitre ?</a></li></ol></li><li class="chapter-item expanded "><a href="s2-ch5.html">Chapitre 5 : Sartre, L&#39;existentialisme est un humanisme (œuvre suivie)</a></li></ol></li><li class="chapter-item expanded "><a href="s3.html">Séquence 3 : Philosophie de la culture</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="s3-ch6.html">Chapitre 6 : L&#39;art</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="s3-ch6-q1.html">Q1 – La valeur d&#39;une œuvre d&#39;art réside-t-elle dans sa beauté ?</a></li><li class="chapter-item expanded "><a href="s3-ch6-q2.html">Q2 – Est-ce le génie de l&#39;artiste qui fait la valeur d&#39;une œuvre ?</a></li><li class="chapter-item expanded "><a href="s3-ch6-q3.html">Q3 – L&#39;œuvre d&#39;art ne vaut-elle que par ce qu&#39;elle nous apporte ?</a></li></ol></li><li class="chapter-item expanded "><a href="s3-ch7.html">Chapitre 7 : La technique</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="s3-ch7-q1.html">Q1 – La technique permet-elle de maîtriser la nature ?</a></li><li class="chapter-item expanded "><a href="s3-ch7-q2.html">Q2 – Le développement technique transforme-t-il les êtres humains ?</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="s4.html">Séquence 4 : Philosophie sociale et politique</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="s4-ch8.html">Chapitre 8 : L&#39;État</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="s4-ch8-q1.html">Q1 – Le pouvoir politique n&#39;est-il qu&#39;un moyen de domination ?</a></li><li class="chapter-item expanded "><a href="s4-ch8-q2.html">Q2 – De quel droit l&#39;État exerce-t-il un pouvoir sur nous ?</a></li><li class="chapter-item expanded "><a href="s4-ch8-q3.html">Q3 – L&#39;État doit-il intervenir dans le champ économique et social ?</a></li></ol></li><li class="chapter-item expanded "><a href="s4-ch9.html">Chapitre 9 : La justice</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="s4-ch9-q1.html">Q1 – La politique doit-elle être guidée par un idéal moral ?</a></li><li class="chapter-item expanded "><a href="s4-ch9-q2.html">Q2 – La justice sociale signifie-t-elle l&#39;égalité ?</a></li></ol></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded "><a href="methode-dissertation.html">Méthode de la dissertation</a></li><li class="chapter-item expanded "><a href="methode-explication.html">Méthode de l&#39;explication</a></li><li class="chapter-item expanded "><a href="moteurs-de-recherche.html">Moteurs de recherche</a></li><li class="chapter-item expanded "><a href="selection-chaines-video.html">Sélection de chaînes vidéo</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
