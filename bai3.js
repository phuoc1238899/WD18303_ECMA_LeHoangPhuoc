const fs = require('fs');
const axios = require('axios');

(async () => {
    try {
        const data = await new Promise((resolve, reject) => {
            fs.readFile('.data.json', { encoding: 'utf8' }, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });

        console.log('Data loaded from disk:', data);

        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        const responseData = response.data;
        console.log('Data downloaded from URL:', responseData);
    } catch (error) {
        console.error('An error occurred:', error);
    }
})();
