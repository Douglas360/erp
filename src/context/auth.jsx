import { createContext, useState } from "react";
import { toast } from 'react-toastify'
import { api } from "../services/api";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [loadingRegister, setLoadingRegister] = useState(true)
    const [loadingDelete, setLoadingDelete] = useState(true)


    const createCompany = async ({ nm_empr, cnpj, telefone, endereco }) => {
        setLoadingRegister(false)

        try {
            await api.post('company', {
                nm_empr,
                cnpj,
                telefone,
                endereco
            }).then(() => {
                setLoadingRegister(true)
                toast.success('🦄 Cadastrado com sucesso! ', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            })

        } catch (error) {
            const alreadyExists = error.response.data.eror
            if (alreadyExists === "Company already exist") {
                setLoadingRegister(true)
                toast.error('Empresa já cadastrada', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            } else {
                console.log(error)
            }


        }

    }

    const listCompany = async () => {


        try {
            const response = await api.get('company')


            return response.data

        } catch (error) {
            console.log(error)
        }
    }

    const deleteCompany = async ({ id_empr }) => {
        setLoadingDelete(false)
        try {
            {/*Chamar Modal de exclusão */ }
            const response = await api.delete(`company/${id_empr}`,)

            setLoadingDelete(true)
            toast.success('Excluido com sucesso', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
               
            })
            return response.data


        } catch (error) {
            setLoadingDelete(true)
            toast.error(' Não foi possivel realizar a exclusão', {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
               
            })
            console.log(error)
        }
    }
    return (
        <AuthContext.Provider value={{
            loadingRegister, loadingDelete, createCompany, listCompany, deleteCompany

        }}>
            {children}
        </AuthContext.Provider>
    )

}