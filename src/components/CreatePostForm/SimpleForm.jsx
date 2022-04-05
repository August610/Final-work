import React, {useState} from 'react';
import "./styles.css";
export function SimpleForm({addContacts}) {
    const [contactInfo, setContactInfo] = useState({
        name: "",
        lastName: "",
        phoneNumber: ""
    })

    function handleChange(event) {
        setContactInfo({...contactInfo, [event.target.name]: event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault();
        addContacts(contactInfo)
        setContactInfo({
            name: "",
            lastName: "",
            phoneNumber: ""
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Введите данные</h3>
            <input 
                type="text"
                name="name"
                placeholder="Введите имя"
                value={contactInfo.name}
                onChange={handleChange}
             />
             <input 
                type="text"
                name="lastName"
                placeholder="Введите фамилию"
                value={contactInfo.lastName}
                onChange={handleChange}
             />
             <input 
                type="text"
                name="phoneNumber"
                placeholder="Введите телефон"
                value={contactInfo.phoneNumber}
                onChange={handleChange}
             />
             <button>Отправить</button>
        </form>
    )
}