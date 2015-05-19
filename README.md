# generator-yo-scorm-encuesta

:warning:**Alpha-state experimental project - NOT USABLE/USEFUL**:warning:

[Yeoman](http://yeoman.io) generator for anonymous surveys in SCORM format, to be used from a SCORM compliant LMS (e.g. Moodle), storing survey data in a SQL database (MySQL up to now).

See also [scorm-encuesta](https://github.com/PedroBlanco/scorm-encuesta) for a (more) functional SCORM generator written in PHP.

This project tries to develop a SCORM generator written with Yeoman from the SCORM generator [scorm-encuesta](https://github.com/PedroBlanco/scorm-encuesta) project (written in PHP with a simple web interface), so up to now they share design principles (and mistakes).

The generated surveys contain the same fixed set of questions. This set of questions coincides (up to now, [see this](https://github.com/PedroBlanco/generator-yo-scorm-encuesta#todo)) with the final survey used in those courses that are homologated by the [Instituto Andaluz de Administración Pública (IAAP)](http://www.juntadeandalucia.es/haciendayadministracionpublica/).

**IMPORTANT: This organism (IAAP) is not responsible in any way of this software and is not related with it beyond the fact that the generated surveys contain the same questions as the surveys used in the mentioned homologated courses. Moreover, no warranty of acceptance or utility is claimed by this software in relation to the derived results of this software generated surveys.**

In order to modify the questions, one has to edit the source code, though this is [poised to change](https://github.com/PedroBlanco/generator-yo-scorm-encuesta#todo). Also, the questions are in Spanish.

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

- [ ] Separate the questions from the rest of the code to ease their modification.
- [ ] Validate inputs.
- [ ] Store not chosen parameters (author, version, ...).
- [ ] Use unit tests (Mocha, [Testing generators](http://yeoman.io/authoring/testing.html)).
- [ ] Generate SCORM package.
- [ ] Generate Apache configuration.
- [ ] [See also](https://github.com/PedroBlanco/scorm-encuesta#sugerencias-y-posibles-mejoras).
