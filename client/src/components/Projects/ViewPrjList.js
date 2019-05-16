import React, { Component } from 'react';
import SinglePrj from './SinglePrj';

class ViewPrjList extends Component {

    render() {
        const {prjList}=this.props;

        var listPrj = (!prjList || !prjList.length)?(
            <p>No project, sorry</p>
        ):
            prjList.map((prj,index)=>(
                <SinglePrj
                    key={index}
                    prj={prj}
                    className={"col-12 col-sm-12 col-md-6 col-lg-4 prj-col"}
                />
            )
        )

        return (
            <div className="row d-flex justify-content-center">
                {listPrj}
            </div>
        );
    }
}

export default ViewPrjList;