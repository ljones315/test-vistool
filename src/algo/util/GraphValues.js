// General

const LARGE_ALLOWED =
	[[false, true,  true,  false, true,  false, false, true,  false, false, false, false, false, false, true,  false, false, false],
	 [true,  false, true,  false, true,  true,  false, false, false, false, false, false, false, false, false, false, false, false],
	 [true,  true,  false, true,  false, true,  true,  false, false, false, false, false, false, false, false, false, false, false],
	 [false, false, true,  false, false, false, true,  false, false, false, true,  false, false, false, false, false, false, true],
	 [true,  true,  false, false, false, true,  false, true,  true,  false, false, false, false, false, false, false, false, false],
	 [false, true,  true,  false, true,  false, true,  false, true,  true,  false, false, false, false, false, false, false, false],
	 [false, false, true,  true,  false, true,  false, false, false, true,  true,  false, false, false, false, false, false, false],
	 [true,  false, false, false, true,  false, false, false, true,  false, false, true,  false, false, true,  false, false, false],
	 [false, false, false, false, true,  true,  false, true,  false, true,  false, true,  true,  false, false, false, false, false],
	 [false, false, false, false, false, true,  true,  false, true,  false, true,  false, true,  true,  false, false, false, false],
	 [false, false, false, true,  false, false, true,  false, false, true,  false, false, false, true,  false, false, false, true],
	 [false, false, false, false, false, false, false, true,  true,  false, false, false, true,  false, true,  true,  false, false],
	 [false, false, false, false, false, false, false, false, true,  true,  false, true,  false, true,  false, true,  true,  false],
	 [false, false, false, false, false, false, false, false, false, true,  true,  false, true,  false, false, false, true,  true],
	 [false, false, false, false, false, false, false, true,  false, false, false, true,  false, false, false, true,  false, false],
	 [false, false, false, false, false, false, false, false, false, false, false, true,  true,  false, true,  false, true,  true],
	 [false, false, false, false, false, false, false, false, false, false, false, false, true,  true,  false, true,  false, true],
	 [false, false, false, false, false, false, false, false, false, false, true,  false, false, true,  false, true,  true,  false]];

const LARGE_CURVE =
	[[0,     0, -0.4, 0,    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25, 0,    0, 0],
	 [0,     0, 0,    0,    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,    0,    0, 0],
	 [0.4,   0, 0,    0,    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,    0,    0, 0],
	 [0,     0, 0,    0,    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,    0,    0, -0.25],
	 [0,     0, 0,    0,    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,    0,    0, 0],
	 [0,     0, 0,    0,    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,    0,    0, 0],
	 [0,     0, 0,    0,    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,    0,    0, 0],
	 [0,     0, 0,    0,    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,    0,    0, 0],
	 [0,     0, 0,    0,    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,    0,    0, 0],
	 [0,     0, 0,    0,    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,    0,    0, 0],
	 [0,     0, 0,    0,    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,    0,    0, 0],
	 [0,     0, 0,    0,    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,    0,    0, 0],
	 [0,     0, 0,    0,    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,    0,    0, 0],
	 [0,     0, 0,    0,    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,    0,    0, 0],
	 [-0.25, 0, 0,    0,    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,    0,    0, 0],
	 [0,     0, 0,    0,    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,    0,    0, 0.4],
	 [0,     0, 0,    0,    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,    0,    0, 0],
	 [0,     0, 0,    0.25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,    -0.4, 0, 0]]

const LARGE_X_POS_LOGICAL =
	[600, 700, 800, 900,
	 650, 750, 850,
	 600, 700, 800, 900,
	 650, 750, 850,
	 600, 700, 800, 900];

const LARGE_Y_POS_LOGICAL =
	[50,  50,  50,  50,
	 150, 150, 150,
	 250, 250, 250, 250,
	 350, 350, 350,
	 450, 450, 450, 450];

const SMALL_ALLLOWED =
	[[false, true,  true,  true,  true,  false, false, false],
	 [true,  false, true,  true,  false, true,  true,  false],
	 [true,  true,  false, false, true,  true,  true,  false],
	 [true,  true,  false, false, false, true,  false, true],
	 [true,  false, true,  false, false, false, true,  true],
	 [false, true,  true,  true,  false, false, true,  true],
	 [false, true,  true,  false, true,  true,  false, true],
	 [false, false, false, true,  true,  true,  true,  false]];

