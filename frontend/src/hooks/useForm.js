// Refer : https://velog.io/@junghyeonsu/React-useForm

import { useState, useEffect } from 'react';

export default function useForm({ initState, onSubmit, validate }) {
    const [data, setData] = useState(initState);
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setIsLoading(true);
        setErrors(validate(data));
    };

    useEffect(() => {
        if (isLoading) {
            if (Object.keys(errors).length === 0) {
                onSubmit(data);
            }
            setIsLoading(false);
        }
    }, [errors, isLoading]);

    return {
        data,
        errors,
        isLoading,
        handleChange,
        handleSubmit,
    };
}
