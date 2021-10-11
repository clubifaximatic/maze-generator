# maze-generator
Generate mazes for fun using nodejs

Generate mazes using some of the algorithms described in the book [Mazes for Programmers](https://www.amazon.es/Mazes-Programmers-Twisty-Little-Passages/dp/1680500554/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=mazes+for+programmers&qid=1633941115&sr=8-1) by Jamis Buck

## Implementations

### binary-tree
```
+---+---+---+---+---+---+---+---+---+---+
|                                       |
+   +   +   +---+---+---+---+---+---+   +
|   |   |   |                           |
+---+   +---+---+   +---+---+   +---+   +
|       |           |           |       |
+---+   +---+---+---+---+---+---+---+   +
|       |                               |
+---+   +   +   +   +   +---+---+   +   +
|       |   |   |   |   |           |   |
+   +---+---+---+---+---+---+---+   +   +
|   |                               |   |
+---+   +   +---+---+---+---+---+   +   +
|       |   |                       |   |
+---+   +   +---+   +---+   +---+   +   +
|       |   |       |       |       |   |
+---+---+   +   +---+   +---+   +   +   +
|           |   |       |       |   |   |
+   +---+---+---+---+---+---+   +   +   +
|   |                           |   |   |
+---+---+---+---+---+---+---+---+---+---+
```

### TODO
* setup a server with express to run them.ie `maze/generate?columns=20&rows=20&algorithm=binary-tree
