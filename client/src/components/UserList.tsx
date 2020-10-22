import React from 'react';
import { connect } from 'react-redux';

import { Container } from 'reactstrap';

const UserListList = () => {  
  return (
    <Container>
       <h1>User List</h1>
    </Container>
  );
};

const mapStateToProps = () => ({
  
});

export default connect(mapStateToProps)(UserListList);
