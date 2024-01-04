//Depth First: Stack

const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

//Traversing a graph data structure

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

depthFirstPrint(graph, 'a')