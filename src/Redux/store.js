import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";


export let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'my name Alexander', likes: 503},
                {id: 2, message: 'Now i am fucked up in army Belarus', likes: 491},
                {id: 3, message: 'All boys who live here fuck my ass every day', likes: 65987},
                {id: 4, message: 'i Very like it', likes: 32006}
            ],
            newPostText: 'alexander burban'
        },
        messagesPage: {
            messagesData: [
                {
                    id: 1,
                    name: 'Ангелина Фокина',
                    message: 'Я тоби любкаю',
                    img: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/VG7RCwdnKkCVd-wEqMv5hQRzcrGjWKwG7tPWTw9tY1WsHzczvGR8jFv8sB6N0nLs5PeG7zr6bqoQK_mHugWoe71Y.jpg?size=100x100&quality=96&crop=0,0,1932,1932&ava=1',
                    myMessage: 'I love you too'
                },
            ],
            newMessageText: 'Your message',
            dialogsData: [
                {
                    id: 1,
                    name: 'Ангелина Фокина',
                    text: 'Я тоби любкаю',
                    img: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/VG7RCwdnKkCVd-wEqMv5hQRzcrGjWKwG7tPWTw9tY1WsHzczvGR8jFv8sB6N0nLs5PeG7zr6bqoQK_mHugWoe71Y.jpg?size=100x100&quality=96&crop=0,0,1932,1932&ava=1'
                },
                {
                    id: 2,
                    name: 'Антон Сидоренко',
                    text: 'Ну как там с деньгами',
                    img: 'https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig2/gcqfWHaRYdI7MR9BEwD1cAoKzd3GRdPrsd6K_g-QL1pnYA5rZSynWapCjP0mAV6aqOZqMiWvxGw6_h1IniZj7QC_.jpg?size=100x100&quality=95&crop=155,212,642,642&ava=1'
                },
                {
                    id: 3,
                    name: 'Александр Бурба',
                    text: 'Хачу макбук аирподсы и кукан sdfjdahfhadhfkjasdhfkjhasdkjfh jksadhfkjhau',
                    img: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/Vlr6deu7Va_p0xWk37gjskn7Po2GNST75kwrksiAK-VAy_Yk3VtCY7SJt_YzsCKsfzwcb_fKYcPFvTCVeleJMK_Q.jpg?size=100x100&quality=96&crop=134,135,539,539&ava=1'
                },
                {
                    id: 4,
                    name: 'Сергей Верьбол',
                    text: 'Хочу есть',
                    img: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/eO0FQVFeYDrILZaoGMv-ZHiHwI7c9lzVwUXDHIvSvaEMiQA9ZL-pyx9LFNpBF7mHRSCgSySq.jpg?size=100x100&quality=96&crop=0,106,1618,1618&ava=1'
                },
                {
                    id: 5,
                    name: 'Александр Белый',
                    text: 'Как тебе мой новый ффильм??',
                    img: 'https://vzvuke.net/style/performers/3cef9e289b15607b3727069901710b3b_large.jpg'
                },
                {
                    id: 6,
                    name: 'Толстый',
                    text: 'Буээээээ я обосрался',
                    img: 'https://pbs.twimg.com/profile_images/681609206185631744/Rsda1_C2_400x400.jpg'
                },
                {
                    id: 7,
                    name: 'Барыга из Москывы',
                    text: 'Стафф топовый нада??',
                    img: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/Vlr6deu7Va_p0xWk37gjskn7Po2GNST75kwrksiAK-VAy_Yk3VtCY7SJt_YzsCKsfzwcb_fKYcPFvTCVeleJMK_Q.jpg?size=100x100&quality=96&crop=134,135,539,539&ava=1'
                },
                {
                    id: 8,
                    name: 'Павел Дуров',
                    text: 'Ебать у тебя соц сеть не отнимай работу',
                    img: 'https://pbs.twimg.com/profile_images/3603712967/ad5163d819b183ca31063deb19bae33f.jpeg'
                },
                {
                    id: 9,
                    name: 'Юрий Дудь',
                    text: 'ХЗапиши со мной интрвью',
                    img: 'https://c.tcdn.co/353/ce4/353ce4a2-94b3-11ea-bb05-8600002b171f/channel256.png'
                },
                {
                    id: 10,
                    name: 'Игорь Крутой',
                    text: 'Я написал новую песню чекни',
                    img: 'https://lh3.googleusercontent.com/proxy/WlTeGIi0raQcRRNe6GOHu--3FUr5BvTprrFB5rdltzAf4MOvPgTbePYCVBAca1wdsJP84ZVouvFfcn774KkZv_OuxHbdJAlDa_8_vqCz6MKkUFdoUnfTAD4SR6EH4Q'
                }
            ]

        }

    },
    getState() {
        return this._state;
    },
    _notifySubscriber() {
        console.log('state changed')
    },
    subscribe(observer) {
        this._notifySubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);

        this._notifySubscriber(this._state);
    }
}


window.store = store;
export default store;

