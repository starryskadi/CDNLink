'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Banner = function (_React$Component) {
  _inherits(Banner, _React$Component);

  function Banner() {
    _classCallCheck(this, Banner);

    return _possibleConstructorReturn(this, (Banner.__proto__ || Object.getPrototypeOf(Banner)).apply(this, arguments));
  }

  _createClass(Banner, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: this.props.bootstrapmode },
        React.createElement(
          "a",
          { href: this.props.href },
          React.createElement("img", { src: this.props.src, className: "img-responsive" })
        )
      );
    }
  }]);

  return Banner;
}(React.Component);

var TextBanner = function (_React$Component2) {
  _inherits(TextBanner, _React$Component2);

  function TextBanner() {
    _classCallCheck(this, TextBanner);

    return _possibleConstructorReturn(this, (TextBanner.__proto__ || Object.getPrototypeOf(TextBanner)).apply(this, arguments));
  }

  _createClass(TextBanner, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: this.props.bootstrapmode },
          this.props.text
        )
      );
    }
  }]);

  return TextBanner;
}(React.Component);

var VoucherBanner = function (_React$Component3) {
  _inherits(VoucherBanner, _React$Component3);

  function VoucherBanner() {
    _classCallCheck(this, VoucherBanner);

    return _possibleConstructorReturn(this, (VoucherBanner.__proto__ || Object.getPrototypeOf(VoucherBanner)).apply(this, arguments));
  }

  _createClass(VoucherBanner, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "row padding-box-cus" },
        React.createElement(
          "div",
          { className: "col-sm-4 col-xs-4" },
          React.createElement(
            "a",
            { href: this.props.href },
            React.createElement("img", { src: this.props.imgsrc, className: "img-shadow center-block img-responsive", alt: "" })
          )
        ),
        React.createElement(
          "div",
          { className: "col-sm-4 col-xs-4 text-box" },
          React.createElement(
            "h4",
            { className: "off-price" },
            " ",
            this.props.offPrice
          ),
          React.createElement(
            "p",
            { className: "upper-style" },
            " ",
            this.props.onlyOn
          ),
          React.createElement(
            "p",
            { className: "upper-style" },
            " ",
            this.props.offCondition
          )
        ),
        React.createElement(
          "div",
          { className: "col-sm-4 col-xs-4 text-center voucher-box" },
          React.createElement(
            "div",
            { className: "col-sm-12 col-xs-12 vouchercode" },
            this.props.voucherCode
          ),
          React.createElement(
            "div",
            { className: "upper-style" },
            React.createElement(
              "span",
              { className: "miniorder" },
              this.props.miniOrder,
              " "
            )
          )
        )
      );
    }
  }]);

  return VoucherBanner;
}(React.Component);