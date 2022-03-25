function blockChain (data, prev = { index: 0, hash: '0' }) {
    return {
        index: prev.index + 1,
        hash : hashCode(`${prev.index + 1}${prev.hash}${JSON.stringify(data)}`),
        prev : prev,
        data : data,
        chain: blockChain(data, prev = { index: prev.index + 1, hash: prev.hash })
    }; 
}