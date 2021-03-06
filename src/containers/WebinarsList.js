import { connect } from 'react-redux';
import Component from '../components/WebinarsList/WebinarsList';

const Container = connect(
  (state) => ({ webinars: state.webinars, webinarsPerPage: state.webinarsPerPage }),
  null,
)(Component);

export default Container;
