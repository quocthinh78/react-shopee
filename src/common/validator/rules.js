export const rules = [
    {
        field: 'username',
        method: 'isEmpty',
        validWhen: false,
        message: 'The name field is required.',
    },
    {
        field: 'username',
        method: 'isLength',
        args: [{ min: 5 }],
        validWhen: true,
        message: 'Tên phải có ít nhất 5 kí tự',
    },
    {
        field: 'email',
        method: 'isEmpty',
        validWhen: false,
        message: 'Bạn phải nhập email',
    },
    {
        field: 'email',
        method: 'isEmail',
        validWhen: true,
        message: 'Email không hợp lệ',
    },
    {
        field: 'password',
        method: 'isEmpty',
        validWhen: false,
        message: 'Bạn phải nhập mật khẩu',
    },
    {
        field: 'password',
        method: 'isStrongPassword',
        validWhen: true,
        message: 'Mật khẩu không hợp lệ',
    },
    {
        field: 'checkpass',
        method: 'isEmpty',
        validWhen: false,
        message: 'Bạn phải nhập kiểm tra mật khẩu',
    },
];