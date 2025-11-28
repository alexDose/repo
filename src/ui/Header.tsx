import {useEffect, useEffectEvent, useState} from 'react';

type User = {
    id: number
    name: string
    age: number
    email: string
    avatar?: string
}

export const Header = () => {

    const users: Array<User> = [
        {
            id: 1,
            name: "John",
            age: 32,
            email: "john@gmail.com",
            avatar: "https://tinyurl.com/4ez2s7mt",
        },
        {
            id: 2,
            name: "Alice",
            age: 17,
            email: "alice@yahoo.com",
            avatar: "https://tinyurl.com/ynyx9nhu",
        },
        {id: 3, name: "Mike", age: 44, email: "mike@hotmail.com"},
        {
            id: 4,
            name: "Sarah",
            age: 29,
            email: "sarah@gmail.com",
            avatar: "https://tinyurl.com/yyktspmh",
        },
    ]
    const copy = Object.assign({}, users[0])
    console.log(copy)

    const defaultAvatar = 'https://placehold.co/128?text=no+photo'

    const [weight, setWeight] = useState<number>(100)

    const handleFeedHealthyFood = () => {
        if (weight < 200) {
            setWeight(weight + 20)
        }
    }
    const handleFeedJunkFood = () => {
        if (weight > 20) {
            setWeight(weight - 20)
        }
    }

    return (
        <div style={{display: 'flex', gap: '30px'}}>
            <Counter/>
            <TogglePage/>
            {users.map(user => <User key={user.id} user={user} defaultAvatar={defaultAvatar}/>)}
            <div>
                <h1>Покорми слона</h1>
                <button onClick={handleFeedHealthyFood}>Кормить слона полезной едой 🥬🍉🍌</button>
                <br/>
                <button onClick={handleFeedJunkFood}>Кормить слона вредной едой 🍔🍬🍕</button>
                {weight === 200
                    ? <Congratulations setWeight={setWeight}/>
                    : weight === 20
                        ? <GameOver setWeight={setWeight}/>
                        : <div style={{fontSize: `${weight / 2}px`}}>🐘</div>}
            </div>
        </div>
    )
}

export const Counter = () => {
    const {count, res, setStepInc, setStepToDec} = useCounter(0,1)

    return <>
        <h2>{count}</h2>
        <button onClick={setStepInc}>inc</button>
        <button onClick={setStepToDec}>dec</button>
        <button onClick={res}>reset</button>
    </>
}

