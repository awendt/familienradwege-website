---
pagetitle: 'Kartendaten'
css:
- //code.cdn.mozilla.net/fonts/fira.css
- ../../stylesheets/screen.scss
header-includes:
- |
  ```{=html}
  <link rel="canonical" href="https://www.familienradwege.de/daten" />
  ```
include-after:
- |
  <script src="../../js/last_modified.js"></script>
---

# Woher stammen die Kartendaten?

Die für die Radwegekarten benötigten Daten stammen aus
[OpenStreetMap](https://www.openstreetmap.org/) (OSM),
einer freien Datenbank von Geoinformationen.
OSM kann nach bestimmten Kriterien abgefragt werden kann, wie zum Beispiel:

- "alle Schnellstraßen in Brandenburg"
- "alle Behörden in Deutschland"
- "alle Radwege, die nicht auf der Fahrbahn verlaufen"

Aus diesen abgefragten Daten können Karten erstellt werden.
Natürlich können diese Karten nur die Informationen enthalten,
die auch in OSM vorhanden sind.
Deshalb können die hier gezeigten Karten **keinen Anspruch auf Richtigkeit
oder Vollständigkeit** erheben.

Sollten unsere Radwegekarten Fehler enthalten, kann das folgende Gründe haben:

🧓 Unsere Karten sind nicht aktuell.

: Sie werden etwa wöchentlich aktualisiert,
  zuletzt am: <span id="last-modified">[…]</span>

✂️ Die Strecke ist zu kurz.

: Um die Menge an Daten technisch beherrschbar zu halten,
  berücksichtigen wir nur *Wege ab 10 Meter*.

🕵️ Unsere Datenquelle OpenStreetMap enthält nicht die neuesten Informationen.

: Fehler und Unvollständigkeiten können in OSM korrigiert werden.

: Dazu gibt es eine ausführliche
  [Hilfeseite für das Melden von Fehlern](https://wiki.openstreetmap.org/wiki/DE:Notes).

🐛 Unsere Datenabfrage an OpenStreetMap hat einen Bug.

: In dem Fall ist es am besten, uns das Problem bei
  [Github](https://github.com/awendt/familienradwege/issues)
  zu melden.

Die Abfrage, Aufbereitung und Bereitstellung der Kartendaten
erfolgt getrennt von der Website, denn es gibt wenig inhaltlich noch
technisch Überschneidungen.

[Der Quelltext ist auf Github verfügbar](https://github.com/awendt/familienradwege).
Bitte macht mit und helft uns, die Karte zu verbessern oder neue Städte hinzuzufügen!

[zur Startseite](/){.btn}
