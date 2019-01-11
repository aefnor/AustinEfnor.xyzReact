import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import '../styles/Portfolio.css'
const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});
class Portfolio extends React.Component {
    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    //https://blog.visme.co/website-color-schemes/
    render() {
        const { classes } = this.props;
        return(
            <div>
                <div>
                    <h1 className="mainHeader">Projects</h1>
                    <h3>Learning through hands on experience.</h3>
                </div>
            </div>
        )
    }
}
export default Portfolio;