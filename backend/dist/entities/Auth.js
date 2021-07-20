"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModel = exports.Auth = exports.friend_request = void 0;
const type_graphql_1 = require("type-graphql");
const typegoose_1 = require("@typegoose/typegoose");
let friend_request = class friend_request {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    typegoose_1.prop(),
    __metadata("design:type", String)
], friend_request.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], friend_request.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    type_graphql_1.Field(),
    __metadata("design:type", String)
], friend_request.prototype, "username", void 0);
friend_request = __decorate([
    type_graphql_1.ObjectType({ description: "The Friend Request Info" })
], friend_request);
exports.friend_request = friend_request;
let Auth = class Auth {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    __metadata("design:type", String)
], Auth.prototype, "_id", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], Auth.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], Auth.prototype, "token", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ default: 'photo.png' }),
    __metadata("design:type", String)
], Auth.prototype, "photo", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], Auth.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], Auth.prototype, "username", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], Auth.prototype, "password", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ required: true, default: new Date().toISOString() }),
    __metadata("design:type", String)
], Auth.prototype, "createdAt", void 0);
__decorate([
    type_graphql_1.Field(type => [friend_request], { nullable: true }),
    typegoose_1.prop({ type: () => [friend_request] }),
    __metadata("design:type", Array)
], Auth.prototype, "friend_request", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", Date)
], Auth.prototype, "passwordChangeAt", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], Auth.prototype, "passwordResetToken", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], Auth.prototype, "passwordResetExpire", void 0);
Auth = __decorate([
    type_graphql_1.ObjectType({ description: 'auth user model' })
], Auth);
exports.Auth = Auth;
exports.AuthModel = typegoose_1.getModelForClass(Auth);
//# sourceMappingURL=Auth.js.map