import React, {Component} from 'react';
import {connect} from 'react-redux';
import {dispatchGetUserDataAsync} from '../../redux/user-data';
import {ROOT_URL} from '../../API';

class UserList extends Component {
  componentDidMount () {
    console.log('make ajax call here. . .');
    this.props.handleGetUserData();
  }
  render () {
    const {data} = this.props;
    console.log('data: ', data);
    return (
      <div>
        <h4>UserList</h4>
        <ul>
          {this.props.data.map(e =>
            (<li key={e._id}>test</li>))
          }
        </ul>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  data: state.userData
});
const mapDispatchToProps = (dispatch) => ({
  handleGetUserData: () => {
    dispatch(dispatchGetUserDataAsync(ROOT_URL))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
