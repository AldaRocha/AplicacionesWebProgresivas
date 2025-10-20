import { useState, useCallback } from "react";

const useArray = (initialArray = []) => {
    const [value, setValue] = useState(initialArray);

    const add = useCallback((item) => {
        setValue(currentArray => [...currentArray, item]);
    }, []);

    const removeById = useCallback((id) => {
        setValue(currentArray => currentArray.filter(item => item.id !== id));
    }, []);

    const clear = useCallback(() => {
        setValue([]);
    }, []);

    const todoActions = {
        add,
        removeById,
        clear
    };

    return [value, todoActions];
};

export default useArray;