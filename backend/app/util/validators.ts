interface errorInput {
    name?: string,
    email?: string,
    password?: string,
    username? : string,
    include?: string,
    content? : string
}
export const validateRegister = (name: string,email:string,password: string,username?: string) => {
    const errors : errorInput= {}
    if(name.trim() == '' ){
        errors.name = 'Nama Harus Di isi';
    }
  if(email.trim() ==  '' ){
    errors.email = 'Email tidak boleh kosong';
 }else{
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!email.match(regEx)) {
        errors.email = 'Gunakan format email yang benar';
    }
 }
 if(password.trim() == ''){
    errors.password = 'Password Wajib Di isi'
 }
 if(username.trim() == '') {
    errors.username = "Password Tidak Sama Dengan Confirm Password"

 }


  return {
    errors,
    valid: Object.keys(errors).length < 1 
}
};

export const validateLogin = (email:string,password: string) => {
    const errors : errorInput= {}
    if(email.trim() === ''){
        errors.email = 'Email Tidak Boleh Kosong';

    }

    if(password.trim() === ''){
        errors.password = 'Password Tidak Boleh Kosong';

    }

 
  return {
    errors,
    valid: Object.keys(errors).length < 1 
}
};



export const validateTimeLinePost = (content?:string) => {
    const errors : errorInput= {}
    if(content.trim() === ''){
        errors.content = 'Panjang Pengumuman / Postingan Wajib Di isi';

    }


 
  return {
    errors,
    valid: Object.keys(errors).length < 1 
}
};
