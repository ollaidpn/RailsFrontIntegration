// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
// import Rails from "@rails/ujs"
// import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "babel-polyfill"
import "popper.js"
import "scrollnav"
require("jquery-ui-dist")

// Rails.start()
// Turbolinks.start()
ActiveStorage.start()




import "../js/vendor.min"
import "../vendor/hs-scroll-nav/dist/hs-scroll-nav.min"
import "../js/theme.min"
import "../megamenu"

//CSS
// <!-- CSS Implementing Plugins -->
// <link rel="stylesheet" href="./assets/css/vendor.min.css">

// <!-- CSS Front Template -->
// <link rel="stylesheet" href="./assets/css/theme.min.css?v=1.0">
// @import "docs.min";
// @import "theme.min";

const images = require.context('../img', true)
const imagePath = (name) => images(name, true)

const svgs = require.context('../svg', true)
const svgPath = (name) => svgs(name, true)