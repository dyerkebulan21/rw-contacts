import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import {useCallback} from 'react'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import {DATAVIEWMODES} from '../../pages/Contacts/constants'
export const ToggleButtonView = ({dataViewMode, setDataViewMode}) => {
    const handleDataViewMode = useCallback((_, nextView) => {
        setDataViewMode(nextView);
    },[setDataViewMode]);
    return(
        <ToggleButtonGroup  value={dataViewMode} exclusive onChange={handleDataViewMode}>
        <ToggleButton value={DATAVIEWMODES.TABLE} aria-label="list">
         
            <ViewModuleIcon />
        </ToggleButton>
        <ToggleButton value={DATAVIEWMODES.GRID} aria-label="module">
        <ViewListIcon />
        </ToggleButton>

    </ToggleButtonGroup>
    )
}