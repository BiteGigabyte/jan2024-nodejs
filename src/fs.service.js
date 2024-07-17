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
exports.fsService = void 0;
const promises_1 = __importDefault(require("node:fs/promises"));
const node_path_1 = __importDefault(require("node:path"));
const pathToDB = node_path_1.default.join(process.cwd(), 'db.json');
class FsService {
    read() {
        return __awaiter(this, void 0, void 0, function* () {
            const json = yield promises_1.default.readFile(pathToDB, 'utf-8');
            return json ? JSON.parse(json) : {};
        });
    }
    write(users) {
        return __awaiter(this, void 0, void 0, function* () {
            yield promises_1.default.writeFile(pathToDB, JSON.stringify(users));
        });
    }
}
exports.fsService = new FsService();
