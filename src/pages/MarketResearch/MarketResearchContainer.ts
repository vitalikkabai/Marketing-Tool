// import { AppStateType } from '../../store/store';
// import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import MarketResearch from "./MarketResearch";

function mapStateToProps(/*state: AppStateType*/) {
    return {

    };
}

function mapDispatchToProps(/*dispatch: Dispatch*/) {
    return {

    };
}

const connector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(MarketResearch);
