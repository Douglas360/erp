import { forwardRef } from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useAuth } from "../../context/useAuth";
import { IMaskInput } from "react-imask";
import { ListCompany } from "./listCompany";
import { Loader } from "../../components/Loader";

export const Company = ({ data }) => {
    const checkoutSchema = yup.object().shape({
        nm_empr: yup.string().required("obrigatorio"),
        cnpj: yup.string().required("obrigatorio"),
        telefone: yup.string().required("obrigatorio"),
        endereco: yup.string().required("obrigatorio"),

    });
  
    const initialValues = {
        nm_empr: data ? data.nm_empr : "",
        cnpj: "",
        telefone: "",
        endereco: "",

    };

    const { loadingRegister, createCompany } = useAuth()
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleFormSubmit = (values) => {
        createCompany(values)
    };

    const PhoneMaskCustom = forwardRef(function TextMaskCustom(props, ref) {
        const { onChange, ...other } = props;
        return (
            <IMaskInput
                {...other}
                mask="(#0) 00000-0000"
                definitions={{
                    '#': /[0-9]/,
                }}
                inputRef={ref}
                onAccept={(value) => onChange({ target: { name: props.name, value } })}
                overwrite
            />
        );
    });
    const CnpjMaskCustom = forwardRef(function TextMaskCustom(props, ref) {
        const { onChange, ...other } = props;
        return (
            <IMaskInput
                {...other}
                mask="#0.000.000/0000-00"
                definitions={{
                    '#': /[1-9]/,
                }}
                inputRef={ref}
                onAccept={(value) => onChange({ target: { name: props.name, value } })}
                overwrite
            />
        );
    });

    return (

        <Box m="20px">
            <Header title="CADASTRAR EMPRESA" subtitle="Formulario para cadastro de empresa" />

            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={checkoutSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            sx={{
                                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                            }}
                        >
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Razão social"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.nm_empr}
                                name="nm_empr"
                                error={!!touched.nm_empr && !!errors.nm_empr}
                                helperText={touched.nm_empr && errors.nm_empr}
                                sx={{ gridColumn: "span 3" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="CNPJ"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.cnpj}
                                name="cnpj"
                                error={!!touched.cnpj && !!errors.cnpj}
                                helperText={touched.cnpj && errors.cnpj}
                                sx={{ gridColumn: "span 1" }}
                                InputProps={{
                                    inputComponent: CnpjMaskCustom,
                                }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Telefone"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.telefone}
                                name="telefone"
                                error={!!touched.telefone && !!errors.telefone}
                                helperText={touched.telefone && errors.telefone}
                                sx={{ gridColumn: "span 1" }}
                                InputProps={{
                                    inputComponent: PhoneMaskCustom,
                                }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Endereço"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.endereco}
                                name="endereco"
                                error={!!touched.endereco && !!errors.endereco}
                                helperText={touched.endereco && errors.endereco}
                                sx={{ gridColumn: "span 3" }}
                            />

                        </Box>
                        <Box display="flex" mt="20px">
                            <Button type="submit" color="secondary" variant="contained">
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
            <Box marginTop="10px">
                {!loadingRegister &&
                    <Loader />}
                <ListCompany />

            </Box>
        </Box>
    )

}

