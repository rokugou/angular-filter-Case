# ngCaseFilters

[![Build Status](https://travis-ci.org/oaguy1/angular-filter-Case.svg?branch=master)](https://travis-ci.org/oaguy1/angular-filter-Case)

[Case](https://github.com/nbubna/Case) library ported to AngularJS 1.x filters.


###Usage
```javascript
<script src="Case.js"></script>
<script src="ngcasefilters.js"></script>

var yourApp = angular.module('yourApp', ['ngCaseFilters']);

upper: foo_bar -> {{'foo_bar' | upperCase}}
lower: fooBar -> {{'fooBar' | lowerCase}}
snake: Foo bar! -> {{'Foo bar!' | snakeCase}}
squish: foo.bar -> {{'foo.bar' | squishCase}}
camel: foo, bar -> {{'foo, bar' | camelCase}}
constant: Foo-Bar -> {{'Foo-Bar' | constantCase}}
title: foo v. bar -> {{'foo v. bar' | titleCase}}
capital: foo_v_bar -> {{'foo_v_bar' | capitalCase}}
sentence: "foo!" said bar -> {{'"foo!" said bar' | sentenceCase:['Bar']}}
flip: FlipMe -> {{"FlipMe" | flipCase}}
```
