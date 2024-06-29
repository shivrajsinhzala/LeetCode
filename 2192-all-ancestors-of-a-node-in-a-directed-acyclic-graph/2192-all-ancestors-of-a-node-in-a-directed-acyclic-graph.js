function getAncestors(n, edges) {
    const graph = Array.from({ length: n }, () => []);
    const ancestors = Array.from({ length: n }, () => new Set());

    for (const [from, to] of edges) {
        graph[from].push(to);
    }

    const dfs = (currentNode, ancestor) => {
        for (const child of graph[currentNode]) {
            if (!ancestors[child].has(ancestor)) {
                ancestors[child].add(ancestor);
                dfs(child, ancestor);
            }
        }
    };

    for (let node = 0; node < n; node++) {
        dfs(node, node);
    }

    return ancestors.map(ancestorSet => Array.from(ancestorSet).sort((a, b) => a - b));
}
