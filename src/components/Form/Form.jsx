import { Link, useLocation } from "react-router-dom";
import "./Form.scss";

function LoginForm() {
    const location = useLocation().pathname;
    const isSingUp = location === '/signup';

    const error = document.querySelectorAll('.form__error');
    const email = document.querySelector('.form__login');
    const password = document.querySelector('.form__password');

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    
    document.addEventListener('submit', e => {
        e.preventDefault();

        if (email.value === '') {
            error[0].style.visibility = 'visible';
        }

        else if (validateEmail(email.value) === false){

            error[0].style.visibility = 'visible';
            error[0].textContent = 'Email невалидный';
        }
        
        else if (password.value === '') {
            error[1].style.visibility = 'visible';
        }
        
        else if (password.value.length < 8) {
            error[1].style.visibility = 'visible';
            error[1].textContent = 'Пароль должен содержать как минимум 8 символов'
        }
        
        else {
            e.target.reset();
            error[0].style.visibility = 'hidden';
            error[1].style.visibility = 'hidden';
        }
    });

    return (
        <form className="form">
            <Link to={ isSingUp ? '/signin' : '/signup'}>
                <p className="form__link">{isSingUp ? 'Авторизоваться' : 'Зарегистрироваться'}</p>
            </Link> 
            <h1 className="form__title">{isSingUp ? 'Регистрация' : 'Вход'}</h1>
            <input
                className="form__login"
                type="text"
                // required
                placeholder="Логин"
            />
            <span className="form__error">Поле не должно быть пустым</span>
            <input
                className="form__password"
                type="password"
                // required
                placeholder="Пароль"
            />
            <span className="form__error">Поле не должно быть пустым</span>
            {isSingUp && <div className="form__checkbox">
                <div class="pretty p-default p-round p-smooth">
                    <input type="checkbox" />
                    <div class="state p-primary">
                        <label className="form__checkbox-description">Я согласен получать обновления на почту</label>
                    </div>
                </div>
            </div>}
            {isSingUp &&<span className="form__error">Логин или пароль неверен</span>}

            <Link to='/'>
                <button className="form__button" type="submit">
                    Войти
                </button>
            </Link>
        </form>
    );
}

export default LoginForm;
