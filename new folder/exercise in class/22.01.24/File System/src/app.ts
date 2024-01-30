import fs from 'fs';
import { promisify } from 'util';
import fsPromises from 'fs/promises';

fs.writeFileSync('./data.txt','hello file system',);
const data = fs.readFileSync('./data.txt', 'utf-8');
console.log(data);

const writeFilePromise = promisify(fs.writeFile);
const readFilePromise = promisify(fs.readFile);

(async () => {
    await writeFilePromise('./data.txt', 'hello from promise')
    const data = await readFilePromise('./data.txt','utf-8')
    console.log(`promised data:${data}`);
})();


(async () => {
    await fsPromises.writeFile('./data4.txt', 'hello from fsPromise')
    const data = await fsPromises.readFile('./data4.txt','utf-8')
    console.log(`promised data:${data}`);
})();



(async () => {
    try{
    await fsPromises.mkdir('./storage')
    }catch(err){

    }
    let data = '';
    for (let i = 0; i < 1000; i++) {
        if(i % 7 === 0){
            data += `${i},`;
        }
    }
    await fsPromises.writeFile('./storage/numbers.txt', data);

    const numbersStr = await fsPromises.readFile('./storage/numbers.txt', 'utf-8');
    const numbers = numbersStr.split(',').map(Number);
    console.log(numbers.length);
    console.log(numbers.splice(0,10));
})();

