'use strict';

class Banner extends React.Component {
  render() {
    return (
        <div className={this.props.bootstrapmode}>
            <a href={this.props.href}><img src={this.props.src} className="img-responsive"/></a>
       </div>
    )
  }
}
class TextBanner extends React.Component {
    render() {
      return (
        <div>
          <div className={this.props.bootstrapmode}>
              {this.props.text}
         </div>
        </div>
      )
    }
  }
class VoucherBanner extends React.Component {
    render() {
      return (
        <div className="row padding-box-cus">
       <div className="col-sm-4 col-xs-4">
       <a href={this.props.href}><img src={this.props.imgsrc} className="img-shadow center-block img-responsive" alt="" /></a>
       </div>
       <div className="col-sm-4 col-xs-4 text-box">
           <h4 className="off-price"> {this.props.offPrice}</h4>
           <p className="upper-style"> {this.props.onlyOn}</p>
           <p className="upper-style"> {this.props.offCondition}</p>  
       </div>
       <div className="col-sm-4 col-xs-4 text-center voucher-box">
           <div className="col-sm-12 col-xs-12 vouchercode">
               {this.props.voucherCode}
           </div> 
           <div className="upper-style">
                <span className="miniorder">{this.props.miniOrder} </span>
           </div>
       </div>
       </div>
      )
    }
}
