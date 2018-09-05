'use strict'

let save = async (object) => {
    return new Promise((resolve, reject)=>{
        object.save((err, success) => {
            if (err) reject(err)
            if (success) resolve(success)
        })
    })
}

let remove = (object, filter) => {
    return new Promise((resolve, reject)=>{
        object.findOneAndRemove(filter,(err, success) => {
            if (err) reject(err)
            if (success) resolve(success)
        })
    })
}

let update = (object, filter, set) => {
    return new Promise((resolve, reject)=>{
        object.findOneAndUpdate(filter, set,(err, success) => {
            if (err) reject(err)
            if (success) resolve(success)
        })
    })
}

let find = (object, filter, projection) => {
    let query = object.find(filter, projection, (err, success) => {
        if (err) console.log(err);
    })
    return projection ? query.select(projection).exec() : query.exec()
}

module.exports = {
    save,
    remove,
    update
}
