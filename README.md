# Kirby Rollup Pluginkit

This is a boilerplate for a Kirby Panel plugin that uses [Rollup.js](https://rollupjs.org) as an alternative to Parcel.js utilized by the [official pluginkit](https://github.com/getkirby/pluginkit/tree/4-panel). No other parts of the pluginkit were modified.

Rollup offers more fine-graned control over the build process and requires less node modules to install. This pluginkit has been successfully field-tested to compile the Kirby Editor.

****

## How to use the Pluginkit

1. Fork this repository
2. Change the plugin name and description in the `composer.json`
3. Change the plugin name in the `index.php` and `src/index.js`
4. Change the license if you don't want to publish under MIT
5. Add your plugin code to the `index.php` and `src/index.js`
6. Update this `README` with instructions for your plugin

### Install the development and build setup

We use [Rollup.js](https://rollupjs.org) for the development and build setup.

Rollup plugins needed for compiling Vue templates, Sass as well as bundling are handled b default. To install the required node modules, run:

```
npm install
```

### Development

You can start the dev process with …

```
npm run dev
```

This will automatically update the `index.js` and `index.css` of your plugin as soon as you make changes.
It will also enable hot module reloading in the panel. Reload the panel once and afterwards you should
see changes immediately without further reloading.

### Production

As soon as you are happy with your plugin, you should build the final version with

```
npm run build
```

This will automatically create a minified and optimized version of your `index.js` and `index.css`
which you can ship with your plugin.

We have a tutorial on how to build your own plugin based on the Pluginkit [in the Kirby documentation](https://getkirby.com/docs/guide/plugins/plugin-setup-basic).

What follows is an example README for your plugin.

****

## Installation

### Download

Download and copy this repository to `/site/plugins/{{ plugin-name }}`.

### Git submodule

```
git submodule add https://github.com/{{ your-name }}/{{ plugin-name }}.git site/plugins/{{ plugin-name }}
```

### Composer

```
composer require {{ your-name }}/{{ plugin-name }}
```

## Setup

*Additional instructions on how to configure the plugin (e.g. blueprint setup, config options, etc.)*

## Options

*Document the options and APIs that this plugin offers*

## Development

*Add instructions on how to help working on the plugin (e.g. npm setup, Composer dev dependencies, etc.)*

## License

MIT

## Credits

- [Your Name](https://github.com/ghost)
