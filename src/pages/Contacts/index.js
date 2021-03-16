
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useContacts } from './useContacts'
import { Typography } from '@material-ui/core'
import { ContactsTable } from '../ContactsTable'

import { Box } from '@material-ui/core'
import { ToggleButtonView } from '../../components/ToggleButtonView'
import { DATAVIEWMODES } from './constants'
import { CircularProgress } from '@material-ui/core';
import {useDataViewMode} from './useDataViewMode'
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
    const [dataViewMode, setDataViewMode] = useDataViewMode()
  
    return (
        <Container className={classes.root}>
            <Grid container>

                <Grid item xs={12} className={classes.headingTitle}>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="h4" component="h1"> Contacts </Typography>
                        <ToggleButtonView dataViewMode={dataViewMode} setDataViewMode={setDataViewMode}> </ToggleButtonView>

                    </Box>
                </Grid>

                {
                    (() => {
                        if (contacts.isLoading) {
                            return <CircularProgress data-testid="contacts-loader"/>
                        }
                        if (contacts.isError) {
                            return <div>...error</div>
                        }
                        if (dataViewMode === DATAVIEWMODES.TABLE) {
                            return <ContactsTable data={contacts.data} />
                        }
                        if (dataViewMode === DATAVIEWMODES.GRID) {
                            return "grid"
                        }
                    })()
                }

            </Grid>

        </Container>
    )
}
