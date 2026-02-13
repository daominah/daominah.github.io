# GitHub Pages for YuGiOh card editor

Result page: https://daominah.github.io/

A Yu-Gi-Oh! card editor with high resolution output,
using resources extracted from the Konami database and Master Duel.

## Data updates

https://github.com/daominah/yugioh_card_editor

The original repository has a daily workflow that fetches card text data
and pushes it to daominah.github.io/konami_data/konami_db_en.js.

Card artwork is extracted from Master Duel
about once per month if I am actively playing the game,
otherwise every few months.

## How to host a static website with GitHub Pages

### Steps

* Create a repository, must be named "${your_username}.github.io".  
  Example [daominah.github.io](https://github.com/daominah/daominah.github.io).
* Copy the web assets and code to the repository.  
  Example this repo is copied from <https://github.com/daominah/yugioh_card_editor/tree/master/web>.
* On the repository GitHub, go to `Settings: Pages` to config,
  if success, the repo will be served to public on
  [https://${your_username}.github.io/](https://daominah.github.io/).

### Reference

https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
