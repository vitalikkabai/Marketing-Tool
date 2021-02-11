import classes from '../RoleBoxes.module.scss';
import { Box, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { ReactComponent as SaleRoleIcon } from '../../../../assets/images/roles/saleRoleIcon.svg';
import { ReactComponent as MarketingRoleIcon } from '../../../../assets/images/roles/marketingRoleIcon.svg';
import { ReactComponent as LogisticsRoleIcon } from '../../../../assets/images/roles/logisticRoleIcon.svg';
import { ReactComponent as AccountingRoleIcon } from '../../../../assets/images/roles/accountingRoleIcon.svg';
import { ReactComponent as ProductionRoleIcon } from '../../../../assets/images/roles/productionRoleIcon.svg';
import { ReactComponent as QcRoleIcon } from '../../../../assets/images/roles/qcRoleIcon.svg';

type PropsType = {
    setSelectedRole: React.Dispatch<
        React.SetStateAction<{ id: string; title: string; selected: boolean }[]>
    >;
    roleItem: { id: string; title: string; selected: boolean };
    setEdited?: React.Dispatch<React.SetStateAction<boolean>>;
};

const RoleBox: React.FC<PropsType> = ({
    setSelectedRole,
    roleItem,
    setEdited,
}) => {
    const [roleHoverClass, setRoleHoverClass] = useState('');
    const [roleActiveClass, setRoleActiveClass] = useState('');
    const [roleIcon, setRoleIcon] = useState(<div />);

    useEffect(() => {
        getRoleClass(roleItem.id);
    }, []);

    const getRoleClass = (roleId: string) => {
        switch (roleId) {
            case 'sales_role': {
                setRoleHoverClass(classes.role1Hover);
                setRoleActiveClass(classes.roleBox1Active);
                setRoleIcon(<SaleRoleIcon />);
                break;
            }

            case 'marketing_role': {
                setRoleHoverClass(classes.role2Hover);
                setRoleActiveClass(classes.roleBox2Active);
                setRoleIcon(<MarketingRoleIcon />);
                break;
            }

            case 'logistic_role': {
                setRoleHoverClass(classes.role3Hover);
                setRoleActiveClass(classes.roleBox3Active);
                setRoleIcon(<LogisticsRoleIcon />);
                break;
            }

            case 'accounting_role': {
                setRoleHoverClass(classes.role4Hover);
                setRoleActiveClass(classes.roleBox4Active);
                setRoleIcon(<AccountingRoleIcon />);
                break;
            }
            case 'production_role': {
                setRoleHoverClass(classes.role5Hover);
                setRoleActiveClass(classes.roleBox5Active);
                setRoleIcon(<ProductionRoleIcon />);
                break;
            }

            case 'quality_role': {
                setRoleHoverClass(classes.role6Hover);
                setRoleActiveClass(classes.roleBox6Active);
                setRoleIcon(<QcRoleIcon />);
                break;
            }
        }
    };

    return (
        <Box
            className={classes.roleContainer + ' ' + roleHoverClass}
            onClick={() => {
                setSelectedRole((roles) =>
                    roles.map((elem) => {
                        if (elem.id === roleItem.id)
                            elem.selected = !elem.selected;
                        if (setEdited) setEdited(false);
                        return elem;
                    })
                );
            }}
        >
            <Box
                className={
                    roleItem.selected ? roleActiveClass : classes.roleBox
                }
            >
                {roleIcon}
            </Box>
            <Typography
                variant={'h6'}
                align={'center'}
                className={classes.roleTitle}
            >
                {roleItem.title}
            </Typography>
        </Box>
    );
};

export default RoleBox;
