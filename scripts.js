const obj = {
    name: 'Alex',
    age: 33,
    adress: {
        country: 'UA',
        city: 'Dnipro',
        marks: [],
    },
};

const objCopy = copy(obj);

function copy(obj) {
    if (obj === null) return null;

    let clone = Object.assign({}, obj);

    Object.keys(clone).forEach(key => {
        if (typeof obj[key] === "object") return clone[key] = copy(clone[key]);
        else return clone[key];
    });

    if (Array.isArray(obj) && obj.length > 0) {
        return (clone.length = obj.length) && Array.from(clone);
    } else {
        if (Array.isArray(obj)) {
            return Array.from(obj)
        } else {
            return clone;
        }
    }
}


console.log(obj);
console.log(objCopy);

objCopy.adress.city = 'Kyiv';
objCopy.adress.marks[0] = 4;