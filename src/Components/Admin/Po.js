import React, { Component } from 'react'
import ContentEditable from 'react-contenteditable'
const Po = () => {
  return (
<div className="card">
    <div className="card-header border-transparent">
        <h3 className="card-title">Latest Orders</h3>
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
    <div className="card-body p-0">
        <div className="table-responsive">
            <table id="example" className="table m-0 table-hover">
                <thead>
                    <tr>
                        <th>Project</th>
                        <th>Product Owner</th>
                        <th>Location</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Résidence K2</td>
                        <td>Khalil</td>
                        <td>Tunis</td>
                        <td class="project-actions text-right">
                            <a class="btn btn-info btn-sm" href="#">
                                <i class="fas fa-pencil-alt">
                                </i>
                                Edit
                            </a>
                            <a class="btn btn-danger btn-sm" href="#">
                                <i class="fas fa-trash">
                                </i>
                                Delete
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        {/* /.table-responsive */}
    </div>
    {/* /.card-body */}
    <div className="card-footer clearfix">
        <a href="javascript:void(0)" className="btn btn-sm btn-info float-left">Add new Project</a>
        <a href="javascript:void(0)" className="btn btn-sm btn-secondary float-right">export to EXL</a>
    </div>
    {/* /.card-footer */}
</div>
    )
}

export default Po