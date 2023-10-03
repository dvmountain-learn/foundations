
// getHouses, deleteHouse, createHouse, updateHouse

const houseDatabase = []

function getHouses() {
    return '/api/houses'
}

function createHouse() {
     return '/api/createHouse'
}

function updateHouse() {
    return '/api/updateHouse/:id'
}

function deleteHouse() {
    return '/api/deleteHouse/:id'
}