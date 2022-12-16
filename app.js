const http = new EasyHttp; 

const data = {    
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1
}


// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(error => console.log(error)); 


// http.post('https://jsonplaceholder.typicode.com/posts', data)
// .then(data => console.log(data))
// .catch(error => console.log(error)); 

http.put('https://jsonplaceholder.typicode.com/users/5', data)
.then(data => console.log(data))
.catch(error => console.log(error)); 
