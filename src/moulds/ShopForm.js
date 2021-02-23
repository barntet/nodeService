const Yup = require('yup');

exports.createShopFormSchema = () =>
    Yup.object({
        name: Yup.string().required('店铺名不能为空').min(3, "店铺名至少3个字符").max(20, '店铺名不可超过20字')
    })