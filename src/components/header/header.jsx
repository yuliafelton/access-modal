import React from 'react';
import './header.css';
import {useDispatch, useSelector} from "react-redux";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core//TextField';
import DialogContentText from '@material-ui/core//DialogContentText';
import EmailsSearch from "../emailSearch/emailSearch";

function Header() {

    //const emails = useSelector(state => state.app.emails);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="header-menu">
            <h3 className="notes-heading">My notes</h3>
            <div className="button-container">
                <Button variant="contained" onClick={handleClickOpen} className="access-button">access settings</Button>
            </div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Allow access to users</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add users you would like to have access to these notes.
                    </DialogContentText>
                    <EmailsSearch/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Header;