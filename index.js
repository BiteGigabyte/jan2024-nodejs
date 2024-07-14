
const http = require('node:http');
const path = require('node:path');
// const rl = require('node:readline');
const rl = require('node:readline/promises');
const fscl = require('node:fs');
const fs = require('node:fs/promises');
const os = require('node:os');
const {emitter} = require('./emiter');

const foo = async () => {


//    // HTTP
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World\n 22222');
// });
// server.listen(3000);


//    // PATH
// console.log(__filename);
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.dirname(__filename));
// console.log(path.parse(__filename));
// console.log(path.normalize('C:/\\Users/\\yurii/\\IdeaProjects\\/jan2024-nodejs'));
// console.log(path.isAbsolute('C:\\Users\\yurii\\IdeaProjects\\jan2024-nodejs\n')); //глобальний рівень
// console.log(path.isAbsolute('.C:\\Users\\yurii\\IdeaProjects\\jan2024-nodejs\n')); //поточний рівень


    // // Readline
    // const rlInstance = rl.createInterface({
    //     input: process.stdin,
    //     output: process.stdout
    // })
    // // rlInstance.on('line', (input) => {
    // //     console.log('Enter your name:');
    // // })
    // const name = await rlInstance.question('Enter your name: ');
    // console.log(`Hello, ${name}!`);
    // const age = await rlInstance.question('Enter your age: ');
    // console.log(`You are ${age} years old!`);
    // process.exit(0);


    // FS stream
    const pathToFile = path.join(__dirname, 'some_dir', 'test.txt');
    await fs.writeFile(pathToFile, 'Hello, world!');
    const data = await fs.readFile(pathToFile, 'utf-8');
    console.log(data);
    // await fs.mkdir(path.join(__dirname, 'some_dir', 'new_dir'));
    await fs.appendFile(pathToFile, '\nHello World again!');
        // робота з папками
    await fs.mkdir(path.join(__dirname, 'some_dir', 'new_dir', 'new_dir2'), {recursive: true});
    // await fs.rmdir(path.join(__dirname, 'some_dir', 'new_dir', 'new_dir2'));
    await fs.writeFile(path.join(__dirname, 'some_dir', 'new_dir', 'new_dir2', 'test.txt'), 'Hello, world!')
    await fs.rm(path.join(__dirname, 'some_dir', 'new_dir'), {recursive: true});
    // await fs.unlink(path.join(__dirname, 'test.txt'));   //Видалення
    // await fs.rename(path.join(__dirname, 'some_dir', 'test.txt'), path.join(__dirname, 'test.txt'));  //Перенести файл
    // await fs.rename(path.join(__dirname, 'some_dir', 'test.txt'),path.join(__dirname, 'test222.txt'));  //Перенести файл і в цей момент змінити йому ім'я
    await fs.copyFile(path.join(__dirname, 'some_dir', 'test.txt'), path.join(__dirname, 'text222.txt')); //Метод копіювання
    const stat = await fs.stat(path.join(__dirname, 'some_dir', 'text222.txt')); //Перевірка чи це щось по шляху
    console.log(stat.isDirectory());
    console.log(stat.isFile());


    // FS stream
    const readStream = fscl.createReadStream(path.join(__dirname, 'big-file.png'));
    const writeStream = await fscl.createWriteStream(path.join(__dirname, 'big-file-copy.png'));

    // // // readStream.on('data', (chunk) => {
    // // //     console.log(chunk)
    // // // })
    // // readStream.on('data', (chunk) => {
    // //    console.log(chunk);
    // //    writeStream.write(chunk);
    // // })     // Копія файлів

    // // readStream.pipe(writeStream);   //Копія файлів



    //     // OS
    // console.log(os.arch());
    // console.log(os.cpus());
    // // console.log(os.machine());
    // console.log(os.hostname());
    // console.log(os.homedir());
    // console.log(os.freemem() / 1024 / 1024 / 1024);
    // console.log(os.totalmem() / 1024 / 1024 / 1024);
    //


    emitter.emit('test2', 'qwe', 'asd', 222);
    // emitter.emit('create_user', 'qwe', 'asd', 222);
    emitter.emit('test2', 'SSS', 'WWWW', 111);
    emitter.emit('create_user', {name: 'Maks', age: 20});
    emitter.emit('create_user', {name: 'Dima', age: 20});


};

void foo();


