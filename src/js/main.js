const combinationsGeneration = (lengthElem, lengthArray) => {
    const arr = [];
    let arrIndexes = [];
    for (let i = 0; i < lengthElem; i += 1) {
        arr.push(i);
    }
    arr.push(lengthArray);
    arr.push(0);
    arrIndexes = [...arrIndexes, [...arr].splice(0, lengthElem)];
    let j = 0;
    while (true) {
        for (let i = 0; i < lengthArray; i += 1) {
            j = i;
            if (arr[i] + 1 === arr[i + 1]) {
                arr[i] = i;
            }
            else break;
        }
        if (j < lengthElem) {
            arr[j] += 1;
        }
        else break;
        arrIndexes = [...arrIndexes, [...arr].splice(0, lengthElem)];
    }
    return arrIndexes;
}

const chooseOptimalDistance = (t, k, ls) => {
    let arrDistanceCombinations;
    if (ls.length < k) return null;
    if (ls.length === k) {
        arrDistanceCombinations = [ls];
    }
    if (ls.length > k) {
       arrDistanceCombinations = combinationsGeneration(k, ls.length).map(arr => arr.map(elem => ls[elem]));
    }

    const arrDistances = arrDistanceCombinations.map(elem => elem.reduce((acc, n) => acc += n)).filter(elem => elem < t);
    const maxDistance = !!arrDistances.length ? Math.max(...arrDistances) : null;
    return maxDistance;
}

console.log(chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61])); //173
console.log(chooseOptimalDistance(163, 3, [50])); // null
