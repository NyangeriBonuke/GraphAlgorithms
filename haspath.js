const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

//Using breadth first traversal
//Recursive Solution

/*
const hasPath = (graph, src, dist) => {
    if(src === dist) return true
    
    for(let neighbor of graph[src]){
        if (hasPath(graph, neighbor, dist) === true){
            return true
        }
    }

    return false
}
*/

//Using depth first traversal

console.log(hasPath(graph, 'a', 'f'))