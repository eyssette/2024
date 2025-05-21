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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="index.html">Accueil</a></li><li class="chapter-item expanded "><a href="intro.html">Introduction</a></li><li class="chapter-item expanded "><a href="s1.html">Séquence 1 : Philosophie morale et politique</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="s1-ch1.html">Chapitre 1 : La liberté</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="s1-ch1-q1.html">Q1 – La liberté de la volonté est-elle une illusion ?</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="s1-ch1-q1a.html">Q1a – Sommes-nous esclaves de nos désirs ?</a></li><li class="chapter-item expanded "><a href="s1-ch1-q1b.html">Q1b - Nos choix sont-ils déterminés par des facteurs que nous ne maîtrisons pas ?</a></li></ol></li><li class="chapter-item expanded "><a href="s1-ch1-q2.html">Q2 – Y a-t-il des limites morales à la liberté ?</a></li></ol></li><li class="chapter-item expanded "><a href="s1-ch2.html">Chapitre 2 : La politique</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="s1-ch2-q1.html">Q1 – De quel droit l&#39;État exerce-t-il un pouvoir sur nous ?</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="s1-ch2-q1a.html">Q1a – L’État n&#39;est-il qu&#39;un moyen de domination ?</a></li><li class="chapter-item expanded "><a href="s1-ch2-q1b.html">Q1b – Quels droits accordons-nous à l&#39;État ?</a></li></ol></li><li class="chapter-item expanded "><a href="s1-ch2-q2.html">Q2 – Qu&#39;est-ce que la justice sociale ?</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="s2.html">Séquence 2 : Philosophie de la connaissance</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="s2-ch3.html">Chapitre 3 : La technique</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="s2-ch3-q1.html">Q1 – La technique permet-elle de maîtriser la nature ?</a></li><li class="chapter-item expanded "><a href="s2-ch3-q2.html">Q2 – Le développement technique transforme-t-il les êtres humains ?</a></li></ol></li><li class="chapter-item expanded "><a href="s2-ch4.html">Chapitre 4 : La vérité</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="s2-ch4-q1.html">Q1 – Peut-on dire « à chacun sa vérité » ?</a></li><li class="chapter-item expanded "><a href="s2-ch4-q2.html">Q2 – Peut-on douter de tout ?</a></li></ol></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded "><a href="methode-dissertation.html">Méthode de la dissertation</a></li><li class="chapter-item expanded "><a href="methode-explication.html">Méthode de l&#39;explication</a></li><li class="chapter-item expanded "><a href="moteurs-de-recherche.html">Moteurs de recherche</a></li><li class="chapter-item expanded "><a href="selection-chaines-video.html">Sélection de chaînes vidéo</a></li></ol>';
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
