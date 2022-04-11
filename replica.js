const replica = (...objects) => {
    return Object.assign(objects[0], objects.slice(1))
}

console.log(replica(
    {},
    Object.freeze({ line: 'Replicants are like any other machine' }),
    Object.freeze({ author: 'Rich' })
  ));