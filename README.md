[![Greenkeeper badge](https://badges.greenkeeper.io/awendt/familienradwege-website.svg)](https://greenkeeper.io/)

# Familienfreundliche Radwege

Mit dem Auto kommen Familien in Berlin überall hin.

Aber mit dem Fahrrad? Wie stark ist die Mobilität für Familien mit kleinen Kindern eingeschränkt?

Um das Problem zu veranschaulichen, kartografieren wir die Radwege,
die sich für Familien eignen.

[![Kartenausschnitt](images/map.jpg)](https://www.familienradwege.de)

## Woher kommen die Kartendaten?

Dieses Projekt baut die Website _ohne Kartendaten_.
Die Kartendaten selbst werden in [anderswo](https://github.com/awendt/familienradwege) zusammengestellt.

## Getting started

### Prerequisites

This is the software you need to develop the website:

1. GNU Make
2. NodeJS v10 or newer

<details>
<summary>How do I create a local copy of the website?</summary>

Run the following command:

```
$ make all
```

This will do the following:

1. Install project dependencies (into `node_modules`)
2. Download map data
3. Create all HTML and all referenced files (images, CSS) into the sub-directory `website/`

This project uses [Parcel](https://parceljs.org/) because it's fast and
does not require any configuration.

</details>

<details>
<summary>How can I view the website?</summary>

If you have Ruby installed:

```
$ ruby -run -e httpd website/ -p 1234
```

Unfortunately, Node does not offer something like this out-of-the-box.
You might want to check the
[Big list of http static server one-liners](https://gist.github.com/willurd/5720255).
Then point your browser to http://localhost:1234 (change port if necessary).

</details>

<details>
<summary>How do I see changes immediately in the browser?</summary>

Run Parcel in watch mode instead:

```
npx parcel watch index.html berlin/index.html --out-dir website
```

</details>
