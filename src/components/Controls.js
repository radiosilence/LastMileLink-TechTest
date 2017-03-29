import React, { Component, PropTypes } from 'react';
import I from 'immutable';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
} from 'react-bootstrap';


import actions from '../actions';

class Controls extends Component {
  static propTypes = {
    gridster: PropTypes.instanceOf(I.Map),
    gridsterActionCreators: PropTypes.object.isRequired,
  };

  shouldComponentUpdate(nextProps) {
    return !I.is(this.props.gridster, nextProps.gridster);
  }

  handleUpdateRows = (event) => {
    event.preventDefault();
    const { gridsterActionCreators: { updateRows } } = this.props;
    updateRows(Number(event.target.value));
  }

  handleUpdateColumns = (event) => {
    event.preventDefault();
    const { gridsterActionCreators: { updateColumns } } = this.props;
    updateColumns(Number(event.target.value));
  }

  handleGenerate = (event) => {
    event.preventDefault();
    const { gridsterActionCreators: { generate } } = this.props;
    generate();
  }

  render() {
    console.log('props', this.props);
    const {
      gridster: { inputs: { rows, columns } },
    } = this.props;

    return (
      <Row>
        <Col md={2}>
          <FormGroup size="small">
            <Col xs={2}>
              <ControlLabel>Rows</ControlLabel>
              <FormControl
                bsSize="small"
                value={rows}
                onChange={this.handleUpdateRows}
                type="number" />
            </Col>
            <Col xs={2}>
              <ControlLabel>Columns</ControlLabel>
              <FormControl
                bsSize="small"
                value={columns}
                onChange={this.handleUpdateColumns}
                type="number" />
            </Col>
            <Col xs={2}>
              <Button bsStyle="primary" onClick={this.handleGenerate}>
                Generate
              </Button>
            </Col>
          </FormGroup>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => ({
  gridster: state.gridster,
});

const mapDispatchToProps = (dispatch) => ({
  gridsterActionCreators: bindActionCreators(actions.gridster, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(Controls);
