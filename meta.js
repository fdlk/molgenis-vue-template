module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A MOLGENIS Vue.js project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "molgenis": {
      "type": "confirm",
      "message": "Do you want A Molgenis plugin? Note: This will change the location to which the production bundle is written. Updated location will be the target/classes directory of a maven module"
    }
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}yarn install\n  yarn run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack"
};
