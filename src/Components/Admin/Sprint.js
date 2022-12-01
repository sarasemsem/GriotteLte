import React from 'react'

const Sprint = () => {
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
          <table className="table m-0">
            <thead>
              <tr>
                <th>Sprint</th>
                <th>Project</th>
                <th>P.O</th>
                <th>Start date</th>
                <th>Due date</th>
                <th>Second due date</th>
                <th>Third due date</th>
                <th>State</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Affiche Urbaine</td>
                <td>Résidence K2</td>
                <td>Khalil</td>
                <td>30/01/2022</td>
                <td>12/02/2022</td>
                <td>12/02/2022</td>
                <td>12/02/2022</td>
                <td><span class="badge badge-success">Done</span></td>
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
        <a href="javascript:void(0)" className="btn btn-sm btn-info float-left">Add new Sprint</a>
        <a href="javascript:void(0)" className="btn btn-sm btn-secondary float-right">export to EXL</a>
      </div>
      {/* /.card-footer */}
    </div>
      )
}

export default Sprint