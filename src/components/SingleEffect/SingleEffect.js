import React, { Component } from "react";

import { Modal, Button, Icon } from "antd";
import "./SingleEffect.css";
import { css } from "emotion";

import { CopyToClipboard } from "react-copy-to-clipboard";

export default class SingleEffect extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
      copiedHTML: false,
      copiedCSS: false
    });
  };

  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };
  render() {
    // var myJSON = JSON.stringify(this.props.Code);
    console.log(this.props.Code);
    return (
      <div>
        <Button
          type="ghost"
          className={this.props.Style}
          onClick={this.showModal}
        >
          {this.props.Title === "Spinner" ? null : this.props.Title}
        </Button>

        <Modal
          title={this.props.Title}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {/* HTML Copy */}
          <CopyToClipboard
            text={this.props.htmlVariable}
            onCopy={() => this.setState({ copiedHTML: true })}
          >
            {this.state.copiedHTML ? (
              <span
                className={css`
                  @keyframes fade-in-right {
                    from {
                      opacity: 0;
                      transform: translateX(-15px);
                    }
                    to {
                      opacity: 1;
                      transform: translateX(0);
                    }
                  }

                  @keyframes grow-left {
                    from {
                      transform: scaleX(0);
                    }
                    to {
                      transform: scaleX(1);
                    }
                  }
                  opacity: 0;
                  animation: fade-in-right ease 0.4s forwards;
                  float: right;
                  color: #1d9af2;
                `}
              >
                Copied
              </span>
            ) : (
              <Icon
                type="copy"
                className={css`
                  float: right;
                  font-size: 26px;
                `}
              />
            )}
          </CopyToClipboard>

          <>{this.props.Code}</>

          {/* CSS Copy */}
          <CopyToClipboard
            text={this.props.cssVariable}
            onCopy={() => this.setState({ copiedCSS: true })}
          >
            {this.state.copiedCSS ? (
              <span
                className={css`
                  @keyframes fade-in-right {
                    from {
                      opacity: 0;
                      transform: translateX(-15px);
                    }
                    to {
                      opacity: 1;
                      transform: translateX(0);
                    }
                  }

                  @keyframes grow-left {
                    from {
                      transform: scaleX(0);
                    }
                    to {
                      transform: scaleX(1);
                    }
                  }
                  opacity: 0;
                  animation: fade-in-right ease 0.4s forwards;
                  float: right;
                  color: #1d9af2;
                  position: absolute;
                  top: 210px;
                  right: 25px;
                `}
              >
                Copied
              </span>
            ) : (
              <Icon
                type="copy"
                className={css`
                  float: right;
                  font-size: 26px;
                  position: absolute;
                  top: 210px;
                  right: 25px;
                `}
              />
            )}
          </CopyToClipboard>
        </Modal>
      </div>
    );
  }
}
