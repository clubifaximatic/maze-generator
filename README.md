# maze-generator
Generate mazes for fun using nodejs

Generate mazes using some of the algorithms described in the book [Mazes for Programmers](https://www.amazon.es/Mazes-Programmers-Twisty-Little-Passages/dp/1680500554/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=mazes+for+programmers&qid=1633941115&sr=8-1) by Jamis Buck

## How to use it

The application is deployed in heroku:

[https://clubi-maze-generator.herokuapp.com/maze/generate?columns=5&rows=5](https://clubi-maze-generator.herokuapp.com/maze/generate?columns=5&rows=5)

### Parameters
* **columns**: number of colums in the maze. Columns should be a number between (0, 100]
* **rows**: number of rows in the maze. Rows should be a number between (0, 100]
* **method**: optional (default backtracking). The algorithm to be used (binary-tree, sidewinder, etc.)
* **seed**: optional (default random). Seed for random method (numeric). Same seed generates the same maze
* **out**: optional (default html). Output format
   - html: html with tiles
   - eascii: extended ascii chars
   - ascii: extended ascii chars


## Implementations (method)

### binary-tree

[web-link](https://clubi-maze-generator.herokuapp.com/maze/generate?columns=5&rows=5&method=binary-tree)

```
$ curl https://clubi-maze-generator.herokuapp.com/maze/generate?columns=5&rows=5&method=binary-tree

┌───────────────────┐
│                   │
│   │   ┌────   │   │
│   │   │       │   │
├───┴───┘   ┌───┘   │
│           │       │
│   ┌───────┘   │   │
│   │           │   │
│   │   ┌────   │   │
│   │   │       │   │
└───┴───┴───────┴───┘
```

### sidewinder
[web-link](https://clubi-maze-generator.herokuapp.com/maze/generate?columns=5&rows=5&method=sidewinder)

```
$ curl https://clubi-maze-generator.herokuapp.com/maze/generate?columns=5&rows=5&method=sidewinder

┌───────────────────┐
│                   │
│   │   ────────┐   │
│   │           │   │
│   ├────   │   │   │
│   │       │   │   │
├───┴───────┘   └───┤
│                   │
│   │   ────┐   │   │
│   │       │   │   │
└───┴───────┴───┴───┘
```

### aldous-broder
[web likn](https://clubi-maze-generator.herokuapp.com/maze/generate?columns=5&rows=5&method=aldous-broder)

```
$ curl https://clubi-maze-generator.herokuapp.com/maze/generate?columns=5&rows=5&method=aldous-broder

┌───────────┬───────┐
│           │       │
├───┐   │   │   │   │
│   │   │       │   │
│   └───┼───────┘   │
│       │           │
│   ────┴───┬────   │
│           │       │
│   ────┐   │   ────┤
│       │           │
└───────┴───────────┘
```

### wilsons
[web-link](https://clubi-maze-generator.herokuapp.com/maze/generate?columns=5&rows=5&method=wilsons)

```
$ curl https://clubi-maze-generator.herokuapp.com/maze/generate?columns=5&rows=5&method=wilsons

┌───────────┬───────┐
│           │       │
│   ┌────   │   ┌───┤
│   │           │   │
│   │   ┌───┐   │   │
│   │   │   │       │
│   └───┘   │   │   │
│           │   │   │
├────────   └───┴───┤
│                   │
└───────────────────┘
```

### hunt -and-kill
[web-link](https://clubi-maze-generator.herokuapp.com/maze/generate?columns=5&rows=5&method=hunt-and-kill)

```
$ curl https://clubi-maze-generator.herokuapp.com/maze/generate?columns=5&rows=5&method=hunt-and-kill

┌───┬───────────────┐
│   │               │
│   │   ────┐   │   │
│   │       │   │   │
│   ├────   │   └───┤
│   │       │       │
│   └───┐   ├────   │
│       │   │       │
│   │   │   │   ────┤
│   │       │       │
└───┴───────┴───────┘
```

### backtracking
[web-link](https://clubi-maze-generator.herokuapp.com/maze/generate?columns=5&rows=5&method=backtracking)

```
$ curl https://clubi-maze-generator.herokuapp.com/maze/generate?columns=5&rows=5&method=backtracking

┌───┬───────────────┐
│   │               │
│   │   │   ┌────   │
│       │   │       │
│   ────┤   └───────┤
│       │           │
├───────┼───────┐   │
│       │       │   │
├────   │   │   │   │
│           │       │
└───────────┴───────┘
```

### TODO
* add solver
* more output modes
* visualize solution
* implement more algorithms
