# <%= repoName %> [![Build Status](https://travis-ci.org/<%= githubUsername %>/<%= repoName %>.svg?branch=master)](https://travis-ci.org/<%= githubUsername %>/<%= repoName %>)<% if (codecov) { %> [![codecov](https://codecov.io/gh/<%= githubUsername %>/<%= repoName %>/badge.svg?branch=master)](https://codecov.io/gh/<%= githubUsername %>/<%= repoName %>?branch=master)<% } %>

> <%= moduleDescription %>


## Install

```
$ npm install --global <%= moduleName %>
```


## Usage

```js
$ <%= repoName %> --help

  Usage
    <%= repoName %> [input]

  Options
    --name  Lorem ipsum [Default: false]

  Examples
    $ <%= repoName %>
    I love Ink
    $ <%= repoName %> --name=ponies
    I love ponies
```


## License

MIT © [<%= name %>](<%= website %>)
