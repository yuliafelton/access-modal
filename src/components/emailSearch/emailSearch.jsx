import * as React from 'react';
import {useEffect, useCallback, useMemo} from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/core/Autocomplete';
import TextField from '@material-ui/core/TextField';
import {useDispatch, useSelector} from "react-redux";
import {fetchEmails} from "../../store/thunks";


export default function EmailSearch() {

    const emails = useSelector(state => state.app.emails);
    const emailsList = useSelector(state => state.app.emailsList);
    const emailsLoading = useSelector(state => state.app.emailsLoading);
    const selectedEmails = useSelector(state => state.app.selectedEmails);
    const dispatch = useDispatch();

    const selectedEmailsList = useMemo(() =>
        (emailsList || []).filter((ingredient) => !selectedEmails.includes(ingredient)
        ),[emailsList, selectedEmails]);

    useEffect(() => {
        dispatch(fetchEmails());

    }, [dispatch]);

    if(!emails || emailsLoading) {
        return <div>Loading...</div>;
    }

    if(!emailsList) {
        return null;
    }

    return (
        <Autocomplete
            multiple
            id="tags-filled"
            options={emailsList}
            freeSolo
            renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                    <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                ))
            }
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="standard"
                    label="Email"
                    placeholder="Email"
                />
            )}
        />
    );
}

