import classes from './RoleBoxes.module.scss';
import { Grid, Box } from '@material-ui/core';
import React from 'react';
import RoleBox from './RoleBox/RoleBox';

type PropsType = {
    selectedRole: { id: string; title: string; selected: boolean }[];
    setSelectedRole: React.Dispatch<
        React.SetStateAction<{ id: string; title: string; selected: boolean }[]>
    >;
    displayInRow?: boolean;
    setEdited?: React.Dispatch<React.SetStateAction<boolean>>;
};

const RoleBoxes: React.FC<PropsType> = ({
    selectedRole,
    setSelectedRole,
    displayInRow,
    setEdited,
}) => {
    return (
        <Grid container justify={displayInRow ? 'flex-start' : 'center'}>
            <Grid
                item
                className={classes.roleGridItem}
                xs={displayInRow ? false : 12}
                // style={
                //     displayInRow
                //         ? { paddingBottom: '0' }
                //         : { paddingBottom: '24px' }
                // }
            >
                <Box className={classes.roleGroupItem}>
                    <RoleBox
                        roleItem={selectedRole[0]}
                        setSelectedRole={setSelectedRole}
                        setEdited={setEdited}
                    />
                    <RoleBox
                        roleItem={selectedRole[1]}
                        setSelectedRole={setSelectedRole}
                        setEdited={setEdited}
                    />
                </Box>
                <Box className={classes.roleGroupItem}>
                    <RoleBox
                        roleItem={selectedRole[2]}
                        setSelectedRole={setSelectedRole}
                        setEdited={setEdited}
                    />
                    <RoleBox
                        roleItem={selectedRole[6]}
                        setSelectedRole={setSelectedRole}
                        setEdited={setEdited}
                    />
                </Box>
            </Grid>
            <Grid item className={classes.roleGridItem} xs={displayInRow ? false : 12}>
                <Box className={classes.roleGroupItem}>
                    <RoleBox
                        roleItem={selectedRole[3]}
                        setSelectedRole={setSelectedRole}
                        setEdited={setEdited}
                    />
                    <RoleBox
                        roleItem={selectedRole[4]}
                        setSelectedRole={setSelectedRole}
                        setEdited={setEdited}
                    />
                </Box>
                <Box className={classes.roleGroupItem}>
                    <RoleBox
                        roleItem={selectedRole[5]}
                        setSelectedRole={setSelectedRole}
                        setEdited={setEdited}
                    />
                    <RoleBox
                        roleItem={selectedRole[7]}
                        setSelectedRole={setSelectedRole}
                        setEdited={setEdited}
                    />
                </Box>
            </Grid>
        </Grid>
    );
};

export default RoleBoxes;
