import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CADASTRAR COLABORADOR" subtitle="Cadastro de novo colaborador" />

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
              gap="20px"
              gridTemplateColumns="repeat(8, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 8" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Matrícula"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.registration}
                name="registration"
                error={!!touched.registration && !!errors.registration}
                helperText={touched.registration && errors.registration}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Nome"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 5" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="date"
                label="Dt Nascimento"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.dob}
                name="dob"
                error={!!touched.dob && !!errors.dob}
                helperText={touched.dob && errors.dob}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Telefone"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="RG"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.rg}
                name="rg"
                error={!!touched.rg && !!errors.rg}
                helperText={touched.rg && errors.rg}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="CPF"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cpf}
                name="cpf"
                error={!!touched.cpf && !!errors.cpf}
                helperText={touched.cpf && errors.cpf}
                sx={{ gridColumn: "span 2" }}
              />
              <FormControl
                fullWidth
                sx={{ gridColumn: "span 2" }}>
                <InputLabel>Tipo de Contrato</InputLabel>
                <Select
                  variant="filled"
                  value={values.department}
                  name="department"
                  onChange={handleChange}
                  error={!!touched.department && !!errors.department}
                  helpertext={touched.department && errors.department}

                >
                  <MenuItem value={10}>CLT</MenuItem>
                  <MenuItem value={20}>PJ</MenuItem>
                  
                </Select>
              </FormControl>
              <FormControl
                fullWidth
                sx={{ gridColumn: "span 2" }}>
                <InputLabel>Departamento</InputLabel>
                <Select
                  variant="filled"
                  value={values.department}
                  name="department"
                  onChange={handleChange}
                  error={!!touched.department && !!errors.department}
                  helpertext={touched.department && errors.department}

                >
                  <MenuItem value={10}>TI</MenuItem>
                  <MenuItem value={20}>RH</MenuItem>
                  <MenuItem value={30}>ADMINISTRAÇÃO</MenuItem>
                  <MenuItem value={40}>FINANCEIRO</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                fullWidth
                sx={{ gridColumn: "span 2" }}>
                <InputLabel>Cargo</InputLabel>
                <Select
                  variant="filled"
                  value={values.role}
                  name="role"
                  onChange={handleChange}
                  error={!!touched.role && !!errors.role}
                  helpertext={touched.role && errors.role}

                >
                  <MenuItem value={10}>Dev Front End</MenuItem>
                  <MenuItem value={20}>Analista de Ti</MenuItem>
                  <MenuItem value={30}>Farmaceutica</MenuItem>
                  <MenuItem value={40}>FINANCEIRO</MenuItem>
                </Select>
              </FormControl>
              <TextField
                fullWidth
                variant="filled"
                type="date"
                label="Dt Admissão"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.admissionDate}
                name="admissionDate"
                error={!!touched.admissionDate && !!errors.admissionDate}
                helperText={touched.admissionDate && errors.admissionDate}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Salário"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.salary}
                name="salary"
                error={!!touched.salary && !!errors.salary}
                helperText={touched.salary && errors.salary}
                sx={{ gridColumn: "span 1" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Endereço"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 3" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="date"
                label="Férias"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.vacation}
                name="vacation"
                error={!!touched.vacation && !!errors.vacation}
                helperText={touched.vacation && errors.vacation}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="date"
                label="Dt Demissão"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.demissionDate}
                name="demissionDate"
                error={!!touched.demissionDate && !!errors.demissionDate}
                helperText={touched.demissionDate && errors.demissionDate}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Cadastrar
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  registration: yup.number().required("obrigatorio"),
  firstName: yup.string().required("obrigatorio"),
  dob: yup.date(),
  email: yup.string().email("e-mail invalido"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("obrigatorio"),
  contract: yup.string().required("obrigatorio"),
  department: yup.string().required("obrigatorio"),
  role: yup.string(),
  demissionDate: yup.date(),
  vacation: yup.date(),
  salary: yup.number(),
  rg: yup.string(),
  cpf: yup.string(),
  address: yup.string().required("obrigatorio"),
  address2: yup.string().required("obrigatorio"),
});
const initialValues = {
  registration: "",
  firstName: "",
  dob: "",
  email: "",
  contract: "",
  department: "",
  role: "",
  demissionDate: "",
  vacation: "",
  salary: "",
  rg: "",
  cpf: "",
  contact: "",
  address: "",
  address2: "",
  /*registration: 0,
  firstName: "Douglas",
  dob: "1993-08-26",
  email: "douglas@email.com",
  contract: "PJ",
  department: "",
  role:"",
  admissionDate: "1993-08-26",
  salary:1000,
  rg:"",
  cpf:"",
  contact: "41998343309",
  address1: "ruA TESTES",
  address2: "rUA TESTE",*/
};

export default Form;