const useCounter = (startValue = 0, startStep: number = 1, autoResetTime: number = 5) => {
    const [count, setCount] = useState(startValue)
    const [step, setStep] = useState(startStep)

    const changeStepCount = useEffectEvent(() => {
        setCount(count + step)
    })
    const resetCount = useEffectEvent(() => {
        setCount(startValue)
    })

    useEffect(() => {
        const intervalId = setInterval(() => {
            changeStepCount()
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            resetCount()
        }, autoResetTime * 1000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [autoResetTime])

    const inc = () => {
        setCount(count + step)
    }
    const dec = () => {
        setCount(count - step)
    }
    const res = () => {
        setCount(startValue)
        setStep(0)
    }
    const setStepInc = () => {
        // alert('Установить шаг +1')
        setStep(step + 1)
    }
    const setStepToDec = () => {
        // alert('Установить шаг +1')
        setStep(step - 1)
    }

    return {count, inc, dec, res, setStepInc, setStepToDec}
}
const LightSwitch = () => {
    const {isOn, toggle} = useToggle()

    return (
        <div>
            <h2>{isOn ? "💡 Свет включен" : "🌙 Свет выключен"}</h2>
            <button onClick={toggle}>Переключить свет</button>
        </div>
    )
}
const NotificationSwitch = () => {
    const {isOn, setIsOn, toggle, reset} = useToggle(true)

    return (
        <div>
            <h2>{isOn ? "🔔 Уведомления включены" : "🔕 Уведомления выключены"}</h2>
            <button onClick={toggle}>Переключить</button>
            <button onClick={() => setIsOn(true)}>on</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}
const VisibilityToggle = () => {
    const {isOn, setIsOn} = useToggle()

    return (
        <div>
            <h2>{isOn && "🎉 Это секретное сообщение!"}</h2>
            <button onClick={() => setIsOn(true)}>show</button>
            <button onClick={() => setIsOn(false)}>hide</button>
        </div>
    )
}
const TitleEditor = () => {
    const {text, setText, clear, toUpperCase, toLowerCase} = useText("Заголовок статьи")

    return (
        <div>
            <h2>{text}</h2>
            <button onClick={toUpperCase}>ВЕРХНИЙ РЕГИСТР</button>
            <button onClick={toLowerCase}>нижний регистр</button>
            <button onClick={() => setText('Новый заголовок')}>Изменить на</button>
            <button onClick={clear}>Очистить</button>
        </div>
    )
}
const GreetingCard = () => {
    const {text, setText, clear, toUpperCase, toLowerCase} = useText("Привет!")

    return (
        <div>
            <div>"💬 {text}"</div>
            <button onClick={toUpperCase}>ГРОМКО</button>
            <button onClick={toLowerCase}>тихо</button>
            <button onClick={() => setText('Добро пожаловать!')}>Сказать 'Добро пожаловать!'</button>
            <button onClick={clear}>Молчать</button>
        </div>
    )
}

const useToggle = (initialState: boolean = false) => {
    const [isOn, setIsOn] = useState(initialState)

    const toggle = () => {
        setIsOn(!isOn)
    }
    const reset = () => {
        setIsOn(false)
    }
    return {isOn, setIsOn, toggle, reset}
}
const useText = (initialState: string = '') => {
    const [text, setText] = useState(initialState)

    const clear = () => {
        setText('')
    }
    const toUpperCase = () => {
        setText(text.toUpperCase())
    }
    const toLowerCase = () => {
        setText(text.toLowerCase())
    }

    return {text, setText, clear, toUpperCase, toLowerCase}
}

const TogglePage = () => {
    return (
        <div>
            <LightSwitch/>
            <VisibilityToggle/>
            <NotificationSwitch/>
            <TitleEditor/>
            <GreetingCard/>
        </div>
    )
}
const Congratulations = ({setWeight}: { setWeight: (value: number) => void }) => {
    return <div>
        <div>🎉 Поздравляю! Твой слон наелся здоровой пищи и с улыбкой побежал играть с другими слонами🎉</div>
        <div style={{fontSize: "200px"}}>😊</div>
        <button onClick={() => setWeight(100)}>Давай сыграем еще раз</button>
    </div>
}
const GameOver = ({setWeight}: { setWeight: (value: number) => void }) => {
    return <div>
        <div>"У твоего слоника заболел живот и вместо того чтобы играть со своими друзьями он пошел к врачу. В следующий
            раз корми слона правильной пищей, чтобы слоник был здоров"
        </div>
        <div style={{fontSize: "200px"}}>🥲</div>
        <button onClick={() => setWeight(100)}>Давай сыграем еще раз</button>
    </div>
}

const User = ({user, defaultAvatar}: { user: User, defaultAvatar: string }) => {
    const [inCart, setInCart] = useState(false)

    return <div style={{padding: 20, width: '200px', border: '2px solid black'}}>
        <img style={{padding: '20px'}} src={user.avatar ? user.avatar : defaultAvatar}/>
        <div>name: {user.name}</div>
        <div>age: {user.age < 18 ? `🔞 ${user.age}` : user.age}</div>
        <div>email: {user.email}</div>
        <button disabled={inCart} onClick={() => {
            setInCart(true)
            alert('Product added in cart')
        }}
                style={{backgroundColor: inCart ? 'yellow' : ''}}>{inCart ? 'Product in cart' : 'Add to cart'}</button>
    </div>
}
