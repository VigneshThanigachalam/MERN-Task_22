import React from 'react'

export const Littlecarditem = (prop) => {
  return (
<>
<div className="col-xl-3 col-md-6 mb-4">
                            <div className="card shadow h-100 py-2" style={{borderLeft:`4px solid ${prop.borderColor}`}}>
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                {prop.title}</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{prop.cost}</div>
                                        </div>
                                        <div className="col-auto">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div></>
  )
}
