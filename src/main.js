"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_service_1 = require("./fs.service");
const app = (0, express_1.default)();
app.use(express_1.default.json()); // щоб база даних розуміла об'єкт який приходить в req
app.use(express_1.default.urlencoded({ extended: true })); // щоб база даних розуміла об'єкт який приходить в req
app.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield fs_service_1.fsService.read();
        res.json(users);
    }
    catch (e) {
        res.status(500).json(e.message);
    }
}));
app.post('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        if (!name || name.length < 3) {
            return res.status(400).json("Name is required and should be at least 3 characters!");
        }
        if (!email || !email.includes('@')) {
            return res.status(400).json("Email is required and should be valid!");
        }
        if (!password || password.length < 6) {
            return res.status(400).json("Password is required and should be at least 6 characters!");
        }
        const users = yield fs_service_1.fsService.read();
        const index = users.findIndex((user) => user.email === email);
        if (index !== -1) {
            return res.status(409).json('User with this email already exists!');
        }
        const newUser = {
            id: users[users.length - 1].id + 1,
            name,
            email,
            password
        };
        users.push(newUser);
        yield fs_service_1.fsService.write(users);
        res.status(201).json(newUser);
    }
    catch (e) {
        res.status(500).json(e.message);
    }
}));
app.get('/users/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = Number(req.params.userId);
        const users = yield fs_service_1.fsService.read();
        const user = users.find((user) => user.id === userId);
        if (!user) {
            return res.status(404).json('User not found!');
        }
        res.json(user);
    }
    catch (e) {
        res.status(500).json(e.message);
    }
}));
app.put('/users/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = Number(req.params.userId);
        const { name, email, password } = req.body;
        const users = yield fs_service_1.fsService.read();
        const user = users.find((user) => user.id === userId);
        if (!user) {
            return res.status(404).json('User not found');
        }
        if (name)
            user.name = name;
        if (email)
            user.email = email;
        if (password)
            user.password = password;
        yield fs_service_1.fsService.write(users);
        res.status(201).json(user);
    }
    catch (e) {
        res.status(400).json(e.message);
    }
}));
app.delete('/users/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = Number(req.params.userId);
        const users = yield fs_service_1.fsService.read();
        const index = users.findIndex((user) => user.id === userId);
        if (index === -1) {
            return res.status(404).json('User not found');
        }
        users.splice(index, 1);
        yield fs_service_1.fsService.write(users);
        res.sendStatus(204);
    }
    catch (e) {
        res.status(500).json(e.message);
    }
}));
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
