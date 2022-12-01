import React from 'react'
import BestPerf from './BestPerf'
import TeamPerf from './TeamPerf'
import PerfPo from './PerfPo'

const UserView = () => {
  return (
    <div class="container-fluid">
      <PerfPo />
      <div className="row"> {/* Left col */}
        <BestPerf /><TeamPerf />
      </div>
    </div>
  )
}

export default UserView