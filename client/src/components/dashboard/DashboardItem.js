import React from 'react';
import history from '../../history';

export default function DashboardItem(props) {
    return (
        <div>
             
             <a href="/line" onClick={() => history.push('/line')} className="btn btn-danger btn-lg btn-block"><i className="fa fa-signal"></i> Line</a>
             <a href="/pie" onClick={() => history.push('/pie')} className="btn btn-warning btn-lg btn-block"><i className="fa fa-pie-chart"></i> Pie</a>
             <a href="/bar" onClick={() => history.push('/bar')} className="btn btn-primary btn-lg btn-block"><i className="fa fa-bar-chart"></i> Bar</a>
             <a href="/map" onClick={() => history.push('/map')} className="btn btn-success btn-lg btn-block"><i className="fa fa-globe"></i> Maps</a>
             <a href="/login" onClick={() => history.push('/login')} className="btn btn-info btn-lg btn-block"><i className="fa fa-user-circle"></i>  Admin Panel</a>
        </div>
    )
}