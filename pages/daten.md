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

🕵️ Unsere Karten sind aktuell, aber unsere Datenquelle OSM nicht.

: Fehler und Unvollständigkeiten können in OSM korrigiert werden.

: Dazu gibt es eine ausführliche
  [Hilfeseite für das Melden von Fehlern](https://wiki.openstreetmap.org/wiki/DE:Notes).

✂️ Die Strecke ist zu kurz.

: Um die Menge an Daten technisch beherrschbar zu halten,
  ignorieren wir alle Wege, die kürzer als 10 Meter sind.

[zur Startseite](/){.btn}
