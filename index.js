const inquirer = require('inquirer')
const prompList = [
    {
        // type: input, number, confirm, list, rawlist, expand, checkbox, password, editor
        type: 'input',
        message: '姓名',
        name: 'name',
    },{
        type: 'input',
        message: '手机号',
        name: 'phone',
        // 验证用户的输入
        validate: val => {
            if(val.match(/\d{11}/g)) {
                return true
            }
        }
    },{
        type: 'confirm',
        message: '是否参加本次活动',
        name: 'test',
        // 可以改变默认的前缀
        prefix: '前缀',
    },{
        type: 'confirm',
        message: '是否已了解本次活动的具体细节',
        name: 'notice',
        // 可以改变默认的后缀
        suffix: '后缀',
        // 根据某个问题的value决定该问题是否被询问
        when: answers => {
            return answers.test
        }
    },{
        type: 'list',
        message: '欢迎参加本次活动，请选择活动的类型',
        name: 'type',
        choices: [
            '爬山',
            '卡丁车',
            '密室逃脱',
            '打麻将'
        ],
    },{
        type: 'rawList',
        message: '请选择你爱玩的游戏',
        name: 'game',
        choices: [
            'a',
            'b',
            'LOL',
            'DOTA'
        ]
    },{
        type: 'expand',
        message: '请选择你喜欢的水果',
        name: 'fruit',
        choices: [
            {
                key: 'a',
                name: 'Apple',
                value: 'apple'
            },
            {
                key: 'b',
                name: '哈密瓜',
                value: 'cantaloupe'
            },
            {
                key: 'c',
                name: '西瓜',
                value: 'waterlemon'
            }
        ]
    },{
        type: 'checkbox',
        message: '请选择你喜欢的颜色',
        name: 'color',
        choices: [
            {
                name: 'red'
            },
            new inquirer.Separator(), // 自定义分隔符
            {
                name: 'green'
            },
            {
                name: 'yellow'
            }
        ]
    },{
        type: 'password',
        message: '请输入参加本次活动的暗号',
        name: 'pwd'
    }

]
inquirer.prompt(prompList).then(answers => {
    console.log(answers)
})