'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the soon-to-be great ' + chalk.red('YoScormEncuesta') + ' generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'denomination',
        message: 'Can you tell me a simple name for this survey? ',
        default: 'survey'
      },
      {
        type: 'input',
        name: 'urlReceiver',
        message: 'What is the URL (public folder in your server) for the survey receiver? ',
        default: 'http://localhost/encuesta-scorm'
      },
      {
        type: 'input',
        name: 'comment',
        message: 'Please, introduce some comments about this survey: ',
        default: 'Test survey'
      },
      {
        type: 'input',
        name: 'dbHost',
        message: 'Enter your DB hostname: ',
        default: 'localhost'
      },
      {
        type: 'input',
        name: 'dbUser',
        message: 'Enter your DB user: ',
        default: 'survey'
      },
      {
        type: 'password',
        name: 'dbPass',
        message: 'Now, enter the DB user\'s password: '
      },
      {
        type: 'input',
        name: 'dbName',
        message: 'Enter the database\'s own name: ',
        default: 'encuestas'
      },
      {
        type: 'input',
        name: 'dbTable',
        message: 'Enter the name of the DB\'s table: ',
        default: 'survey'
      },
      {
        type: 'input',
        name: 'dbPort',
        message: 'Finally, introduce the port number used to access your DB host: ',
        default: 3306,
        validate: function(input) {

          // Declare function as asynchronous, and save the done callback
          var done = this.async();

          // Do async stuff
          setTimeout(function() {
            if (typeof input !== 'number') {
              // Pass the return value in the done callback
              done('You need to provide a number');
              return;
            } else if ( (input <= 1) && (input >= 49151) ) {
              // Pass the return value in the done callback
              done('You need to provide a number between 1 and 49151');
              return;
            }
            // Pass the return value in the done callback
            done(true);
          }, 3000);
        }
      }
    ];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  configuring: function () {
    this.log('Configuring...');
    this.log ( JSON.stringify ( this.props, null, '  ' ) );
    this.config.save();
    this.log(' * Creating local .yo-rc.json...');
  },

  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
      this.fs.copy(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json')
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
      this.fs.copyTpl(
        this.templatePath('serverside.php'),
        this.destinationPath(this.props.denomination+'.php'),
        {
          TARGET: this.props.denomination,
          URL: this.props.urlReceiver,
          COMMENT: this.props.comment,
          DB_HOST: this.props.dbHost,
          DB_USER: this.props.dbUser,
          DB_PASS: this.props.dbPass,
          DB_NAME: this.props.dbName,
          DB_TABLE: this.props.dbTable,
          BD_PORT: this.props.dbPort
        }
      );
      this.fs.copyTpl(
        this.templatePath('create_table.sql'),
        this.destinationPath('create_table_'+this.props.dbTable+'.sql'),
        {
          DB_NAME: this.props.dbName,
          DB_TABLE: this.props.dbTable
        }
      );
      this.fs.copyTpl(
        this.templatePath('create_user.sql'),
        this.destinationPath('create_user_'+this.props.dbUser+'.sql'),
        {
          DB_HOST: this.props.dbHost,
          DB_USER: this.props.dbUser,
          DB_PASS: this.props.dbPass,
          DB_NAME: this.props.dbName,
          DB_TABLE: this.props.dbTable
        }
      );
    }
  },

  install: function () {
    this.installDependencies();
  },

  end: function () {
    this.log('This is the end...');
  }
});
