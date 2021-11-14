// Refer : https://velog.io/@junghyeonsu/React-useForm
import { useState, useEffect, useCallback } from 'react';

export default function useForm({ initState, onSubmit, validate }) {
    const [formData, setFormData] = useState(initState);
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = useCallback(({ target }) => {
        const { name, value } = target;
        setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    }, []);

    const handleSubmit = useCallback(
        e => {
            e.preventDefault();
            setIsLoading(true);
            setErrors(validate(formData));
        },
        [formData],
    );

    useEffect(async () => {
        if (isLoading) {
            if (Object.keys(errors).length === 0 && onSubmit) {
                await onSubmit(formData);
            }
            setIsLoading(false);
        }
    }, [errors, isLoading]);

    return {
        formData,
        errors,
        isLoading,
        handleChange,
        handleSubmit,
    };
}
