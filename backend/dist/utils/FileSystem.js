var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fs from 'fs/promises';
import path from 'path';
const DATA_FILE = path.resolve(__dirname, '../../data/todos.json');
export class FileSystem {
    static readData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield fs.readFile(DATA_FILE, 'utf-8');
                return JSON.parse(data || '[]');
            }
            catch (err) {
                if (err.code === 'ENOENT') {
                    yield FileSystem.writeData([]);
                    return [];
                }
                throw err;
            }
        });
    }
    static writeData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
        });
    }
}
