import React from 'react'
import { Link } from "react-router-dom";


const Advanced = () => {
  return (
    <div>
                   <div className="wrapper">

{/* Navbar */}
<nav className="main-header navbar navbar-expand navbar-white navbar-light">
  {/* Left navbar links */}
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
      <a href="index3.html" className="nav-link">Home</a>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
      <a href="#" className="nav-link">Contact</a>
    </li>
  </ul>
  {/* Right navbar links */}
  <ul className="navbar-nav ml-auto">
    {/* Navbar Search */}
    <li className="nav-item">
      <a className="nav-link" data-widget="navbar-search" href="#" role="button">
        <i className="fas fa-search" />
      </a>
      <div className="navbar-search-block">
        <form className="form-inline">
          <div className="input-group input-group-sm">
            <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
            <div className="input-group-append">
              <button className="btn btn-navbar" type="submit">
                <i className="fas fa-search" />
              </button>
              <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                <i className="fas fa-times" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </li>
    {/* Messages Dropdown Menu */}
    <li className="nav-item dropdown">
      <a className="nav-link" data-toggle="dropdown" href="#">
        <i className="far fa-comments" />
        <span className="badge badge-danger navbar-badge">3</span>
      </a>
      <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
        <a href="#" className="dropdown-item">
          {/* Message Start */}
          <div className="media">
            <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
            <div className="media-body">
              <h3 className="dropdown-item-title">
                Brad Diesel
                <span className="float-right text-sm text-danger"><i className="fas fa-star" /></span>
              </h3>
              <p className="text-sm">Call me whenever you can...</p>
              <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
            </div>
          </div>
          {/* Message End */}
        </a>
        <div className="dropdown-divider" />
        <a href="#" className="dropdown-item">
          {/* Message Start */}
          <div className="media">
            <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
            <div className="media-body">
              <h3 className="dropdown-item-title">
                John Pierce
                <span className="float-right text-sm text-muted"><i className="fas fa-star" /></span>
              </h3>
              <p className="text-sm">I got your message bro</p>
              <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
            </div>
          </div>
          {/* Message End */}
        </a>
        <div className="dropdown-divider" />
        <a href="#" className="dropdown-item">
          {/* Message Start */}
          <div className="media">
            <img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
            <div className="media-body">
              <h3 className="dropdown-item-title">
                Nora Silvester
                <span className="float-right text-sm text-warning"><i className="fas fa-star" /></span>
              </h3>
              <p className="text-sm">The subject goes here</p>
              <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
            </div>
          </div>
          {/* Message End */}
        </a>
        <div className="dropdown-divider" />
        <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
      </div>
    </li>
    {/* Notifications Dropdown Menu */}
    <li className="nav-item dropdown">
      <a className="nav-link" data-toggle="dropdown" href="#">
        <i className="far fa-bell" />
        <span className="badge badge-warning navbar-badge">15</span>
      </a>
      <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
        <span className="dropdown-item dropdown-header">15 Notifications</span>
        <div className="dropdown-divider" />
        <a href="#" className="dropdown-item">
          <i className="fas fa-envelope mr-2" /> 4 new messages
          <span className="float-right text-muted text-sm">3 mins</span>
        </a>
        <div className="dropdown-divider" />
        <a href="#" className="dropdown-item">
          <i className="fas fa-users mr-2" /> 8 friend requests
          <span className="float-right text-muted text-sm">12 hours</span>
        </a>
        <div className="dropdown-divider" />
        <a href="#" className="dropdown-item">
          <i className="fas fa-file mr-2" /> 3 new reports
          <span className="float-right text-muted text-sm">2 days</span>
        </a>
        <div className="dropdown-divider" />
        <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
      </div>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-widget="fullscreen" href="#" role="button">
        <i className="fas fa-expand-arrows-alt" />
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true" href="#" role="button">
        <i className="fas fa-th-large" />
      </a>
    </li>
  </ul>
</nav>
{/* /.navbar */}
{/* Main Sidebar Container */}
<aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a href="index3.html" className="brand-link">
    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">AdminLTE 3</span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a href="#" className="d-block">Alexander Pierce</a>
      </div>
    </div>
    {/* SidebarSearch Form */}
    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw" />
          </button>
        </div>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
       with font-awesome or any other icon font library */}
        <li className="nav-item menu-open">
          <a href="#" className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Dashboard
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="./index.html" className="nav-link active">
                <i className="far fa-circle nav-icon" />
                <p>Dashboard v1</p>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-edit" />
            <p>
              Forms
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
        <Link to="/General">
        <a href="pages/forms/general.html" className="nav-link">
        <i className="far fa-circle nav-icon" />
                <p>General Elements</p>
              </a>
        </Link>   
            </li>
            <li className="nav-item">
            <Link to="/Advanced">
              <a href="pages/forms/advanced.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Advanced Elements</p>
              </a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-table" />
            <p>
              Tables
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item"> 
            <Link to="/Datatables">
              <a href="pages/tables/data.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>DataTables</p>
              </a>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
  {/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Advanced Form</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Advanced Form</li>
            </ol>
          </div>
        </div>
      </div>{/* /.container-fluid */}
    </section>
    {/* Main content */}
    <section className="content">
      <div className="container-fluid">
        {/* SELECT2 EXAMPLE */}
        <div className="card card-default">
          <div className="card-header">
            <h3 className="card-title">Select2 (Default Theme)</h3>
            <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse">
                <i className="fas fa-minus" />
              </button>
              <button type="button" className="btn btn-tool" data-card-widget="remove">
                <i className="fas fa-times" />
              </button>
            </div>
          </div>
          {/* /.card-header */}
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Minimal</label>
                  <select className="form-control select2" style={{width: '100%'}}>
                    <option selected="selected">Alabama</option>
                    <option>Alaska</option>
                    <option>California</option>
                    <option>Delaware</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Washington</option>
                  </select>
                </div>
                {/* /.form-group */}
                <div className="form-group">
                  <label>Disabled</label>
                  <select className="form-control select2" disabled="disabled" style={{width: '100%'}}>
                    <option selected="selected">Alabama</option>
                    <option>Alaska</option>
                    <option>California</option>
                    <option>Delaware</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Washington</option>
                  </select>
                </div>
                {/* /.form-group */}
              </div>
              {/* /.col */}
              <div className="col-md-6">
                <div className="form-group">
                  <label>Multiple</label>
                  <select className="select2" multiple="multiple" data-placeholder="Select a State" style={{width: '100%'}}>
                    <option>Alabama</option>
                    <option>Alaska</option>
                    <option>California</option>
                    <option>Delaware</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Washington</option>
                  </select>
                </div>
                {/* /.form-group */}
                <div className="form-group">
                  <label>Disabled Result</label>
                  <select className="form-control select2" style={{width: '100%'}}>
                    <option selected="selected">Alabama</option>
                    <option>Alaska</option>
                    <option disabled="disabled">California (disabled)</option>
                    <option>Delaware</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Washington</option>
                  </select>
                </div>
                {/* /.form-group */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
            <h5>Custom Color Variants</h5>
            <div className="row">
              <div className="col-12 col-sm-6">
                <div className="form-group">
                  <label>Minimal (.select2-danger)</label>
                  <select className="form-control select2 select2-danger" data-dropdown-css-class="select2-danger" style={{width: '100%'}}>
                    <option selected="selected">Alabama</option>
                    <option>Alaska</option>
                    <option>California</option>
                    <option>Delaware</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Washington</option>
                  </select>
                </div>
                {/* /.form-group */}
              </div>
              {/* /.col */}
              <div className="col-12 col-sm-6">
                <div className="form-group">
                  <label>Multiple (.select2-purple)</label>
                  <div className="select2-purple">
                    <select className="select2" multiple="multiple" data-placeholder="Select a State" data-dropdown-css-class="select2-purple" style={{width: '100%'}}>
                      <option>Alabama</option>
                      <option>Alaska</option>
                      <option>California</option>
                      <option>Delaware</option>
                      <option>Tennessee</option>
                      <option>Texas</option>
                      <option>Washington</option>
                    </select>
                  </div>
                </div>
                {/* /.form-group */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.card-body */}
          <div className="card-footer">
            Visit <a href="https://select2.github.io/">Select2 documentation</a> for more examples and information about
            the plugin.
          </div>
        </div>
        {/* /.card */}
        {/* SELECT2 EXAMPLE */}
        <div className="card card-default">
          <div className="card-header">
            <h3 className="card-title">Select2 (Bootstrap4 Theme)</h3>
            <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse">
                <i className="fas fa-minus" />
              </button>
              <button type="button" className="btn btn-tool" data-card-widget="remove">
                <i className="fas fa-times" />
              </button>
            </div>
          </div>
          {/* /.card-header */}
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Minimal</label>
                  <select className="form-control select2bs4" style={{width: '100%'}}>
                    <option selected="selected">Alabama</option>
                    <option>Alaska</option>
                    <option>California</option>
                    <option>Delaware</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Washington</option>
                  </select>
                </div>
                {/* /.form-group */}
                <div className="form-group">
                  <label>Disabled</label>
                  <select className="form-control select2bs4" disabled="disabled" style={{width: '100%'}}>
                    <option selected="selected">Alabama</option>
                    <option>Alaska</option>
                    <option>California</option>
                    <option>Delaware</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Washington</option>
                  </select>
                </div>
                {/* /.form-group */}
              </div>
              {/* /.col */}
              <div className="col-md-6">
                <div className="form-group">
                  <label>Multiple</label>
                  <select className="select2bs4" multiple="multiple" data-placeholder="Select a State" style={{width: '100%'}}>
                    <option>Alabama</option>
                    <option>Alaska</option>
                    <option>California</option>
                    <option>Delaware</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Washington</option>
                  </select>
                </div>
                {/* /.form-group */}
                <div className="form-group">
                  <label>Disabled Result</label>
                  <select className="form-control select2bs4" style={{width: '100%'}}>
                    <option selected="selected">Alabama</option>
                    <option>Alaska</option>
                    <option disabled="disabled">California (disabled)</option>
                    <option>Delaware</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Washington</option>
                  </select>
                </div>
                {/* /.form-group */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.card-body */}
          <div className="card-footer">
            Visit <a href="https://select2.github.io/">Select2 documentation</a> for more examples and information about
            the plugin.
          </div>
        </div>
        {/* /.card */}
        <div className="card card-default">
          <div className="card-header">
            <h3 className="card-title">Bootstrap Duallistbox</h3>
            <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse">
                <i className="fas fa-minus" />
              </button>
              <button type="button" className="btn btn-tool" data-card-widget="remove">
                <i className="fas fa-times" />
              </button>
            </div>
          </div>
          {/* /.card-header */}
          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label>Multiple</label>
                  <select className="duallistbox" multiple="multiple">
                    <option selected>Alabama</option>
                    <option>Alaska</option>
                    <option>California</option>
                    <option>Delaware</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Washington</option>
                  </select>
                </div>
                {/* /.form-group */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.card-body */}
          <div className="card-footer">
            Visit <a href="https://github.com/istvan-ujjmeszaros/bootstrap-duallistbox#readme">Bootstrap Duallistbox</a> for more examples and information about
            the plugin.
          </div>
        </div>
        {/* /.card */}
        <div className="row">
          <div className="col-md-6">
            <div className="card card-danger">
              <div className="card-header">
                <h3 className="card-title">Input masks</h3>
              </div>
              <div className="card-body">
                {/* Date dd/mm/yyyy */}
                <div className="form-group">
                  <label>Date masks:</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="far fa-calendar-alt" /></span>
                    </div>
                    <input type="text" className="form-control" data-inputmask-alias="datetime" data-inputmask-inputformat="dd/mm/yyyy" data-mask />
                  </div>
                  {/* /.input group */}
                </div>
                {/* /.form group */}
                {/* Date mm/dd/yyyy */}
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="far fa-calendar-alt" /></span>
                    </div>
                    <input type="text" className="form-control" data-inputmask-alias="datetime" data-inputmask-inputformat="mm/dd/yyyy" data-mask />
                  </div>
                  {/* /.input group */}
                </div>
                {/* /.form group */}
                {/* phone mask */}
                <div className="form-group">
                  <label>US phone mask:</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-phone" /></span>
                    </div>
                    <input type="text" className="form-control" data-inputmask="&quot;mask&quot;: &quot;(999) 999-9999&quot;" data-mask />
                  </div>
                  {/* /.input group */}
                </div>
                {/* /.form group */}
                {/* phone mask */}
                <div className="form-group">
                  <label>Intl US phone mask:</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-phone" /></span>
                    </div>
                    <input type="text" className="form-control" data-inputmask="'mask': ['999-999-9999 [x99999]', '+099 99 99 9999[9]-9999']" data-mask />
                  </div>
                  {/* /.input group */}
                </div>
                {/* /.form group */}
                {/* IP mask */}
                <div className="form-group">
                  <label>IP mask:</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-laptop" /></span>
                    </div>
                    <input type="text" className="form-control" data-inputmask="'alias': 'ip'" data-mask />
                  </div>
                  {/* /.input group */}
                </div>
                {/* /.form group */}
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
            <div className="card card-info">
              <div className="card-header">
                <h3 className="card-title">Color &amp; Time Picker</h3>
              </div>
              <div className="card-body">
                {/* Color Picker */}
                <div className="form-group">
                  <label>Color picker:</label>
                  <input type="text" className="form-control my-colorpicker1" />
                </div>
                {/* /.form group */}
                {/* Color Picker */}
                <div className="form-group">
                  <label>Color picker with addon:</label>
                  <div className="input-group my-colorpicker2">
                    <input type="text" className="form-control" />
                    <div className="input-group-append">
                      <span className="input-group-text"><i className="fas fa-square" /></span>
                    </div>
                  </div>
                  {/* /.input group */}
                </div>
                {/* /.form group */}
                {/* time Picker */}
                <div className="bootstrap-timepicker">
                  <div className="form-group">
                    <label>Time picker:</label>
                    <div className="input-group date" id="timepicker" data-target-input="nearest">
                      <input type="text" className="form-control datetimepicker-input" data-target="#timepicker" />
                      <div className="input-group-append" data-target="#timepicker" data-toggle="datetimepicker">
                        <div className="input-group-text"><i className="far fa-clock" /></div>
                      </div>
                    </div>
                    {/* /.input group */}
                  </div>
                  {/* /.form group */}
                </div>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
          {/* /.col (left) */}
          <div className="col-md-6">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Date picker</h3>
              </div>
              <div className="card-body">
                {/* Date */}
                <div className="form-group">
                  <label>Date:</label>
                  <div className="input-group date" id="reservationdate" data-target-input="nearest">
                    <input type="text" className="form-control datetimepicker-input" data-target="#reservationdate" />
                    <div className="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                      <div className="input-group-text"><i className="fa fa-calendar" /></div>
                    </div>
                  </div>
                </div>
                {/* Date and time */}
                <div className="form-group">
                  <label>Date and time:</label>
                  <div className="input-group date" id="reservationdatetime" data-target-input="nearest">
                    <input type="text" className="form-control datetimepicker-input" data-target="#reservationdatetime" />
                    <div className="input-group-append" data-target="#reservationdatetime" data-toggle="datetimepicker">
                      <div className="input-group-text"><i className="fa fa-calendar" /></div>
                    </div>
                  </div>
                </div>
                {/* /.form group */}
                {/* Date range */}
                <div className="form-group">
                  <label>Date range:</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="far fa-calendar-alt" />
                      </span>
                    </div>
                    <input type="text" className="form-control float-right" id="reservation" />
                  </div>
                  {/* /.input group */}
                </div>
                {/* /.form group */}
                {/* Date and time range */}
                <div className="form-group">
                  <label>Date and time range:</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="far fa-clock" /></span>
                    </div>
                    <input type="text" className="form-control float-right" id="reservationtime" />
                  </div>
                  {/* /.input group */}
                </div>
                {/* /.form group */}
                {/* Date and time range */}
                <div className="form-group">
                  <label>Date range button:</label>
                  <div className="input-group">
                    <button type="button" className="btn btn-default float-right" id="daterange-btn">
                      <i className="far fa-calendar-alt" /> Date range picker
                      <i className="fas fa-caret-down" />
                    </button>
                  </div>
                </div>
                {/* /.form group */}
              </div>
              <div className="card-footer">
                Visit <a href="https://getdatepicker.com/5-4/">tempusdominus </a> for more examples and information about
                the plugin.
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
            {/* iCheck */}
            <div className="card card-success">
              <div className="card-header">
                <h3 className="card-title">iCheck Bootstrap - Checkbox &amp; Radio Inputs</h3>
              </div>
              <div className="card-body">
                {/* Minimal style */}
                <div className="row">
                  <div className="col-sm-6">
                    {/* checkbox */}
                    <div className="form-group clearfix">
                      <div className="icheck-primary d-inline">
                        <input type="checkbox" id="checkboxPrimary1" defaultChecked />
                        <label htmlFor="checkboxPrimary1">
                        </label>
                      </div>
                      <div className="icheck-primary d-inline">
                        <input type="checkbox" id="checkboxPrimary2" />
                        <label htmlFor="checkboxPrimary2">
                        </label>
                      </div>
                      <div className="icheck-primary d-inline">
                        <input type="checkbox" id="checkboxPrimary3" disabled />
                        <label htmlFor="checkboxPrimary3">
                          Primary checkbox
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    {/* radio */}
                    <div className="form-group clearfix">
                      <div className="icheck-primary d-inline">
                        <input type="radio" id="radioPrimary1" name="r1" defaultChecked />
                        <label htmlFor="radioPrimary1">
                        </label>
                      </div>
                      <div className="icheck-primary d-inline">
                        <input type="radio" id="radioPrimary2" name="r1" />
                        <label htmlFor="radioPrimary2">
                        </label>
                      </div>
                      <div className="icheck-primary d-inline">
                        <input type="radio" id="radioPrimary3" name="r1" disabled />
                        <label htmlFor="radioPrimary3">
                          Primary radio
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Minimal red style */}
                <div className="row">
                  <div className="col-sm-6">
                    {/* checkbox */}
                    <div className="form-group clearfix">
                      <div className="icheck-danger d-inline">
                        <input type="checkbox" defaultChecked id="checkboxDanger1" />
                        <label htmlFor="checkboxDanger1">
                        </label>
                      </div>
                      <div className="icheck-danger d-inline">
                        <input type="checkbox" id="checkboxDanger2" />
                        <label htmlFor="checkboxDanger2">
                        </label>
                      </div>
                      <div className="icheck-danger d-inline">
                        <input type="checkbox" disabled id="checkboxDanger3" />
                        <label htmlFor="checkboxDanger3">
                          Danger checkbox
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    {/* radio */}
                    <div className="form-group clearfix">
                      <div className="icheck-danger d-inline">
                        <input type="radio" name="r2" defaultChecked id="radioDanger1" />
                        <label htmlFor="radioDanger1">
                        </label>
                      </div>
                      <div className="icheck-danger d-inline">
                        <input type="radio" name="r2" id="radioDanger2" />
                        <label htmlFor="radioDanger2">
                        </label>
                      </div>
                      <div className="icheck-danger d-inline">
                        <input type="radio" name="r2" disabled id="radioDanger3" />
                        <label htmlFor="radioDanger3">
                          Danger radio
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Minimal red style */}
                <div className="row">
                  <div className="col-sm-6">
                    {/* checkbox */}
                    <div className="form-group clearfix">
                      <div className="icheck-success d-inline">
                        <input type="checkbox" defaultChecked id="checkboxSuccess1" />
                        <label htmlFor="checkboxSuccess1">
                        </label>
                      </div>
                      <div className="icheck-success d-inline">
                        <input type="checkbox" id="checkboxSuccess2" />
                        <label htmlFor="checkboxSuccess2">
                        </label>
                      </div>
                      <div className="icheck-success d-inline">
                        <input type="checkbox" disabled id="checkboxSuccess3" />
                        <label htmlFor="checkboxSuccess3">
                          Success checkbox
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    {/* radio */}
                    <div className="form-group clearfix">
                      <div className="icheck-success d-inline">
                        <input type="radio" name="r3" defaultChecked id="radioSuccess1" />
                        <label htmlFor="radioSuccess1">
                        </label>
                      </div>
                      <div className="icheck-success d-inline">
                        <input type="radio" name="r3" id="radioSuccess2" />
                        <label htmlFor="radioSuccess2">
                        </label>
                      </div>
                      <div className="icheck-success d-inline">
                        <input type="radio" name="r3" disabled id="radioSuccess3" />
                        <label htmlFor="radioSuccess3">
                          Success radio
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.card-body */}
              <div className="card-footer">
                Many more skins available. <a href="https://bantikyan.github.io/icheck-bootstrap/">Documentation</a>
              </div>
            </div>
            {/* /.card */}
            {/* Bootstrap Switch */}
            <div className="card card-secondary">
              <div className="card-header">
                <h3 className="card-title">Bootstrap Switch</h3>
              </div>
              <div className="card-body">
                <input type="checkbox" name="my-checkbox" defaultChecked data-bootstrap-switch />
                <input type="checkbox" name="my-checkbox" defaultChecked data-bootstrap-switch data-off-color="danger" data-on-color="success" />
              </div>
            </div>
            {/* /.card */}
          </div>
          {/* /.col (right) */}
        </div>
        {/* /.row */}
        <div className="row">
          <div className="col-md-12">
            <div className="card card-default">
              <div className="card-header">
                <h3 className="card-title">bs-stepper</h3>
              </div>
              <div className="card-body p-0">
                <div className="bs-stepper">
                  <div className="bs-stepper-header" role="tablist">
                    {/* your steps here */}
                    <div className="step" data-target="#logins-part">
                      <button type="button" className="step-trigger" role="tab" aria-controls="logins-part" id="logins-part-trigger">
                        <span className="bs-stepper-circle">1</span>
                        <span className="bs-stepper-label">Logins</span>
                      </button>
                    </div>
                    <div className="line" />
                    <div className="step" data-target="#information-part">
                      <button type="button" className="step-trigger" role="tab" aria-controls="information-part" id="information-part-trigger">
                        <span className="bs-stepper-circle">2</span>
                        <span className="bs-stepper-label">Various information</span>
                      </button>
                    </div>
                  </div>
                  <div className="bs-stepper-content">
                    {/* your steps content here */}
                    <div id="logins-part" className="content" role="tabpanel" aria-labelledby="logins-part-trigger">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                      </div>
                      <button className="btn btn-primary" onclick="stepper.next()">Next</button>
                    </div>
                    <div id="information-part" className="content" role="tabpanel" aria-labelledby="information-part-trigger">
                      <div className="form-group">
                        <label htmlFor="exampleInputFile">File input</label>
                        <div className="input-group">
                          <div className="custom-file">
                            <input type="file" className="custom-file-input" id="exampleInputFile" />
                            <label className="custom-file-label" htmlFor="exampleInputFile">Choose file</label>
                          </div>
                          <div className="input-group-append">
                            <span className="input-group-text">Upload</span>
                          </div>
                        </div>
                      </div>
                      <button className="btn btn-primary" onclick="stepper.previous()">Previous</button>
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.card-body */}
              <div className="card-footer">
                Visit <a href="https://github.com/Johann-S/bs-stepper/#how-to-use-it">bs-stepper documentation</a> for more examples and information about the plugin.
              </div>
            </div>
            {/* /.card */}
          </div>
        </div>
        {/* /.row */}
        <div className="row">
          <div className="col-md-12">
            <div className="card card-default">
              <div className="card-header">
                <h3 className="card-title">Dropzone.js <small><em>jQuery File Upload</em> like look</small></h3>
              </div>
              <div className="card-body">
                <div id="actions" className="row">
                  <div className="col-lg-6">
                    <div className="btn-group w-100">
                      <span className="btn btn-success col fileinput-button">
                        <i className="fas fa-plus" />
                        <span>Add files</span>
                      </span>
                      <button type="submit" className="btn btn-primary col start">
                        <i className="fas fa-upload" />
                        <span>Start upload</span>
                      </button>
                      <button type="reset" className="btn btn-warning col cancel">
                        <i className="fas fa-times-circle" />
                        <span>Cancel upload</span>
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center">
                    <div className="fileupload-process w-100">
                      <div id="total-progress" className="progress progress-striped active" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={0}>
                        <div className="progress-bar progress-bar-success" style={{width: '0%'}} data-dz-uploadprogress />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table table-striped files" id="previews">
                  <div id="template" className="row mt-2">
                    <div className="col-auto">
                      <span className="preview"><img src="data:," alt data-dz-thumbnail /></span>
                    </div>
                    <div className="col d-flex align-items-center">
                      <p className="mb-0">
                        <span className="lead" data-dz-name />
                        (<span data-dz-size />)
                      </p>
                      <strong className="error text-danger" data-dz-errormessage />
                    </div>
                    <div className="col-4 d-flex align-items-center">
                      <div className="progress progress-striped active w-100" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={0}>
                        <div className="progress-bar progress-bar-success" style={{width: '0%'}} data-dz-uploadprogress />
                      </div>
                    </div>
                    <div className="col-auto d-flex align-items-center">
                      <div className="btn-group">
                        <button className="btn btn-primary start">
                          <i className="fas fa-upload" />
                          <span>Start</span>
                        </button>
                        <button data-dz-remove className="btn btn-warning cancel">
                          <i className="fas fa-times-circle" />
                          <span>Cancel</span>
                        </button>
                        <button data-dz-remove className="btn btn-danger delete">
                          <i className="fas fa-trash" />
                          <span>Delete</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.card-body */}
              <div className="card-footer">
                Visit <a href="https://www.dropzonejs.com">dropzone.js documentation</a> for more examples and information about the plugin.
              </div>
            </div>
            {/* /.card */}
          </div>
        </div>
        {/* /.row */}
      </div>
      {/* /.container-fluid */}
    </section>
    {/* /.content */}
  </div>
  {/* /.content-wrapper */}
  <footer className="main-footer">
    <div className="float-right d-none d-sm-block">
      <b>Version</b> 3.2.0
    </div>
    <strong>Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
  </footer>
  {/* Control Sidebar */}
  <aside className="control-sidebar control-sidebar-dark">
    {/* Control sidebar content goes here */}
  </aside>
  {/* /.control-sidebar */}
</div>

    </div>
  )
}

export default Advanced