# DARIAH-DE Style Guide Template

![template screenshot](./screenshot_1.png)

The goal of this template is to facilitate the development of interfaces for web tools that are part of the DARIAH-DE ecosystem.

This template complements the report [R. 1.2.2/R. 7.5 *Usability Criteria for External Requests of Collaboration*](https://wiki.de.dariah.eu/download/attachments/14651583/R1.2.2-7.5_final.pdf?version=1&modificationDate=1452850842838&api=v2), specifically the *DARIAH-DE Style Guide* contained in the Appendix.

## How to view this template?

1. `git clone` this repository
2. `cd` into the `templates` directory
3. launch a web server from terminal with `python -m SimpleHTTPServer 8000`
4. open `localhost:8000` in a browser

To view the previous styleguide version, `cd` to `templates/StyleGuide_v100` and launch
the webserver from that directory.

or just check it out at <http://dariah-de.github.io/StyleGuideTemplate/>

## Desgin Primer

For tips and guidelines on the extension of this template, have a look at
the [Design-Primer](design-primer.de.md)

## Contact

This template was packaged together by [Matteo Romanello](https://github.com/mromanello) and is based on the layout design by [Patrick Heck](https://github.com/patrickheck).

For bugs, feature requests etc. please use the [github issue tracker](https://github.com/DARIAH-DE/StyleGuideTemplate/issues).

## Global Menu

To ensure the global navigation menu remains consistent accross all services, make sure to use a minimal `ul` with `id="home_dropdown_menu"` as in the template and to include
```html
<script type="text/javascript" src="resources/js/globalmenu.js"></script>
```
which will load the central version.
