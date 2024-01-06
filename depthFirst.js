//Depth First: Stack

const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

//Iterative Solution
/*
const depthFirstPrint = (graph, source) => {
    const stack = [source]

    while(stack.length > 0){
        const current = stack.pop()
        console.log(current)
        for(let neighbor of graph[current]){
            stack.push(neighbor) 
        }
    }
}
*/

//Recursive Solution

const depthFirstPrint = (graph, source) => {
    console.log(source)
    for(let neighbor of graph[source]){
        depthFirstPrint(graph, neighbor)
    }
}

depthFirstPrint(graph, 'a')