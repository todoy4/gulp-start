export const getStorage = (storageName) => {
    return JSON.parse(localStorage.getItem(storageName));
};

export const addToStorage = (data, storageName) => {
    let storageArr = [data];
    const storageData = JSON.parse(localStorage.getItem(storageName));

    if(storageData) {
        storageArr = [...storageData, ...storageArr];
        }    
    localStorage.setItem(storageName, JSON.stringify(storageArr));
};

export const removeFromStorage = (id, storageName) => {
    const storageData = JSON.parse(localStorage.getItem(storageName));

    if(!storageData) {
        return;
    }

    storageData.splice(storageData.map(el => el.id).indexOf(id), 1);

    if(!storageData.length) {
        localStorage.removeItem(storageName);
        return;
    }

    localStorage.setItem(storageName, JSON.stringify(storageData));
};


