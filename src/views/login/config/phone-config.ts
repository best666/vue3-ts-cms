// 编写好规则
export const rules = {
  num: [
    {
      required: true,
      message: '请输入手机号~',
      trigger: 'blur'
    },
    {
      pattern:
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
      message: '手机号必须是11位数字~',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '请输入验证码~',
      trigger: 'blur'
    },
    {
      pattern: /\d{6}/,
      message: '验证码有六位哦~',
      trigger: 'blur'
    }
  ]
};
