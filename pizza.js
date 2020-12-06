const inquirer = require('inquirer')
const prompList = [
    {
        // type: input, number, confirm, list, rawlist, expand, checkbox, password, editor
        type: 'list',
        message: '请问您想吃什么类型的pizza',
        name: 'type',
        choices: [
            '榴莲',
            '奥尔良火腿',
            '五香牛肉',
            '和风照烧鸡'
        ],
    },{
        type: 'list',
        message: '请选择披萨的尺寸',
        name: 'size',
        choices: [
            '6',
            '8',
            '10',
            '12'
        ],
    },{
        type: 'confirm',
        message: '请问您有什么忌口吗？',
        name: 'notice',
    },{
        type: 'input',
        message: '请问您的忌口是？',
        name: 'noticeType',
        when: answers => {
            return answers.notice
        }
    },{
        type: 'confirm',
        message: '请问您需要饮品吗？',
        name: 'drink',
    },{
        type: 'list',
        message: '请问需要什么类型的饮品',
        name: 'drinkType',
        choices: [
            '鲜榨西瓜汁',
            '雪碧',
            '可乐',
            '酸梅汤'
        ],
        // 根据某个问题的value决定该问题是否被询问
        when: answers => {
            return answers.drink
        },
    }

]
inquirer.prompt(prompList).then(answers => {
    console.log(answers)
})