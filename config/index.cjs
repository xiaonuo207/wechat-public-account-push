/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx1075f4b29d49a50f',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'c7c75009a56a36c57997675730edc4a9',

  PROVINCE: '河北',
  CITY: '沧州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '兔兔媳妇',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oqrz96fyKzVaikCPDPXcGbG_AAZw',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'VXMqAnNmAmlFPTI9xXSw8RmqUf3H4gr7OrWHFz0YEMI',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '06-29',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '兔兔媳妇', year: '1999', date: '06-29',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '王宇刚', year: '1997', date: '03-14',
        },
        {
          type: '节日', name: '相识纪念日', year: '2019', date: '03-28',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2019-03-28' },
      
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'VXMqAnNmAmlFPTI9xXSw8RmqUf3H4gr7OrWHFz0YEMI',

  CALLBACK_USERS: [
    {
      name: '兔兔媳妇',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oqrz96fyKzVaikCPDPXcGbG_AAZw',
    }
  ],

}

module.exports = USER_CONFIG

