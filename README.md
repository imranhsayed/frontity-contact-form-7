# Frontity Contact Form 7 Project :art:

:fire: Contact Form 7 extension for Frontity themes.

# How does it work?

> You need to create a page in your WordPress site ( if you don't already have one ) that contains the CF7 shortcode.
Then use put that page name in the `frontity-settings.js` as explained below. The Frontity page will automatically render all the CF7
forms that are present on that page.
Once the form is submitted the email goes to the admin ( if CF7 email settings are configured on your WordPress site  )

> It uses html processors to render the CF7 form.

# Features
1. All CF7 forms on the page will display
2. You can also use it for multiple pages.
3. Fast

# Installation :wrench:

## 1. For new/existing project using npm

1. `npx frontity create my-app && cd my-app`
2. `cd packages`
2. `npm install contact-form-7`
3. Add `"contact-form-7"` to the packages array in `frontity-settings.js` and also put your theme name under `name`
```ruby
  "packages": [
    {
    "name": "@frontity/mars-theme",
      "contact-form-7",
```
4. Add the WordPress page name which has the CF7 shortcode. 
```ruby
      "state": {
        "theme": {
          "menu": [
            [
              "Contact Form 7",
              "/cf7"
            ],
```
5. `npx frontity dev` ( from project's root directory )
6. Your site will be available at `http://localhost:3000/`

## More info :clipboard:

This is the beta version.
It has the support for the CF7 fields that show in the default CF7 shortcode and some others like: 
1. name
2. email
3. subject message

Support for other fields will be added in the final release.

## Credits :white_flower:

- Build with love :blue_heart:, using [Frontity's](https://frontity.org)

## Author

1. [Imran Sayed](https://twitter.com/imranhsayed)
2. [Smit Patadiya](https://twitter.com/smit_patadiya)

## License :scroll:

![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)

- **[GPLv2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)**