const SMALL_CURVE =
	[[0,    0.001, 0,    0.5,   -0.5, 0,     0,     0],
	 [0,    0,     0,    0.001, 0,    0.001, -0.2,  0],
	 [0,    0.001, 0,    0,     0,    0.2,   0,     0],
	 [-0.5, 0,     0,    0,     0,    0.001, 0,     0.5],
	 [0.5,  0,     0,    0,     0,    0,     0,     -0.5],
	 [0,    0,     -0.2, 0,     0,    0,     0.001, 0.001],
	 [0,    0.2,   0,    0,     0,    0,     0,     0],
	 [0,    0,     0,    -0.5,  0.5,  0,     0,     0]];

const SMALL_X_POS_LOGICAL = [800, 725, 875, 650, 950, 725, 875, 800];
const SMALL_Y_POS_LOGICAL = [25, 125, 125, 225, 225, 325, 325, 425];

// BFS / DFS

const BFS_DFS_ADJ_LIST = 
		  //A     B      C     D      E     F      G      H
	/*A*/ [[0,    1,     1,    1,     1,    0,     0,     0],
	/*B*/  [1,    0,     0,    0,     0,    0,     1,     0],
	/*C*/  [1,    0,     0,    0,     0,    0,     0,     0],
	/*D*/  [1,    0,     0,    0,     0,    1,     0,     0],
	/*E*/  [1,    0,     0,    0,     0,    0,     1,     0],
	/*F*/  [0,    0,     0,    1,     0,    0,     1,     0],
	/*G*/  [0,    1,     0,    0,     1,    1,     0,     1],
	/*H*/  [0,    0,     0,    0,     0,    0,     1,     0]]
		.map(row => row.map(x => x || -1)); // Turn 0s to -1s

// Dijkstra's

const DIJKSTRAS_ADJ_LIST = 
		  //A     B      C     D      E     F      G      H
	/*A*/ [[0,    8,     2,    5,     0,    0,     0,     0],
	/*B*/  [8,    0,     1,    1,     0,    0,     7,     0],
	/*C*/  [2,    1,     0,    0,     3,    0,     0,     0],
	/*D*/  [5,    1,     0,    0,     0,    4,     0,     0],
	/*E*/  [0,    0,     3,    0,     0,    0,     2,     0],
	/*F*/  [0,    0,     0,    4,     0,    0,    '0',    1], // Hacky way to get actual 0 in final matrix
	/*G*/  [0,    7,     0,    0,     2,   '0',    0,     1],
	/*H*/  [0,    0,     0,    0,     0,    1,     1,     0]]
		.map(row => row.map(x => Number(x || -1))); // '0' is truthy, so we can cast it after the ||

// Prim's / Kruskal's

const PRIMS_KRUSKALS_ADJ_LIST = 
		  //A     B      C     D      E     F      G      H
	/*A*/ [[0,    1,     5,    0,     0,    0,     0,     0],
	/*B*/  [1,    0,     7,    9,     0,    0,     1,     0],
	/*C*/  [5,    7,     0,    0,     0,    0,     13,    0],
	/*D*/  [0,    9,     0,    0,     0,    4,     0,     0],
	/*E*/  [0,    0,     0,    0,     0,    0,     10,    0],
	/*F*/  [0,    0,     0,    4,     0,    0,     2,    '0'],
	/*G*/  [0,    1,     13,   0,     10,   2,     0,     3],
	/*H*/  [0,    0,     0,    0,     0,   '0',    3,    0]]
		.map(row => row.map(x => Number(x || -1)));

// Color coding for Disjoint Set in Kruskal's

const KRUSKALS_DS_COLORS = ["#9b9bd4", "#6aaf6a", "#f07575", "#ffe866", "#b8f9b8", "#ff99ff", "#99ffff", "#ffccd4"];

export {
	LARGE_ALLOWED,
	LARGE_CURVE,
	LARGE_X_POS_LOGICAL,
	LARGE_Y_POS_LOGICAL,
	SMALL_X_POS_LOGICAL,
	SMALL_Y_POS_LOGICAL,
	SMALL_ALLLOWED, 
	SMALL_CURVE,
	BFS_DFS_ADJ_LIST,
	DIJKSTRAS_ADJ_LIST,
	PRIMS_KRUSKALS_ADJ_LIST,
	KRUSKALS_DS_COLORS
};