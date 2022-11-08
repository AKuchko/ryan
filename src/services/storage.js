const storage = localStorage 

const loadStorageItem = (key) => {
    return storage.getItem(key)
}

const saveStorageItem = (key, value) => {
    storage.setItem(key, value)
    return value
}

const deleteStorageItem = (key) => {
    storage.removeItem(key)
    return null
}

module.exports = { loadStorageItem, deleteStorageItem, saveStorageItem }