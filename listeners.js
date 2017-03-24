module.exports = {
    chatOnMessage: message => {
        console.log(message);
    },

    chatOnPrepare: () => {
        console.log('Готоволюсь к ответу');
    },

    chatOnClose: chat => {
        console.log(`Чат ${chat} закрылся :(`);
    }
}