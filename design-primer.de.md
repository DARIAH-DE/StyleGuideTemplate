# DARIAH-DE Theme 2018 Design Primer

## Layoutelemente und -varianten

Alle Seiten sind aufgebaut aus einer Kopfzeile, einem Logo, dem Inhaltsbereich und einer Fußzeile. Das Layout ist [normalerweise bis zu 1200&nbsp;px breit](https://tschaef.github.io/dariah-de-2018-mockups/mockups/front-page.html). Zusätzlich ist eine [Layoutvariante mit unbegrenzter Breite](https://tschaef.github.io/dariah-de-2018-mockups/mockups/full-width.html) verfügbar.

Alle Layouts sind responsive mit 4 Breakpoints, was bei Anpassungen beachtet werden sollte. Für Details dazu siehe [`settings.scss`](https://github.com/tschaef/dariah-de-2018-mockups/blob/gh-pages/scss/util/settings.scss) und die [verwendeten Media-Queries](https://github.com/tschaef/dariah-de-2018-mockups/search?q=media&type=&utf8=%E2%9C%93).

### Kopfzeile

Für die Kopfzeile bestehen 2 Varianten:
1. mit Navigation und/oder weiteren Inhalten ([Beispiel](https://tschaef.github.io/dariah-de-2018-mockups/mockups/front-page.html))
2. Zierleiste ohne Inhalt ([Beispiel](https://tschaef.github.io/dariah-de-2018-mockups/mockups/html-elements.html))

Variante (1) enthält:

- Website-Navigation
- Sprachauswahl
- Login (auf DARIAH-DE nicht benötigt, dennoch als Beispiel integriert)
- Suche
- DARIAH-DE-Menü (auf allein Websites identisch)

Variante (2) ist ein schmaler blauer Balken ohne Interaktionsmöglichkeit.

### Logo

Auch das Logo gibt es in 2 Varianten:

1. volle Größe mit Projektname ([Beispiel](https://tschaef.github.io/dariah-de-2018-mockups/mockups/front-page.html))
2. klein ohne Projektname ([Beispiel](https://tschaef.github.io/dariah-de-2018-mockups/mockups/news-post.html))

Das Logo in voller Größe (1) kommt nur auf der Hauptseite zum Einsatz.

Auf Unterseiten wird hingegen die kleine Variante (2) verwendet, wobei der SVG-Code identisch ist, jedoch der ausgeschriebene Projektname verdeckt wird. Zusätzlich erscheint eine Trennlinie zwischen Logo und Seitentitel.

Soweit es das Design des Logos zulässt, soll es zu einem kleinen Teil in die Kopfzeile hineinragen, wobei der überlagernde Teil von einem weißen Rand umgeben wird. Hierfür gibt es keine festen Werte, jedoch ist darauf zu achten, dass ausreichend Abstand zwischen den Inhalten der Kopfzeile und dem Logo besteht. Das Logo selbst darf nicht verändert werden, um zu vermeiden, dass vom Originallogo abweichende Varianten online zu finden sind. Vielmehr wird dafür separater SVG-Code hinzugefügt.

## Farben

Die Grundlage bilden 3 dem DARIAH-DE-Logo entnommene Farben:

1. `#213365`
2. `#494e7d`
3. `#727299`

Farbe (1) wird als Hintergrund für die Kopfzeile sowie für Überschriften erster Ebene (`<h1>`) verwendet. Farbe (2) wird für Links, dynamische Elemente und Buttons, Farbe (3) für Überschriften zweiter und dritter Ebene (`<h2>` und `<h3>`) eingesetzt.

Normaler Text erscheint in `#333`, heller Text sowie alle übrigen Überschriften in `#707070`.

Hinzu kommen aus Farbe (2) abgeleitete Hinweisfarben:

- `#446521` für Erfolgsmeldungen
- `#655321` für Warnungen
- `#652122` für Fehler

Ränder und Trennlinien erscheinen in `#ccc`.

Hervorhebung erfolgt durch leichte Aufhellung. Dafür siehe [`settings.scss`](https://github.com/tschaef/dariah-de-2018-mockups/blob/gh-pages/scss/util/settings.scss) und die Effekte auf [dieser Seite](https://tschaef.github.io/dariah-de-2018-mockups/mockups/news-post.html).

## Typografie

Überschriften erster und zweiter Ebene (`<h1>` und `<h2>`) werden im Font _Museo Sans Rounded_ mit der Stärke 500 gesetzt. Dasselbe gilt für Buttons, wobei nur Großbuchstaben (`text-transform: uppercase`) verwendet werden.

Für alle anderen Überschriften und Fließtext kommt _Roboto Light_ (Stärke 300) zum Einsatz, für fette Passagen _Roboto Medium_ (Stärke 500).

Basisschriftgröße ist 16&nbsp;px, kleiner Text erscheint in 14&nbsp;px. Die Schriftgrößen von Überschriften stehen im Verhältnis 5:4 (»große Terz«) zur Basisschriftgröße.

Für gute Lesbarkeit sollten Textzeilen nicht breiter sein als 720&nbsp;px, was bei Roboto in 16&nbsp;px etwa 100 Zeichen entspricht.

Autoren sollten nur `<h2>` bis `<h6>` vergeben können, nicht jedoch `<h1>`.

Für mehr Details siehe [`fonts.scss`](https://github.com/tschaef/dariah-de-2018-mockups/blob/gh-pages/scss/util/fonts.scss) und [`settings.scss`](https://github.com/tschaef/dariah-de-2018-mockups/blob/gh-pages/scss/util/settings.scss) sowie das [Mockup mit allen HTML-Elementen](https://tschaef.github.io/dariah-de-2018-mockups/mockups/html-elements.html).

## Icons

Die Icons entstammen den [Themify-Icons](https://themify.me/themify-icons) und werden als SVGs eingebunden, soweit möglich in der Originalgröße von 17&times;17&nbsp;px.

In den Kacheln auf der Hauptseite wird die Strichstärke der Icons vermindert, indem eine schmale weiße Umrandung hinzufügt wird.

Sofern eigene Icons hinzugefügt werden, ist unbedingt darauf zu achten, dass sich diese harmonisch zwischen den anderen einfügen, insbesondere hinsichtlich der Strichstärke.

## Mockups

Die [bereitgestellten Mockups](https://tschaef.github.io/dariah-de-2018-mockups/mockups/index.html) bieten einen Überblick der verschiedenen Layouts und Designelemente. Die Fußzeile erscheint auf jeder Seite.

### [Hauptseite](https://tschaef.github.io/dariah-de-2018-mockups/mockups/front-page.html) ([auch auf Englisch](https://tschaef.github.io/dariah-de-2018-mockups/mockups/front-page-en.html))

- volle Kopfzeile (klickbar ist nur der Menüpunkt »Digital Humanities«)
- Logo in voller Größe
- hervorgehobener Bereich mit 6 Kacheln, die &ndash; wie auf der alten Website &ndash; den Direkteinstieg zu wichtigen Unterseiten ermöglichen, ergänzt durch einen kurze Projektbeschreibung
- die neuesten 7 Blogposts; 4 in einer 2&times;2-Matrix, darunter 3 weitere nebeneinander
- hervorgehobener Link zum Blog

### [Volle Breite](https://tschaef.github.io/dariah-de-2018-mockups/mockups/full-width.html)

- Kopfzeile ohne Inhalt
- kleines Logo
- Inhaltsbereich

### [HTML-Elemente](https://tschaef.github.io/dariah-de-2018-mockups/mockups/html-elements.html)

Eine Übersicht (fast) aller möglichen HTML-Elemente einschließlich Tabellen und Formulare.
- Kopfzeile ohne Inhalt
- kleines Logo
- Inhaltsbereich mit begrenzter Breite

### [Blogpost](https://tschaef.github.io/dariah-de-2018-mockups/mockups/news-post.html)

Dieses Mockup demonstriert normalen Textinhalt mit optionalen Bildern und Medien, wie dieser für den Blog, aber auch auf statischen Seiten dargestellt werden sollte.
- volle Kopfzeile
- kleines Logo
- Inhaltsbereich

### Weitere Mockups

Für spezielle Seiten wurden weitere Mockups erstellt, darunter die [Login-Seite](https://tschaef.github.io/dariah-de-2018-mockups/mockups/login.html), die [Organisationsauswahl bei der Registrierung](https://tschaef.github.io/dariah-de-2018-mockups/mockups/select-organisation.html) sowie eine [Statusseite](https://tschaef.github.io/dariah-de-2018-mockups/mockups/status.html) mit den neuesten Tweets.
