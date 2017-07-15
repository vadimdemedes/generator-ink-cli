#!/usr/bin/env node
'use strict';

const importJsx = require('import-jsx');
const {h, render} = require('ink');
const meow = require('meow');

const Ui = importJsx('./ui');

const cli = meow(`
	Usage
	  $ <%= repoName %> [input]

	Options
	  --name  Lorem ipsum [Default: false]

	Examples
	  $ <%= repoName %>
	  I love Ink
	  $ <%= repoName %> --name=ponies
	  I love ponies
`);

render(h(Ui, cli.flags));
