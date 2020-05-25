import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	inputStyle: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
	selectStyle: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	}
}));

export default useStyles