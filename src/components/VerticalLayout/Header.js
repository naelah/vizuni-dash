/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
// TODO: Modify dropdown for faculty list

import React, { useState } from 'react';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

// Reactstrap
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col } from 'reactstrap';

// Import menuDropdown
import { withNamespaces } from 'react-i18next';
import LanguageDropdown from '../CommonForBoth/TopbarDropdown/LanguageDropdown';
import NotificationDropdown from '../CommonForBoth/TopbarDropdown/NotificationDropdown';
import ProfileMenu from '../CommonForBoth/TopbarDropdown/ProfileMenu';

import megamenuImg from '../../assets/images/megamenu-img.png';
import logo from '../../assets/images/logo.svg';
import logoLightPng from '../../assets/images/logo-light.png';
import logoLightSvg from '../../assets/images/logo-light.svg';
import logoDark from '../../assets/images/logo-dark.png';

// import images
import github from '../../assets/images/brands/github.png';
import bitbucket from '../../assets/images/brands/bitbucket.png';
import dribbble from '../../assets/images/brands/dribbble.png';
import dropbox from '../../assets/images/brands/dropbox.png';
import mail_chimp from '../../assets/images/brands/mail_chimp.png';
import slack from '../../assets/images/brands/slack.png';

import FacultyDropdown from './FacultyDropdown';

// i18n

// Redux Store
import {
  showRightSidebarAction,
  toggleLeftmenu,
  changeSidebarType,
} from '../../store/actions';

