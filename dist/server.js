"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./src/app"));
const PORT = process.env.PORT || 4200;
app_1.default.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
