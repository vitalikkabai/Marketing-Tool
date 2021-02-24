import { Box, Grid, Link, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import classes from '../RegisterForm.module.scss';
import { useHistory } from 'react-router';
import GoBackButton from '../../common/Button/GoBackButton';
import UxAssistant from '../UxAssistant/UxAssistant';
import CustomButton from '../../common/Button/CustomButton';
import RoleBoxes from '../../common/RoleBoxes/RoleBoxes';
import { ChooseRoleProps } from './RegisterFormChooseRoleContainer';

const RegisterFormChooseRole: React.FunctionComponent<ChooseRoleProps> = (
    props
) => {
    const history = useHistory();
    const [errorText, setErrorText] = useState('');
    const [selectedRole, setSelectedRole] = useState([
        { id: 'sales_role', title: 'Sales', selected: props.roleTags.sales },
        {
            id: 'marketing_role',
            title: 'Marketing',
            selected: props.roleTags.marketing,
        },
        {
            id: 'logistic_role',
            title: 'Logistics',
            selected: props.roleTags.logistics,
        },
        {
            id: 'accounting_role',
            title: 'Accounting',
            selected: props.roleTags.accounting,
        },
        {
            id: 'production_role',
            title: 'Production',
            selected: props.roleTags.production,
        },
        {
            id: 'quality_role',
            title: 'QC',
            selected: props.roleTags.qualityControl,
        },
    ]);

    const handleDataInput = () => {
        const saleRole = selectedRole.find(
            (element) => element.id === 'sales_role'
        );
        const marketingRole = selectedRole.find(
            (element) => element.id === 'marketing_role'
        );
        const logisticRole = selectedRole.find(
            (element) => element.id === 'logistic_role'
        );
        const accountRole = selectedRole.find(
            (element) => element.id === 'accounting_role'
        );
        const productRole = selectedRole.find(
            (element) => element.id === 'production_role'
        );
        const qcRole = selectedRole.find(
            (element) => element.id === 'quality_role'
        );
        props.setRoleTags({
            sales: saleRole ? saleRole.selected : false,
            marketing: marketingRole ? marketingRole.selected : false,
            logistics: logisticRole ? logisticRole.selected : false,
            accounting: accountRole ? accountRole.selected : false,
            production: productRole ? productRole.selected : false,
            qualityControl: qcRole ? qcRole.selected : false,
        });
    };

    useEffect(() => {
        const { websiteURLs, storeURLs, hasWebsite, hasExperienceSelling } = props;
        // Redirect to first step if prev step values is empty
        if ((hasWebsite && !websiteURLs.length) || (hasExperienceSelling && !storeURLs.length)) history.push('/register');
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleDataInput();
        const rolesArray = Object.entries(selectedRole);
        const selectedRoles: Array<string> = [];
        rolesArray.forEach((el, index) => {
            if (rolesArray[index][1].selected)
                selectedRoles.push(rolesArray[index][0]);
        });
        if (selectedRoles[0]) {
            history.push('/register/3');
        } else {
            setErrorText('You must select at least one option');
        }
    };

    useEffect(() => {
        setErrorText('');
    }, [selectedRole]);

    useEffect(() => { //Detect page refreshing
        window.onbeforeunload = (e: BeforeUnloadEvent) => {
            e.returnValue = '';
        }
        return () => {
            onbeforeunload = null
        }
    }, []);

    const handleBackPressed = () => {
        handleDataInput();
        history.goBack();
    };

    return (
        <Grid container justify="center" alignItems={'center'}>
            <Grid
                container
                direction="column"
                justify="center"
                className={classes.registerForm}
            >
                <Box className={classes.registrationSheet}>
                    <GoBackButton onClick={handleBackPressed} />
                    <UxAssistant
                        assistantText={'What are you in charge of?'}
                        stepNumber={2}
                    />
                    <form onSubmit={handleSubmit}>
                        <Box
                            className={classes.formContainer}
                            style={{ marginTop: '24px' }}
                        >
                            <RoleBoxes
                                selectedRole={selectedRole}
                                setSelectedRole={setSelectedRole}
                            />
                        </Box>
                        <Grid item className={classes.errorText}>
                            <Typography variant={'subtitle1'}>
                                {errorText}
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            className={
                                classes.nextContainer + ' ' + classes.roles
                            }
                        >
                            <CustomButton
                                type={'submit'}
                                className={classes.buttonBlock}
                                text={'Next'}
                            />
                            <Typography variant={'subtitle1'}>
                                Have an account already?&nbsp;
                                <Link
                                    className={classes.link}
                                    onClick={() => {
                                        history.push('/login');
                                    }}
                                >
                                    Log in
                                </Link>
                            </Typography>
                        </Grid>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
};

export default RegisterFormChooseRole;
