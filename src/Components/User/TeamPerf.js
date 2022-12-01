import React from 'react';

const TeamPerf = () => {
	return (
			<div className="col-md-9">
				<div className="card">
					<div className="card-header border-transparent">
						<h3 className="card-title">Projects workflow</h3>
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
										<th>Project</th>
										<th>Sprint</th>
										<th>ClickUp insert</th>
										<th>User stories</th>
										<th>Sprint plunning</th>
										<th>Sprint backlog</th>
										<th>P.O</th>
										<th>State</th>
										<th>Start Date</th>
										<th>Due Date</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<a href="pages/examples/invoice.html">Medical Center</a>
										</td>
										<td>Affichage Urbaine</td>
										<td>100%</td>
										<td>100%</td>
										<td>100%</td>
										<td>100%</td>
										<td>farah</td>
										<td>Validate</td>
										<td>05/05/2023</td>
										<td>30/05/2023</td>
									</tr>
								</tbody>
							</table>
						</div>
						{/* /.table-responsive */}
					</div>
					{/* /.card-body */}
					<div className="card-footer clearfix">
						<a href="javascript:void(0)" className="btn btn-sm btn-info float-left">
							Place New Order
						</a>
						<a href="javascript:void(0)" className="btn btn-sm btn-secondary float-right">
							View All Orders
						</a>
					</div>
					{/* /.card-footer */}
				</div>
			</div>
	);
};

export default TeamPerf;
