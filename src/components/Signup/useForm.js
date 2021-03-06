import {useState,useEffect} from 'react'

const useForm = () => {

    const [values, setValues] = useState({
        username: '',
        password: '',
        firstname: '',
        lastname: '',
    })
    const [errors, setErrors] = useState({})


    const handleChange = e => {
        const { name, value } = e.target
        setValues ({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
    };

    return {handleChange, values, handleSubmit}
}

export default useForm;