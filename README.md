# Component Driven Design
## Expression Engine Conference 2017

This is the Expression Engine codebase from the "Component Driven Design" presentation at [Expression Engine Conference 2017](https://www.eeconf.com/).

This is intended for code reading, however if you want to run the app there are a few steps.

First download Expression Engine and the required plugins, and move the appropriate directories listed below.

Download required dependencies...

- [Expression Engine](https://expressionengine.com/)
- [Bloqs](https://eebloqs.com/)
- [HTTP Header](https://devot-ee.com/add-ons/http-header)
- [Streeng](https://devot-ee.com/add-ons/streeng)

Copy over required direcotries...

```
system/ee
system/ee/addons/bloqs
system/ee/addons/http_header
system/ee/addons/streeng
public_html/images
public_html/themes
```

Then edit config.php, install Expression Engine, and configure channels / fields to match the expected data in the components templates.

Once set up with Expression Engine, run the following to build the front end.

```
$ npm install
$ npm run webpack:prod
```

Any problems let me know! 🤘
