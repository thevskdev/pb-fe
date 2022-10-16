import { useFormik } from 'formik';

const useFormikFormHook = (validateSubmit = () => { }, initialValues, validationSchema) => {
    const formikProps = useFormik({
        initialValues: { ...initialValues },
        validationSchema,
        onSubmit: (values) => {
            const formData = {
                data: {
                    ...values,
                },
            };
            validateSubmit(formData);
        },
        enableReinitialize: true,
    });
    const {
        errors, values, touched, handleBlur, handleChange, handleSubmit,
        setFieldValue,
    } = formikProps;
    return {
        handleSubmit, errors, values, touched, handleBlur, handleChange, setFieldValue,
    };
};

export default useFormikFormHook;
