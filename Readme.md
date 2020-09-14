# ❤️ 🥳 [Material.io](https://material.io/resources/get-started#web) web components setup

# ✋ PLEASE GO THROUGH THE README COMPLETELY

## This Repo is the setup for the Latest version of [Material.io](https://material.io/resources/get-started#web) web components

Instructions

- `Clone` or `download` the repo
- run
  ```
  npm install
  ```
- to run the dev server

  ```
  npm run start
  ```

  dev server runs on the [http://localhost:9000](http://localhost:9000)

- to create build
  ```
  npm run build
  ```

```
Note:- you can install all the Materail.io web components all at once or as individual components.
```

Run this command to install all components at once

```
npm i material-components-web
```

or as individual component

```
npm i @material/button @material/ripple
```

List of dev dependencies used

| package                 | version  |
| ----------------------- | -------- |
| @babel/core             | ^7.11.6  |
| @babel/preset-env       | ^7.11.5  |
| babel-loader            | ^8.1.0   |
| css-loader              | ^4.3.0   |
| fibers                  | ^5.0.0   |
| file-loader             | ^6.1.0   |
| html-loader             | ^1.3.0   |
| html-webpack-plugin     | ^4.4.1   |
| mini-css-extract-plugin | ^0.11.2  |
| sass                    | ^1.26.10 |
| sass-loader             | ^10.0.2  |
| webpack                 | ^4.44.1  |
| webpack-cli             | ^3.3.12  |
| webpack-dev-server      | ^3.11.0  |

---

List of dependencies used

| package          | version |
| ---------------- | ------- |
| @material/button | ^7.0.0  |
| @material/ripple | ^7.0.0  |

---

you can add new pages(multiple html files) by importing them into the `src/js/index.js`

### 💡 don't forget to add the entry in the webpack.config.js under plugins setion

```
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "page.html",
      template: "src/page.html",
    }),
    ... create new pages and add entry here and import them into the src/js/index.js
  ],
```

⚠️ don't forget to add the `filename` otherwise it is taken as the default entry creating a `index.html`(also overrides the actual index.html) instead of the actual filename(page.html)

🤞 use a css reset like [Normalize.css](https://necolas.github.io/normalize.css/) as a cdn link if required
[CDN LINK](https://cdnjs.com/libraries/normalize)

# 👉 Please Support and Subscribe to My [Youtube](https://www.youtube.com/channel/UCpOHt5d6GG-mvo-_pU06rhQ?sub_confirmation=1) Channel

Made with ❤️ - by [FrontEndFunn](https://www.youtube.com/channel/UCpOHt5d6GG-mvo-_pU06rhQ?sub_confirmation=1)
