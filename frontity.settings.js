const settings = {
  "name": "frontity-contact-form-7",
  "state": {
    "frontity": {
      "url": "https://test.frontity.io",
      "title": "Frontity Contact Form 7",
      "description": "Introducing Contact Form 7 package for Frontity"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Contact Form 7",
              "contact-form-7"
            ],
            [
              "Travel",
              "/category/travel/"
            ],
            [
              "Japan",
              "/tag/japan/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://codeytek.com/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
	  "contact-form-7",
  ]
};

export default settings;
