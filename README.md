# Frontity Contact Form 7 Project :art:

:fire: Contact Form 7 feature for Frontity theme.

# Installation :wrench:

### 1. For new project: by cloning this project.

1. `git clone https://github.com/imranhsayed/frontity-contact-form-7`
2. `cd frontity-contact-form-7`
3. `npm install && npx frontity dev` ( from the project's root directory )
 
4. Your site will now be available at `http://localhost:3000/`

## 2. For new/existing project using npm

1. `npx frontity create my-app && cd my-app`
2. `npm install @frontity/contact-form-7-theme`
3. Update the package name to the `frontity-settings.js`
```ruby
  "packages": [
    {
      "name": "@frontity/contact-form-7",
```
4. `npx frontity dev` ( from project's root directory )
5. Your site will be available at `http://localhost:3000/`
6. Set the to true to display featured images on Home page and single post page.
```ruby
      "featured": {
        "showOnList": true,
        "showOnPost": true
      }
```

## More info :clipboard:

This is the beta version. Some features will be added in the final release, like:

1. More button smaller screens.

## Common Commands :computer:

- `npx frontity dev` ( inside project's root ) Runs server in development mode ( from the root of your project )

## Credits :white_flower:

- Build with love :blue_heart:, using [Frontity's](https://frontity.org) [mars-theme](https://www.npmjs.com/package/@frontity/mars-theme)

## Author

1. [Imran Sayed](https://twitter.com/imranhsayed)
2. [Smit Patadiya](https://twitter.com/smit_patadiya)

## License :scroll:

![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)

- **[GPLv2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)**
