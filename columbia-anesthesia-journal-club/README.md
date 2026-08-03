# Columbia Anesthesia Journal Club — website

A modern rebuild of the Cardiac + ICU anesthesiology journal club site. No build
step, no server, no coding required to update content — just edit the data
files listed below in any plain-text editor (Notepad, TextEdit, VS Code, or even
GitHub's own web editor) and save.

## Pages

| File | What it is |
|---|---|
| `index.html` | Homepage |
| `cardiac.html` | Cardiac journal club — High Impact Articles + every year |
| `icu.html` | ICU journal club — High Impact Articles + every year |
| `didactics.html` | Periop Didactics lecture library |
| `full-text.html` | Library access instructions |
| `about.html` | About / disclaimer |

## Where the content lives (edit these, not the HTML)

- `data/icu-data.js` — every ICU session, EBM paper, Deep Dive, and the ICU
  "High Impact Articles" repository.
- `data/cardiac-data.js` — every Cardiac paper (with clinical question / methods
  / take-away where available) and the Cardiac "High Impact Articles" repository.
- `data/didactics-data.js` — the didactics lecture links.

Each file has instructions in a comment at the top. In short:

**To add a new ICU or Cardiac academic year:** open the matching data file,
copy one of the existing entries inside the `years: [ ... ]` list (copy from
one `{` down to its matching `}`), paste it as a new entry, change the `id`
and `label`, and replace the session/paper details. Save the file — a new tab
appears on the page automatically, no other file needs to change.

**To add one new session or paper to an existing year:** find that year's
block, copy one existing session/paper entry, paste it, and edit the text and
links.

**To edit wording that isn't a list** (About page text, Full Text
Instructions, the homepage intro) — edit the plain text directly inside the
matching `.html` file. That text is regular sentences, not code; just don't
touch anything inside `< >` angle brackets.

## Hosting it

This is a fully static site (plain HTML/CSS/JS, no database, no server-side
code), so it can be hosted for free the same way the original site was:

1. Create a GitHub repository and upload this folder's contents (or connect it
   to GitHub Desktop and drag the folder in — no command line needed).
2. In the repo's **Settings → Pages**, set the source to the `main` branch,
   root folder.
3. GitHub will publish it at `https://<your-username>.github.io/<repo-name>/`.
   You can also point a custom domain (like `anesthesiajournalclub.com`) at it
   from the same Settings → Pages screen.

You can also just drag the whole folder into Netlify Drop or Cloudflare Pages
for one-click hosting if you'd rather not use GitHub.

## Design notes

- Palette and type are set as CSS variables at the top of `css/styles.css` —
  change a color or font there and it updates everywhere.
- The thin heartbeat-line divider under the header and on the homepage is the
  site's one recurring signature element, tying the visual identity to
  cardiac/critical-care medicine.
- Layout is responsive down to mobile; the year/High-Impact switcher becomes a
  simple tab list and the nav collapses into a "Menu" button on small screens.
