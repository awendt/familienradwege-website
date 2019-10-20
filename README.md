[![Greenkeeper badge](https://badges.greenkeeper.io/awendt/familienradwege-website.svg)](https://greenkeeper.io/)

# Family-friendly bike paths

This project maps family-friendly bike paths, to illustrate a single point:

**In Berlin, you can get anywhere by car. But not by bike. 🚳**

[![Kartenausschnitt](images/map.jpg)](https://www.familienradwege.de)

## Where does the map data come from?

This project only builds the website _without map data_.
The map data is compiled [elsewhere](https://github.com/awendt/familienradwege).

For convenience, this project provides tools to download everything locally.

## Getting started

### Prerequisites

This is the software you need to develop the website:

1. GNU Make
2. NodeJS v10 or newer + NPM
3. Pandoc v2.7 or newer

<details>
<summary>How do I know I have everything installed?</summary>

Run the following, every line should have a check mark:

```bash
$ make check
✔ fswatch
✔ node
✔ npm
✔ pandoc
```
</details>

### Building the project

Once you have all required software, in the root directory of this project, run:

```
$ make
```

This will do the following:

1. Install project dependencies (into `node_modules`)
2. Download map data
3. Create all HTML and all referenced files (images, CSS) and place them into the sub-directory `website/`

### Development server

There is a development server which will automatically rebuild your app as you
change files and supports hot module replacement for fast development.

This server requires [`fswatch`](https://github.com/emcrisostomo/fswatch).
To run the dev server, run:

```
$ make start-dev-server
```

and point your browser to http://localhost:1234/.
You can adjust the port using `make start-dev-server PORT=xyz`.

<details>
<summary>How is this dev server working?</summary>

[Parcel ships with a development server](https://parceljs.org/getting_started.html)
but since you don't edit HTML files directly in this project, that's not enough.
So to make this easy to work with, we need 3 parts:

1. `fswatch` watches Markdown files and re-builds HTML if necessary.
2. Parcel watches HTML files and its asset dependencies (Javascript, CSS),
   re-builds the website if necessary and ensures your browser is updated.
3. The server that serves the application to the browser. Parcel could do this
   itself but it does not recognize the permalinks this project is using.

These three parts are orchestrated by the [`Procfile`](Procfile) and
[`node-foreman`](https://github.com/strongloop/node-foreman) which is started
when you run `make start-dev-server`.

</details>

### Creating new pages

You can find all content under [`pages`](pages).
Each Markdown file in there represents one page
(except for `footer.md` which is appended to each generated HTML file).


To create a new page:

1. Create a new `.md` file in `pages`
2. Add it to the `HTML =` line at the top of [`Makefile`](Makefile).
