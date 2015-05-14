# generator-yo-scorm-encuesta

**Alpha-state experimental project - NOT USABLE/USEFUL**

[Yeoman](http://yeoman.io) generator for anonymous surveys in SCORM format, to be used from a SCORM compliant LMS (e.g. Moodle), storing survey data in a SQL database (MySQL up to now).

See also [scorm-encuesta](https://github.com/PedroBlanco/scorm-encuesta) for a (more) functional SCORM generator written in PHP.

This project tries to develop a SCORM generator written with Yeoman from the SCORM generator [scorm-encuesta](https://github.com/PedroBlanco/scorm-encuesta) project (written in PHP with a simple web interface), so up to now they share design principles (and mistakes).


## Getting Started

### Installing Generator (from yeoman documentation)

Assuming you have a functional node.js installation, first of all, you need to install [Yeoman](http://yeoman.io):

```bash
npm install -g yo
```

To install generator-yo-scorm-encuesta from npm, run:

```bash
npm install -g generator-yo-scorm-encuesta
```

Finally, initiate the generator:

```bash
yo yo-scorm-encuesta
```

### Using the generated SCORM

**Work in progress**: SCORM packages are not yet generated, but it should be similar to [this](https://github.com/PedroBlanco/scorm-encuesta#instalaci%C3%B3n) and [this](https://github.com/PedroBlanco/scorm-encuesta#configuraci%C3%B3n-de-la-encuesta).

## TODO

- [ ] Validate inputs.
- [ ] Store not chosen parameters (author, version, ...).
- [ ] Use unit tests (Mocha).
- [ ] Generate SCORM package.
- [ ] Generate Apache configuration.
- [ ] [See also](https://github.com/PedroBlanco/scorm-encuesta#sugerencias-y-posibles-mejoras).
