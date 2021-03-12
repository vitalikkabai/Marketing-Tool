import classes from '../RoleBoxes.module.scss';
import { Box, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { ReactComponent as SaleRoleIcon } from '../../../../assets/images/roles/saleRoleIcon.svg';
import { ReactComponent as MarketingRoleIcon } from '../../../../assets/images/roles/marketingRoleIcon.svg';
import { ReactComponent as LogisticsRoleIcon } from '../../../../assets/images/roles/logisticRoleIcon.svg';
import { ReactComponent as AdminRoleIcon } from '../../../../assets/images/roles/adminRoleIcon.svg';
import { ReactComponent as AccountingRoleIcon } from '../../../../assets/images/roles/accountingRoleIcon.svg';
import { ReactComponent as ProductionRoleIcon } from '../../../../assets/images/roles/productionRoleIcon.svg';
import { ReactComponent as QcRoleIcon } from '../../../../assets/images/roles/qcRoleIcon.svg';
import { ReactComponent as AllRoleIcon } from '../../../../assets/images/roles/allRoleIcon.svg';

type PropsType = {
    setSelectedRole: React.Dispatch<
        React.SetStateAction<{ id: string; title: string; selected: boolean }[]>
    >;
    roleItem: { id: string; title: string; selected: boolean };
    setEdited?: React.Dispatch<React.SetStateAction<boolean>>;
};

const RoleBox: React.FC<PropsType> = ({ setSelectedRole, roleItem, setEdited }) => {
    const [roleHoverClass, setRoleHoverClass] = useState('');
    const [roleActiveClass, setRoleActiveClass] = useState('');
    const [roleSelectClass, setRoleSelectClass] = useState('');
    const [roleIcon, setRoleIcon] = useState(<div />);

    useEffect(() => {
        getRoleClass(roleItem.id);
    }, []);

    const getRoleClass = (roleId: string) => {
        switch (roleId) {
            case 'sales_role': {
                setRoleHoverClass(classes.role1Hover);
                setRoleActiveClass(classes.roleBox1Active);
                setRoleSelectClass(classes.roleBox1Select);
                setRoleIcon(<SaleRoleIcon />);
                break;
            }

            case 'marketing_role': {
                setRoleHoverClass(classes.role2Hover);
                setRoleActiveClass(classes.roleBox2Active);
                setRoleSelectClass(classes.roleBox2Select);
                setRoleIcon(<MarketingRoleIcon />);
                break;
            }

            case 'logistic_role': {
                setRoleHoverClass(classes.role3Hover);
                setRoleActiveClass(classes.roleBox3Active);
                setRoleSelectClass(classes.roleBox3Select);
                setRoleIcon(<LogisticsRoleIcon />);
                break;
            }

            case 'accounting_role': {
                setRoleHoverClass(classes.role4Hover);
                setRoleActiveClass(classes.roleBox4Active);
                setRoleSelectClass(classes.roleBox4Select);
                setRoleIcon(<AccountingRoleIcon />);
                break;
            }
            case 'production_role': {
                setRoleHoverClass(classes.role5Hover);
                setRoleActiveClass(classes.roleBox5Active);
                setRoleSelectClass(classes.roleBox5Select);
                setRoleIcon(<ProductionRoleIcon />);
                break;
            }

            case 'quality_role': {
                setRoleHoverClass(classes.role6Hover);
                setRoleActiveClass(classes.roleBox6Active);
                setRoleSelectClass(classes.roleBox6Select);
                setRoleIcon(<QcRoleIcon />);
                break;
            }

            case 'admin_role': {
                setRoleHoverClass(classes.role7Hover);
                setRoleActiveClass(classes.roleBox7Active);
                setRoleSelectClass(classes.roleBox7Select);
                setRoleIcon(<AdminRoleIcon />);
                break;
            }

            case 'all_role': {
                setRoleHoverClass(classes.role8Hover);
                setRoleActiveClass(classes.roleBox8Active);
                setRoleSelectClass(classes.roleBox8Select);
                setRoleIcon(<AllRoleIcon />);
                break;
            }
        }
    };

    return (
        <Box
            className={
                roleItem.selected
                    ? classes.roleContainer + ' ' + roleSelectClass + ' ' + roleHoverClass
                    : classes.roleContainer + ' ' + roleHoverClass
            }
            onClick={() => {
                setSelectedRole((roles) =>
                    roles.map((elem) => {
                        if (roleItem.id === 'all_role') {
                            !roleItem.selected ? (elem.selected = true) : (elem.selected = false);
                        } else if (elem.id === roleItem.id) {
                            elem.selected = !elem.selected;

                            if (roleItem.id != 'all_role') {
                                roles.find((el) => {
                                    el.id === 'all_role' ? (el.selected = false) : true;
                                });
                            }

                            const arrRoleSelect = [] as Array<boolean>;

                            roles.map((el) => {
                                if (el.selected === true) {
                                    arrRoleSelect.push(el.selected);
                                }
                                return arrRoleSelect;
                            });

                            if (arrRoleSelect.length === roles.length - 1) {
                                roles.find((el) => {
                                    if (el.id === 'all_role') {
                                        el.selected = true;
                                    }
                                });
                            }
                        }
                        if (setEdited) setEdited(false);

                        return elem;
                    })
                );
            }}>
            <Box className={roleItem.selected ? roleActiveClass : classes.roleBox}>{roleIcon}</Box>
            <Typography variant={'h6'} align={'center'} className={classes.roleTitle}>
                {roleItem.title}
            </Typography>
        </Box>
    );
};

export default RoleBox;
