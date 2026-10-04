# Yusuf Khan Portfolio

A single-page portfolio built with plain HTML, CSS and vanilla JavaScript. There is no build step or package installation.

## Run locally

Open `index.html` directly in a browser, or serve the folder locally:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Deploy on GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Choose **Deploy from a branch**, select the branch and `/ (root)`, then save.

## Deploy on Netlify

1. Import the GitHub repository in Netlify, or drag this folder into Netlify Drop.
2. Leave the build command empty and set the publish directory to `.` (the repository root).

## Updating content

Edit the `portfolio` object near the top of `script.js`. The CV PDF is in `assets/Yusuf_Khan_CV.pdf`.