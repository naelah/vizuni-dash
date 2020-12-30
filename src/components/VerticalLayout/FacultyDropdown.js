import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col } from 'reactstrap';
import {
  addFacultyFilter,
  removeFacultyFilter,
  addCawanganFilter,
  removeCawanganFilter,
} from 'store/actions';
import FACULTY_DATA from 'data/faculty';
import CAWANGAN_DATA from 'data/cawangan';
import styled from 'styled-components';

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    'head head'
    'main main';

  .header {
    grid-area: head;
  }
`;

const FacultyDropdown = () => {
  const [megaMenu, setmegaMenu] = useState(false);
  const dispatch = useDispatch();
  const { selectedCawangan } = useSelector(({ Cawangan }) => Cawangan);
  const { selectedFaculty } = useSelector(({ Faculty }) => Faculty);

  const handleSelectCawangan = ({ target: { checked, id } }) => {
    if (checked) dispatch(addCawanganFilter(id));
    else dispatch(removeCawanganFilter(id));
  };
  const handleSelectFaculty = ({ target: { checked, id } }) => {
    if (checked) dispatch(addFacultyFilter(id));
    else dispatch(removeFacultyFilter(id));
  };

  const renderItems = () => (
    <Grid className="list-unstyled megamenu-list">
      <Grid className="list-unstyled megamenu-list">
        <h5 className="header font-size-14 mt-0">Cawangan</h5>
        {CAWANGAN_DATA.map((item) => (
          <li key={item.id}>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id={item.id}
                onChange={handleSelectCawangan}
                checked={selectedCawangan.includes(item.id)}
              />
              <label className="custom-control-label" htmlFor={item.id}>
                {item.label}
              </label>
            </div>
          </li>
        ))}
      </Grid>
      <Grid className="list-unstyled megamenu-list">
        <h5 className="header font-size-14 mt-0">FAKULTI</h5>
        {FACULTY_DATA.map((item) => (
          <li key={item.id}>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id={item.id}
                onChange={handleSelectFaculty}
                checked={selectedFaculty.includes(item.id)}
              />
              <label className="custom-control-label" htmlFor={item.id}>
                {item.label}
              </label>
            </div>
          </li>
        ))}
      </Grid>
    </Grid>
  );

  return (
    <Dropdown
      className="dropdown-mega d-none d-lg-block ml-2"
      isOpen={megaMenu}
      toggle={() => {
        setmegaMenu(!megaMenu);
      }}
    >
      <DropdownToggle
        className="btn header-item waves-effect"
        caret
        tag="button"
      >
        Faculty <i className="mdi mdi-chevron-down" />
      </DropdownToggle>
      <DropdownMenu className="dropdown-megamenu">
        <Row>
          <Col>{renderItems()}</Col>
        </Row>
      </DropdownMenu>
    </Dropdown>
  );
};

// FacultyDropdown.propTypes = {};

export default FacultyDropdown;
