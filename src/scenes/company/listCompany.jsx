import { useEffect, useState } from "react";
import { Box, useTheme } from "@mui/material"
import { DataGrid, GridToolbar, GridActionsCellItem, ptBR } from "@mui/x-data-grid";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { tokens } from "../../theme";
import { useAuth } from "../../context/useAuth";
import { Loader } from "../../components/Loader";
import { ModalCustom } from "../../components/Modal";


export const ListCompany = () => {
    const { loadingDelete, listCompany, deleteCompany } = useAuth()
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [company, setCompany] = useState([])
    const [open, setOpen] = useState(false)
    const [row, setRow] = useState()


    const loadCompany = async () => {
        const response = await listCompany()
        setCompany(response)
    }
    useEffect(() => {
        loadCompany();
    });


    const handleDeleteOpenModal = (row) => {
        setRow(row)
        setOpen(true)

    }

    const handleDelete = async () => {
        try {
            handleClose()
            await deleteCompany(row)
        } catch (error) {
            console.log(error)

        }

    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleEdit = (row) => {
        //TODO: Implement function to Edit Company

        setRow(row)

    }

    const columns = [
        {
            field: "id_empr", headerName: "ID", flex: 0.5
        },

        {
            field: "nm_empr",
            headerName: "Empresa",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "cnpj",
            headerName: "CNPJ",
            type: "number",
            headerAlign: "left",
            align: "left",
            flex: 1,
        },
        {
            field: "telefone",
            headerName: "Telefone",
            flex: 1,
        },

        {
            field: "endereco",
            headerName: "Endereço",
            flex: 1,
        },
        {
            field: "actions",

            headerName: "Ação",
            flex: 1,
            renderCell: ({ row }) => {
                return (
                    <>
                        <GridActionsCellItem

                            icon={<EditIcon />}
                            label="Edit"
                            onClick={() => { handleEdit(row) }}
                        />
                        <GridActionsCellItem

                            icon={<DeleteIcon />}
                            label="Delete"
                            onClick={() => { handleDeleteOpenModal(row) }}
                        />



                    </>
                )
            }
            ,

        }

    ];
    return (
        <Box m="10px 0 0 0"
            height="50vh"

            sx={{
                "& .MuiDataGrid-root": {
                    border: "none",
                },
                "& .MuiDataGrid-cell": {
                    borderBottom: "none",
                },
                "& .name-column--cell": {
                    color: colors.greenAccent[300],
                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: colors.blueAccent[700],
                    borderBottom: "none",
                },
                "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: colors.primary[400],
                },
                "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    backgroundColor: colors.blueAccent[700],
                },
                "& .MuiCheckbox-root": {
                    color: `${colors.greenAccent[200]} !important`,
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: `${colors.grey[100]} !important`,
                },
            }}
        >
            {!loadingDelete &&
                <Loader />}
            <ModalCustom
                open={open}
                title="Deseja realmente excluir ?"
                handleClose={handleClose}
                onConfirm={handleDelete}
            />

            <DataGrid
                rows={company}
                getRowId={(row) => row.id_empr}
                columns={columns}
                components={{ Toolbar: GridToolbar }}
                localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}

            />



        </Box>
    )
}


