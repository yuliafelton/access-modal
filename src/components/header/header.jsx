import React, {useCallback, useEffect, useMemo} from 'react';
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
import {setSelectedEmails} from "../../store/appSlice";
import Autocomplete from "@material-ui/core/Autocomplete";
import {fetchEmails} from "../../store/thunks";

function Header() {

    //const emails = useSelector(state => state.app.emails);

    const [open, setOpen] = React.useState(false);
    const emails = useSelector(state => state.app.emails);
    const emailsList = useSelector(state => state.app.emailsList);
    const emailsLoading = useSelector(state => state.app.emailsLoading);
    const selectedEmails = useSelector(state => state.app.selectedEmails);
    const dispatch = useDispatch();

    const leftEmails = useMemo(() =>
        (emailsList || []).filter((email) => !selectedEmails.includes(email)
        ),[emailsList, selectedEmails]);

    const handleEmailSelect = useCallback((email) => {
        if (email) {
            dispatch(setSelectedEmails(email));
        }
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchEmails());

    }, [dispatch]);

    if(!emails || emailsLoading) {
        return <div>Loading...</div>;
    }

    if(!emailsList) {
        return null;
    }

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
                <Button
                    style={{
                        backgroundColor: "#0B0C10",
                        border: "solid 2px #66FCF1",
                        fontFamily: "'Roboto Condensed', sans-serif"
                    }}
                    variant="contained"
                    onClick={handleClickOpen}
                    className="access-button">access settings</Button>
            </div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Allow access to users</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add users you would like to have access to these notes.
                    </DialogContentText>
                    <EmailsSearch onSelect={handleEmailSelect}
                                  leftEmails={leftEmails}/>
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