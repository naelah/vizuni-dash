/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
// SimpleBar
import SimpleBar from 'simplebar-react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeParams,
  clearParams,
  showRightSidebarAction,
} from 'store/actions';

import './rightbar.scss';

const RightSidebar = () => {
  const dispatch = useDispatch();
  const params = useSelector(({ Params }) => Params);
  const updateParams = (value) => dispatch(changeParams(value));
  const closeSidebar = () => dispatch(showRightSidebarAction(false));

  const renderSlider = (key, title) => (
    <div className="py-2">
      <div className="d-flex justify-content-between mb-3 mt-0">
        <h5 className="font-size-14">{title || key}</h5>
        <b>{params[key] || 1}</b>
      </div>
      <span className="float-left mt-4">1</span>
      <span className="float-right  mt-4">40</span>
      <Slider
        tooltip={false}
        min={1}
        max={40}
        value={params[key]}
        orientation="horizontal"
        onChange={(value) => {
          updateParams({ [`${key}`]: value });
        }}
      />
    </div>
  );

  return (
    <>
      <div className="right-bar">
        <SimpleBar style={{ height: '900px' }}>
          <div data-simplebar className="h-100">
            <div className="rightbar-title px-3 py-4">
              <Link
                to="#"
                onClick={closeSidebar}
                className="right-bar-toggle float-right"
              >
                <i className="mdi mdi-close noti-icon" />
              </Link>
              <h5 className="m-0">Settings</h5>
            </div>

            <hr className="my-0" />

            <div className="p-4">
              <button
                className="btn btn-light btn-block mt-3"
                type="button"
                onClick={() => dispatch(clearParams())}
              >
                <i className="mdi mdi-filter-remove-outline mr-1" />
                Clear Parameters
              </button>
              {renderSlider('ST101')}
              {renderSlider('ST102')}
              {renderSlider('ST103')}
              {renderSlider('ST204')}
              {renderSlider('ST205')}
              {renderSlider('ST206')}
              {renderSlider('ST307')}
              {renderSlider('ST308')}
              {renderSlider('ST309')}
            </div>
          </div>
        </SimpleBar>
      </div>
      <div
        className="rightbar-overlay"
        onClick={closeSidebar}
        role="presentation"
      />
    </>
  );
};

export default RightSidebar;
