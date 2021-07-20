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
const mongoose_1 = __importDefault(require("mongoose"));
const connectDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(process.env.MONGODB_URL);
    try {
        // mongodb+srv://tegar:tegar123xx@cluster0.xfdkb.mongodb.net/e-learning2?retryWrites=true&w=majority
        const conn = yield mongoose_1.default.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URL}/e-learning?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MONGO DB CONNECT: ${conn.connection.host} `);
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
});
exports.default = connectDatabase;
//# sourceMappingURL=server.js.map