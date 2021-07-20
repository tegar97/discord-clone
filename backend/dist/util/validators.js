"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTimeLinePost = exports.validateLogin = exports.validateRegister = void 0;
const validateRegister = (name, email, password, username) => {
    const errors = {};
    if (name.trim() == '') {
        errors.name = 'Nama Harus Di isi';
    }
    if (email.trim() == '') {
        errors.email = 'Email tidak boleh kosong';
    }
    else {
        const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!email.match(regEx)) {
            errors.email = 'Gunakan format email yang benar';
        }
    }
    if (password.trim() == '') {
        errors.password = 'Password Wajib Di isi';
    }
    if (username.trim() == '') {
        errors.username = "Password Tidak Sama Dengan Confirm Password";
    }
    return {
        errors,
        valid: Object.keys(errors).length < 1
    };
};
exports.validateRegister = validateRegister;
const validateLogin = (email, password) => {
    const errors = {};
    if (email.trim() === '') {
        errors.email = 'Email Tidak Boleh Kosong';
    }
    if (password.trim() === '') {
        errors.password = 'Password Tidak Boleh Kosong';
    }
    return {
        errors,
        valid: Object.keys(errors).length < 1
    };
};
exports.validateLogin = validateLogin;
const validateTimeLinePost = (content) => {
    const errors = {};
    if (content.trim() === '') {
        errors.content = 'Panjang Pengumuman / Postingan Wajib Di isi';
    }
    return {
        errors,
        valid: Object.keys(errors).length < 1
    };
};
exports.validateTimeLinePost = validateTimeLinePost;
//# sourceMappingURL=validators.js.map