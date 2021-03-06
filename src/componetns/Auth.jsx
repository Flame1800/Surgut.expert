import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { connect } from '../store/index'
import { toggleAuth } from '../actions/uiElements'

const mapStateToProps = (state) => {
    return { authModal: state.uiElements.authModal }
}

function Auth(props) {
    const [mode, setMode] = React.useState('reg')
    const { authModal, toggleAuth } = props

    if (!authModal) {
        return null
    }

    return (
        <>
            <Head>
                <title>Авторизация</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="auth">
                <div className="form">
                    <div className="back-btn" onClick={() => toggleAuth()} >
                        +
                        </div>
                    <div className="title">
                        {mode === 'reg' ? 'Регистрация' : 'Вход'}
                    </div>
                    {mode === 'reg' && <input type="text" className="input" placeholder='Логин' />}
                    <input type="phone" className="input" placeholder='Телефон' />
                    <input type="password" className="input" placeholder='Пароль' />
                    <Link href={`${process.env.BASE_URL}/person`} >
                        <div className="btn-reg" onClick={() => toggleAuth()}>
                            {mode === 'reg' ? 'Зарегистрироватся' : 'Войти'}
                        </div>
                    </Link>
                    {mode === 'reg' ?
                        <div className="btn-mode"
                            onClick={() => setMode('log')} >
                            Уже зарегистрованны?
                            </div>
                        :
                        <div className="btn-mode"
                            onClick={() => setMode('reg')} >
                            Не зарегистрованны?
                            </div>
                    }
                </div>
            </div>
        </>
    )
}

export default connect(mapStateToProps, { toggleAuth })(Auth)