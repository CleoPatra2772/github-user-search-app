const indexedDB = 
window.indexedDB ||
window.mozIndexedDB;


const request = indexedDB.open('history',1);
request.onerror = function (event) {
    console.error('An error occurred');
    console.log(event);
}

request.onupgradeneeded = function () {
    const db = request.result;
    const store = db.createObjectStore("user", { keyPath: "id" });
    store.createIndex("user1", ['username'], { unique: false});
    store.createIndex("user2", ['user'], {
        unique:false,
    });
}

request.onsuccess = function () {
    const db = request.result;
    const transaction = db.transaction("user", "readwrite");

    const store = transaction.objectStore('users');
    const colorIndex = store.index('user1');

    store.put({id: 1, user: "cleo"});
    store.put({id: 2, user: "dan"});
    
    const idQuery = store.get(1);

    idQuery.onsuccess = function() {
        console.log('idQuery', idQuery.result);
    };

    transaction.oncomplete = function() {
        db.close();
    };

}