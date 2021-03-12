import {createStyles, makeStyles, Tooltip, ClickAwayListener} from '@material-ui/core'
import {Box} from '@material-ui/core'
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import PropTypes from 'prop-types'
import {useCopyToClipboard} from 'react-use'
import {useState, useCallback} from 'react'

const useStyles = makeStyles((theme) => 
    createStyles({
        root: {},
        icon: {
            marginRight: theme.spacing(1)
        }
    })
)
const STATUS_COPY = {
    COPY: "copy",
    COPIED: "copied"
}
export const CopyToClipboardText = ({text}) => {
    const classes = useStyles()
    const[status, setCopyStatus] = useState(STATUS_COPY.COPY)
    
    const[, copyToClipboard] = useCopyToClipboard();
   
    const getTitleTolltip = () => {
        switch(status) {
            case 'copy': 
                return 'copy';
            case 'copied': 
                return 'copied';
            default:
                return '';    
        }
    }

    const onClickTolltip = useCallback(() => {
        copyToClipboard(text)
        setCopyStatus(STATUS_COPY.COPIED)
    },[copyToClipboard, text])

    const onMouseLeaveTooltip = useCallback(() => {
        setCopyStatus(STATUS_COPY.COPY)
    },[setCopyStatus])

    return(
        <ClickAwayListener onClickAway={onMouseLeaveTooltip}>
        <Tooltip title={getTitleTolltip()} placement="top" arrow>  
        <Box display="flex" alignItems="center" className={classes.root} onClick={onClickTolltip}>
            <FileCopyOutlinedIcon fontSize="small" className={classes.icon}/>
            {text}
        </Box>
        </Tooltip>
        </ClickAwayListener>
    )
}


CopyToClipboardText.propTypes = {
    text: PropTypes.string
}