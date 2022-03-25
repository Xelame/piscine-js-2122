function blockChain (data, prev = { index: 0, hash: '0' }) {
    return {
        index: prev.index + 1,
        hash : hashCode(`${index}${prev.hash}${JSON.stringify(data)}`),
        data : data,
        prev : prev,
    }; 
}