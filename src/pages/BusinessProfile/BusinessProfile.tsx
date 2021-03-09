import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React, {useEffect, useState} from 'react';
import classes from './BusinessProfile.module.scss';
import CustomInput from '../../components/common/Input/CustomInput';
import CustomButton from '../../components/common/Button/CustomButton';
import RoleBoxes from '../../components/common/RoleBoxes/RoleBoxes';
import {PropsFromRedux} from './BusinessProfileContainer';
import WebLink from '../../components/common/webLink/webLink';
import {useFormik} from "formik";
import * as Yup from "yup";

const BusinessProfile: React.FunctionComponent<PropsFromRedux> = (props) => {
    const [selectedRole, setSelectedRole] = useState(
        [
            {
                id: 'sales_role',
                title: 'Sales',
                selected: props.roleTags.sales,
            },
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
        ]
        // .sort((a, b) =>
        //     a.selected < b.selected ? 1 : b.selected < a.selected ? -1 : 0
        // )
    );// Sorting by selected status
    const [selectedRoleError, setSelectedRoleError] = useState(false)

    const formik = useFormik({
        initialValues: {
            companyName: props.business.companyName,
            ownerEmail: props.profile.email,
        },
        validationSchema: Yup.object({
            companyName: Yup.string()
                .trim()
                .required("Required")
        }),
        validateOnChange: false,
        validateOnBlur: true,
        onSubmit: () => {
            setSelectedRoleError(false)
            const rolesArray = Object.entries(selectedRole);
            const selectedRoles: Array<string> = [];
            rolesArray.forEach((el, index) => {
                if (rolesArray[index][1].selected)
                    selectedRoles.push(rolesArray[index][0]);
            });
            if (selectedRoles[0]){
                props.updateBusinessInDB({
                    id: props.business.id as string,
                    companyName: formik.values.companyName,
                    websiteURLs,
                    storeURLs
                });
                props.setRoleTags(getNewSelectedRoleObject());
            } else {
                setSelectedRoleError(true)
            }
        },
    });

    const [storeURLs, setSellingURLs] = useState<string[]>(
        props.business.storeURLs
    );
    const [webInput, setWebInput] = useState('');
    const [sellingInput, setSellingInput] = useState('');
    const [websiteURLs, setWebsiteURLs] = useState<string[]>(
        props.business.websiteURLs
    );
    const [webErrorText, setWebErrorText] = useState('');
    const [storeErrorText, setStoreErrorText] = useState('');
    const [edited, setEdited] = useState(false);

    const getNewSelectedRoleObject = () => ({
        sales: selectedRole.find((el) => el.id === 'sales_role')?.selected || false,
        marketing: selectedRole.find((el) => el.id === 'marketing_role')?.selected || false,
        logistics: selectedRole.find((el) => el.id === 'logistic_role')?.selected || false,
        accounting: selectedRole.find((el) => el.id === 'accounting_role')?.selected || false,
        production: selectedRole.find((el) => el.id === 'production_role')?.selected || false,
        qualityControl: selectedRole.find((el) => el.id === 'quality_role')?.selected || false
    });

    useEffect(() => {
        formik.setFieldValue("companyName", props.business.companyName);
        setWebsiteURLs(props.business.websiteURLs);
        setSellingURLs(props.business.storeURLs);
    }, [props.business]);

    useEffect(() => {
        setSelectedRole(
            [
                {
                    id: 'sales_role',
                    title: 'Sales',
                    selected: props.roleTags.sales,
                },
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
                }
            ]
            // .sort((a, b) =>
            //     a.selected < b.selected ? 1 : b.selected < a.selected ? -1 : 0
            // )
        );
    }, [props.roleTags]);

    useEffect(() => {
        const selectedRoleValues = getNewSelectedRoleObject();
        // Check that any values do not differ from the analogues in the reducer
        if (
            formik.values.companyName !== props.business.companyName ||
            storeURLs !== props.business.storeURLs ||
            websiteURLs !== props.business.websiteURLs ||
            selectedRoleValues.sales !== props.roleTags.sales ||
            selectedRoleValues.marketing !== props.roleTags.marketing ||
            selectedRoleValues.logistics !== props.roleTags.logistics ||
            selectedRoleValues.accounting !== props.roleTags.accounting ||
            selectedRoleValues.production !== props.roleTags.production ||
            selectedRoleValues.qualityControl !== props.roleTags.qualityControl
        ) {
            setEdited(true);
        } // Set edited mode
        else {
            setEdited(false);
        }
    }, [selectedRole, formik.values.companyName, storeURLs, websiteURLs]);

    return (
        <Box className={classes.component}>
            <Box className={classes.headTitle}>
                <Typography variant={'h2'}>Business Profile</Typography>
            </Box>
            <form onSubmit={formik.handleSubmit} className={classes.formContainer}>
                <Grid container className={classes.formContentContainer}>
                    <Grid
                        item
                        container
                        xs={12}
                        className={classes.mainInputGridItem}>
                        <Grid item xs={3}>
                            <CustomInput
                                label="Company Name"
                                placeholder={'Company Name'}
                                fullWidth={true}
                                name={"companyName"}
                                value={formik.values.companyName}
                                error={formik.touched.companyName && Boolean(formik.errors.companyName)}
                                helperText={formik.touched.companyName && formik.errors.companyName}
                                variant="outlined"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}/>
                        </Grid>
                        <Grid item xs={9} className={classes.saveButton}>
                            <CustomButton
                                type={'submit'}
                                text={'Save'}
                                disabled={!edited}/>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.roleBoxesGridItem}>
                        <Typography
                            variant={'h6'}
                            className={classes.roleBoxText}>
                            You are in charge of:
                        </Typography>
                        <RoleBoxes
                            selectedRole={selectedRole}
                            setSelectedRole={setSelectedRole}
                            displayInRow/>
                        {selectedRoleError && <Typography variant={"subtitle1"} className={classes.errorText}>
                            You must select at least one option
                        </Typography>}
                    </Grid>
                    <Grid
                        item
                        container
                        xs={12}
                        justify={'space-between'}
                        className={classes.linkGridItem}>
                        <Grid item xs={6} style={{paddingRight: '24px'}}>
                            <WebLink
                                linkInput={webInput}
                                linkURLs={websiteURLs}
                                linkErrorText={webErrorText}
                                setLinkInput={setWebInput}
                                setLinkURLs={setWebsiteURLs}
                                setLinkErrorText={setWebErrorText}
                                label={'Website URL address'}/>
                        </Grid>
                        <Grid item xs={6} style={{paddingLeft: '24px'}}>
                            <WebLink
                                linkInput={sellingInput}
                                linkURLs={storeURLs}
                                linkErrorText={storeErrorText}
                                setLinkInput={setSellingInput}
                                setLinkURLs={setSellingURLs}
                                setLinkErrorText={setStoreErrorText}
                                label={'Store URL address'}/>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default BusinessProfile;
