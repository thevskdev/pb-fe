import { useFormik } from 'formik';

const useAuthFormHook = (validateSubmit = () => { }, formFields = [], formikOptions = {}) => {
    const createInitValue = (fields) => {
        let initValues = {};
        fields?.forEach((field) => {
            initValues = { ...initValues, [ field.name ]: field?.initialValue || '' };
        });

        return initValues;
    };

    const formikProps = useFormik({
        initialValues: createInitValue(formFields),
        onSubmit: validateSubmit,
        enableReinitialize: true,
        ...formikOptions,
    });
    const {
        handleSubmit, errors, values, touched, handleBlur, handleChange,
    } = formikProps;
    return {
        handleSubmit, errors, values, touched, handleBlur, handleChange,
    };
};

export default useAuthFormHook;
