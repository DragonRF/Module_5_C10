import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, IconButton,
    MenuItem,
    styled,
    TextField
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import * as Yup from 'yup';
import {useFormik} from "formik";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});
function AddUser(props) {
    const formik = useFormik({
        initialValues: {
            id: Math.floor(Math.random() * 100),
            name: "",
            email: "",
            phone: "",
            role: "User",
        },
        validationSchema: SignupSchema,
        onSubmit: values => {
            props.addUser(values);
            formik.resetForm();
            handleClose();
        },
    });

    const handleClose = () => {
        props.handleClose();
    };

    return (
        <>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={props.open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    User information
                </BootstrapDialogTitle>

                <form onSubmit={formik.handleSubmit}>
                    <DialogContent dividers>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '40ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div>
                                <TextField
                                    id="name"
                                    fullWidth
                                    label="Name"
                                    name="name"
                                    error={formik.errors.name}
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    helperText= {formik.errors.name && formik.touched.name ?
                                        formik.errors.name
                                     : null}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}  />


                            </div>
                            <div>
                                <TextField
                                    id="email"
                                    fullWidth
                                    label="Email"
                                    error={formik.errors.email}
                                    name="email"
                                    helperText= {formik.errors.email && formik.touched.email ?
                                        formik.errors.email
                                        : null}
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
                            <div>
                                <TextField
                                    id="phone"
                                    fullWidth
                                    label="Phone"
                                    name="phone"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
                            <div>
                                <TextField
                                    fullWidth
                                    id="role"
                                    select
                                    label="Role"
                                    name="role"
                                    value={formik.values.role}
                                    onChange={formik.handleChange}
                                    defaultValue="User"
                                >
                                    <MenuItem value="Admin">
                                        Admin
                                    </MenuItem>
                                    <MenuItem  value="User">
                                        User
                                    </MenuItem>

                                </TextField>
                            </div>

                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus type="submit">
                            Add Account
                        </Button>
                    </DialogActions>
                </form>

            </BootstrapDialog>
        </>
    )
}
export default AddUser;
