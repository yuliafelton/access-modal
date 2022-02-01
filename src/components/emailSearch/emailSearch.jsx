import * as React from 'react';
import {useCallback} from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/core/Autocomplete';
import TextField from '@material-ui/core/TextField';
import {useDispatch} from "react-redux";
import {deleteEmail} from "../../store/appSlice";


export default function EmailSearch({leftEmails, onSelect}) {

    const dispatch = useDispatch();

    const handleDelete = useCallback((emailToDelete) => {
        dispatch(deleteEmail(emailToDelete));
    },[dispatch]);

    return (
        <Autocomplete
            multiple
            id="tags-filled"
            freeSolo
            options={leftEmails}
            onChange={(event, email) => onSelect(email)}
            renderTags={(selectedEmails, getTagProps) =>
                selectedEmails.map((email, index) =>
                    {
                        const chipProps = getTagProps({ index });
                        return (
                            <Chip variant="outlined"
                            {...chipProps}
                            onDelete={(onDeleteEvent) => {
                                handleDelete(email);
                                debugger;
                                chipProps.onDelete(onDeleteEvent);
                            }}
                            label={email}
                            />
                        )
                    }

                )
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

