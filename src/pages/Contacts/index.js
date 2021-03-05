
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {useContacts} from './useContacts'
import {Typography} from '@material-ui/core'
import {ContactsTable} from '../ContactsTable'
const useStyles = makeStyles((theme) => (
    createStyles({
        root: {
            marginTop: theme.spacing(3)
        },
        headingTitle: {
            marginBottom: theme.spacing(4)
        }
    })

)

)


export const Contacts = () => {

    const contacts = useContacts()
    const classes = useStyles();

    if (contacts.isLoading) {
        return <div>...loading</div>
    }
    if (contacts.isError) {
        return <div>...error</div>
    }
    return (
        <Container className={classes.root}>
            <Grid container>
                <Grid item xs={12} className={classes.headingTitle}>
                    <Typography variant="h4" component="h1"> Contacts </Typography> 
                </Grid>
                <Grid item xs={12}>
                     <ContactsTable data={contacts.data}/>
                </Grid>
            </Grid>

        </Container>
    )
}