const Header = (props) => {
  const [search, setsearch] = useState(false);
  const [megaMenu, setmegaMenu] = useState(false);
  const [socialDrp, setsocialDrp] = useState(false);

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }

  function tToggle() {
    props.toggleLeftmenu(!props.leftMenu);
    if (props.leftSideBarType === 'default') {
      props.changeSidebarType('condensed', isMobile);
    } else if (props.leftSideBarType === 'condensed') {
      props.changeSidebarType('default', isMobile);
    }
  }

  const FacultyFilterDropdown = () => (
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
          <Col sm={8}>
            <Row>
              <Col md={4}>
                <h5 className="font-size-14 mt-0">Cawangan</h5>
                <ul className="list-unstyled megamenu-list">
                  <li>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        PUSAT ASASI
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        UiTM CAWANGAN JOHOR
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        UiTM CAWANGAN KEDAH
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        UiTM CAWANGAN KELANTAN
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        UiTM CAWANGAN MELAKA
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        UiTM CAWANGAN NEGERI SEMBILAN
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        UiTM CAWANGAN PAHANG
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        UiTM CAWANGAN PERAK
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        UiTM CAWANGAN PERLIS
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        UiTM CAWANGAN PULAU PINANG
                      </label>
                    </div>
                  </li>
                </ul>
              </Col>

              <Col md={4}>
                <ul className="list-unstyled megamenu-list">
                  <li>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        UiTM CAWANGAN SABAH
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        UiTM CAWANGAN SARAWAK
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        UiTM CAWANGAN SELANGOR
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        UiTM CAWANGAN TERENGGANU
                      </label>
                    </div>
                  </li>

                  <br />
                  <h5 className="font-size-14 mt-0">Fakulti</h5>
                  <li>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        FAKULTI FARMASI
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        FAKULTI FILEM, TEATER DAN ANIMASI
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        FAKULTI KEJURUTERAAN AWAM
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        KEJURUTERAAN ELEKTRIK
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        FAKULTI KEJURUTERAAN KIMIA
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        FAKULTI KEJURUTERAAN MEKANIKAL
                      </label>
                    </div>
                  </li>
                </ul>
              </Col>

              <Col md={4}>
                <ul className="list-unstyled megamenu-list">
                  <li>
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <Link to="#">FAKULTI KOMUNIKASI DAN PENGAJIAN MEDIA</Link>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <Link to="#">FAKULTI MUZIK</Link>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <Link to="#">FAKULTI PENDIDIKAN</Link>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <Link to="#">FAKULTI PENGURUSAN DAN PERNIAGAAN</Link>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <Link to="#">FAKULTI PENGURUSAN HOTEL DAN PELANCONGAN</Link>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <Link to="#">FAKULTI PENGURUSAN MAKLUMAT</Link>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <Link to="#">FAKULTI PERAKAUNAN</Link>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <Link to="#">FAKULTI PERGIGIAN</Link>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <Link to="#">FAKULTI PERLADANGAN DAN AGROTEKNOLOGI</Link>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <Link to="#">FAKULTI PERUBATAN</Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col sm={4}>
            <Row>
              <Col sm={6}>
                <ul className="list-unstyled megamenu-list">
                  <li>
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <Link to="#">FAKULTI SAINS GUNAAN</Link>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <Link to="#">FAKULTI PERGIGIAN</Link>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <Link to="#">FAKULTI SAINS KESIHATAN</Link>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <Link to="#">FAKULTI SAINS KOMPUTER DAN MATEMATIK</Link>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <Link to="#">
                      FAKULTI SAINS PENTADBIRAN DAN PENGAJIAN POLISI
                    </Link>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <Link to="#">FAKULTI SAINS SUKAN DAN REKREASI</Link>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <Link to="#">FAKULTI SENI LUKIS DAN SENI REKA</Link>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <Link to="#">FAKULTI SENIBINA PERANCANGAN DAN UKUR</Link>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <Link to="#">FAKULTI UNDANG-UNDANG</Link>
                  </li>
                </ul>
              </Col>

              <Col sm={5}>
                <div>
                  <img
                    src={megamenuImg}
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </DropdownMenu>
    </Dropdown>
  );

  return (
    <>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <Link to="/" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={logo} alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src={logoDark} alt="" height="17" />
                </span>
              </Link>

              <Link to="/" className="logo logo-light">
                <span className="logo-sm">
                  <img src={logoLightSvg} alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src={logoLightPng} alt="" height="19" />
                </span>
              </Link>
            </div>

            <button
              type="button"
              onClick={() => {
                tToggle();
              }}
              className="btn btn-sm px-3 font-size-16 header-item waves-effect"
              id="vertical-menu-btn"
            >
              <i className="fa fa-fw fa-bars" />
            </button>

            {/* <form className="app-search d-none d-lg-block">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder={`${props.t('Search')}...`}
                />
                <span className="bx bx-search-alt" />
              </div>
            </form> */}
            <FacultyDropdown />
            {/* <FacultyFilterDropdown /> */}
          </div>
          <div className="d-flex">
            {/* <div className="dropdown d-inline-block d-lg-none ml-2">
              <button
                onClick={() => {
                  setsearch(!search);
                }}
                type="button"
                className="btn header-item noti-icon waves-effect"
                id="page-header-search-dropdown"
              >
                <i className="mdi mdi-magnify" />
              </button>
              <div
                className={
                  search
                    ? 'dropdown-menu dropdown-menu-lg dropdown-menu-right p-0 show'
                    : 'dropdown-menu dropdown-menu-lg dropdown-menu-right p-0'
                }
                aria-labelledby="page-header-search-dropdown"
              >
                <form className="p-3">
                  <div className="form-group m-0">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search ..."
                        aria-label="Recipient's username"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">
                          <i className="mdi mdi-magnify" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div> */}

            {/* <LanguageDropdown /> */}

            {/* <Dropdown
              className="d-none d-lg-inline-block ml-1"
              isOpen={socialDrp}
              toggle={() => {
                setsocialDrp(!socialDrp);
              }}
            >
              <DropdownToggle
                className="btn header-item noti-icon waves-effect"
                tag="button"
              >
                <i className="bx bx-customize" />
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-lg" right>
                <div className="px-lg-2">
                  <Row className="no-gutters">
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src={github} alt="Github" />
                        <span>GitHub</span>
                      </Link>
                    </Col>
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src={bitbucket} alt="bitbucket" />
                        <span>Bitbucket</span>
                      </Link>
                    </Col>
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src={dribbble} alt="dribbble" />
                        <span>Dribbble</span>
                      </Link>
                    </Col>
                  </Row>

                  <Row className="no-gutters">
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src={dropbox} alt="dropbox" />
                        <span>Dropbox</span>
                      </Link>
                    </Col>
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src={mail_chimp} alt="mail_chimp" />
                        <span>Mail Chimp</span>
                      </Link>
                    </Col>
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src={slack} alt="slack" />
                        <span>Slack</span>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </DropdownMenu>
            </Dropdown> */}

            <div className="dropdown d-none d-lg-inline-block ml-1">
              <button
                type="button"
                onClick={() => {
                  toggleFullscreen();
                }}
                className="btn header-item noti-icon waves-effect"
                data-toggle="fullscreen"
              >
                <i className="bx bx-fullscreen" />
              </button>
            </div>

            {/* <NotificationDropdown /> */}
            {/* <ProfileMenu /> */}

            <div
              role="presentation"
              onClick={() => {
                props.showRightSidebarAction(!props.showRightSidebar);
              }}
              className="dropdown d-inline-block"
            >
              <button
                type="button"
                className="btn header-item noti-icon right-bar-toggle waves-effect"
              >
                <i className="bx bx-cog bx-spin" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
const mapStatetoProps = (state) => {
  const {
    layoutType,
    showRightSidebar,
    leftMenu,
    leftSideBarType,
  } = state.Layout;
  return { layoutType, showRightSidebar, leftMenu, leftSideBarType };
};

export default connect(mapStatetoProps, {
  showRightSidebarAction,
  toggleLeftmenu,
  changeSidebarType,
})(withNamespaces()(Header));
